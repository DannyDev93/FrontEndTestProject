import { useEffect, useState } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PaymentForm from "../PaymentForm/PaymentForm";

function CartSummary(props) {
  const [producNames, setProductNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [toggleForm, setToggleForm] = useState(false);

  const paymentErrorNotification = (payment_name) => {
    toast.error(`${payment_name} payment is not available yet!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleToggle = (state) => {
    setToggleForm(state);
  };

  useEffect(() => {
    if (props?.products && props?.products?.length > 0) {
      let productNamesArray = [];
      let totalPriceTemp = 0;
      props?.products?.forEach((product) => {
        productNamesArray.push({
          product_name: product?.name,
          product_price: product?.price,
        });
        totalPriceTemp += parseInt(product?.price);
      });
      setProductNames(productNamesArray);
      setTotalPrice(totalPriceTemp);
    }
  }, [props?.products]);

  return (
    <>
      <div className="cart-summary">
        <h2>ITEMS</h2>
        <div className="cart-summary-top">
          {producNames.map((item, index) => {
            return (
              <div key={index}>
                <p>{item?.product_name}</p>
                <p>${item?.product_price}</p>
              </div>
            );
          })}
        </div>

        <div className="cart-summary-bottom">
          <p>TOTAL</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className="summary-payment-container">
        <h2>PAYMENT METHOD</h2>
        <div className="payment-cards">
          <a
            className="payment-card"
            onClick={() => {
              paymentErrorNotification("PayPal");
            }}
          >
            <FaCcPaypal />
          </a>
          <a
            className="payment-card"
            onClick={() => {
              setToggleForm(!toggleForm);
            }}
          >
            <FaCreditCard />
          </a>
          <a
            className="payment-card"
            onClick={() => {
              paymentErrorNotification("Apple Pay");
            }}
          >
            <FaCcApplePay />
          </a>
        </div>
      </div>
      <PaymentForm
        toggled={toggleForm}
        onToggleEmit={handleToggle}
        total={totalPrice}
      />
    </>
  );
}

export default CartSummary;
