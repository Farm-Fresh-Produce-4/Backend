const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findByCustomerId,
  findByFarmerId,
};

async function add(orderDetails, orderItems) {
  const [orderResults] = await db('order')
    .insert(orderDetails)
    .returning('*');

  let newOrder 
  for (let i = 0; i < orderItems.length; i++) {
    newOrder = {
      quantity: orderItems[i].quantity,
      produce_id: orderItems[i].item_id,
      farms_id: orderItems[i].farms_id,
      orders: orderItems[i].orders_id,
      users_id: orderItems[i].users_id
    }
    await db('order_items').insert(newOrder);
  }
  const [newOrderItems] = await findByCustomerId(orderDetails.users_id)
  return {order_details: orderResults, orderItems: newOrderItems}
}

function findByCustomerId(id) {
  return db('order_items as oi')
    .where({ 'oi.users_id': id })
    .join('orders as o', 'o.id', 'oi.orders_id')
    .join('farms as f', 'f.id', 'oi.farms_id')
    .join('produce as p', 'p.id', 'oi.produce_item')
    .select('o.address', 'o.order_date', 'o.delivered', 'p.name', 'oi.quantity', 'f.name')
}

function findByFarmerId(id) {
  return db('order_items as oi')
    .where({ 'oi.farms_id': id })
    .join('orders as o', 'o.id', 'oi.order_id')
    .join('users as u', 'u.id', 'oi.users_id' )
    .join('produce as p', 'p.id', 'oi.produce_item')
    .select('o.address', 'o.order_date', 'o.delivered', 'p.name', 'oi.quantity', 'f.name')
}