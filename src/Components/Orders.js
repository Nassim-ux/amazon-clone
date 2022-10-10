import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "../Styles/Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

import {
  doc,
  onSnapshot,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const usersRef = doc(db, "users", user?.uid);
      const q = query(
        collection(usersRef, "orders"),
        orderBy("created", "desc")
      );
      // const querySnapshot = getDocs(q);

      const unsub = onSnapshot(q, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
