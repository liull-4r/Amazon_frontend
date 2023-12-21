import  { useState, useEffect } from 'react';
import {db} from '../File/Firebase'
import Order from '../Order/Order';
import './Orders.css';
import { useStateValue } from '../StateProvider/StateProvider';

function Orders() {
  const [{ user }] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          // eslint-disable-next-line react/jsx-key
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;