const db = require('../data/dbConfig.js');

module.exports = {
  add,
  findByCustomerId,
  findByFarmId,
};

async function add(orderDetails, orderItems) {
  const [orderResults] = await db('orders')
    .insert(orderDetails)
    .returning('*');

  let orderInfo; 
  for (let i = 0; i < orderItems.length; i++) {
    orderInfo = {
      quantity: orderItems[i].quantity,
      item_id: orderItems[i].item_id,
      farms_id: orderItems[i].farms_id,
      orders_id: orderItems[i].orders_id,
      users_id: orderItems[i].users_id
    }
    await db('order_items').insert(orderInfo);
  }
  const [newOrderItems] = await findByCustomerId(orderDetails.user_id)
  return Promise.resolve({
    order_details: orderResults,
    orderItems: newOrderItems,
  });
}

function findByCustomerId(id) {
  return db('order_items as oi')
    .where({ 'oi.users_id': id })
    .join('orders as o', 'o.id', 'oi.orders_id')
    .join('farms as f', 'f.id', 'oi.farms_id')
    .join('produce_items as pi', 'pi.id', 'oi.item_id')
    .select(
      'o.address', 
      'o.order_date', 
      'o.delivered', 
      'pi.name as item_bought', 
      'oi.quantity', 
      'f.name as seller')
}

function findByFarmId(id) {
  return db('order_items')
    .where({ 'order_items.farms_id': id })
    .join('orders', 'orders.id', 'order_items.orders_id')
    .join('users', 'users.id', 'order_items.users_id' )
    .join('produce_items', 'produce_items.id', 'order_items.item_id')
    .select(
      'orders.address', 
      'orders.order_date', 
      'orders.delivered', 
      'produce_items.name', 
      'order_items.quantity', 
      'users.username'
    )
}