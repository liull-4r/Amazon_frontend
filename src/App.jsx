import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line no-undef
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./Components/File/Firebase";
import { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Components/Orders/Orders";

function App() {


  const promise = loadStripe('pk_test_51OP0hkKEn03huA0VC0OypkhyxT79qHwUTSoyFiohaS6FWT05htCa8r1CjMSuKYU69TuY1HL6VKw4EVa0H2PLHKWm00f5W060uh');
  
   const [, dispatch] = useStateValue();
   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
     
       if (authUser) {
         dispatch({
           type: "SET_USER",
           user: authUser,
         });
       } else {
        
         dispatch({
           type: "SET_USER",
           user: null,
         });
       }
     });
   }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<>
          <Header />
          <Orders/>
        </>} />
        <Route path="/payment" element={
          
          <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </>
          } />
      </Routes>
    </div>
  );
}

export default App;
