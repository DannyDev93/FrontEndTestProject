import { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { purchaseProducts } from "../../lib/apis/services";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearArray } from "../../lib/state/productSlice";
import { fillItemsResult } from "../../lib/state/purchaseResult";

function PaymentForm(props) {
  const product_array = useSelector((state) => state.array);

  const emitToggle = (state) => {
    props?.onToggleEmit(state);
  };
  const dispatch = useDispatch();

  const [canPay, setCanPay] = useState(false);

  const [purchasedProducts, setPurchasedProducts] = useState(null);

  const [ccNumber, setCcNumber] = useState("");
  const [ccExpiry, setCcExpiry] = useState("");
  const [ccCvc, setCcCvc] = useState("");
  const [ccName, setCcName] = useState("");
  const [phone, setPhone] = useState("");
  const [ccEmail, setCcEmail] = useState("");

  const [purchaseMade, setPurchaseMade] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handlePurchase = async () => {
    const purchaseObject = {
      buyer_name: ccName,
      buyer_phone: phone,
      buyer_email: ccEmail,
      buyer_payment: {
        type: "credit",
        cc_number: ccNumber,
        cc_ccv: ccCvc,
        cc_expiry: ccExpiry,
      },
      buyer_products: product_array,
      buyer_total: props?.total,
    };

    let purchaseRes = await purchaseProducts(purchaseObject);

    if (purchaseRes?.code == 200) {
      dispatch(clearArray());
      dispatch(fillItemsResult([purchaseRes?.data]));
      setPurchaseMade(true);
      setPurchasedProducts({
        products: purchaseRes?.data?.products,
        total: purchaseRes?.data?.total_price,
      });
    } else {
      toast.error(`We could not complete the purchase, try again later!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (
      ccNumber?.length >= 16 &&
      ccCvc?.length >= 3 &&
      ccExpiry?.length >= 4 &&
      ccName?.length >= 5 &&
      phone?.length >= 11 &&
      ccEmail?.length > 0 &&
      emailRegex.test(ccEmail)
    ) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [ccNumber, ccExpiry, ccCvc, ccName, phone, ccEmail]);

  return (
    <>
      <div
        className={`payment-form ${!props?.toggled ? "inactive" : "active"}`}
      >
        <a
          className="close-form"
          onClick={() => {
            emitToggle(!props?.toggled);
          }}
        >
          <IoCloseCircleSharp />
        </a>
        <div className="payment-form-container">
          <div className="card-img-container">
            <div className="card">
              <Cards
                cvc={ccCvc}
                expiry={ccExpiry}
                focused={"true"}
                name={ccName}
                number={ccNumber}
              />
            </div>

            <div className="payment-summary-form">
              <h2>TOTAL A PAGAR</h2>
              <h4>${props?.total}</h4>
            </div>
          </div>

          <form className="pay-form">
            <input
              className={`payment-input ${
                ccNumber?.length && ccNumber?.length <= 15 ? "input-error" : ""
              }`}
              type="number"
              name="cc-number"
              placeholder="Card Number"
              value={ccNumber}
              autoComplete="off"
              onInput={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setCcNumber(e.target.value);
                }
              }}
            />

            <input
              type="tel"
              className={`payment-input ${
                ccCvc?.length && ccCvc?.length <= 2 ? "input-error" : ""
              }`}
              name="cc-cvc"
              placeholder="Card CVC"
              value={ccCvc}
              autoComplete="off"
              onInput={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  if (e.target.value.length <= 4) {
                    setCcCvc(e.target.value);
                  }
                }
              }}
            />
            <input
              type="tel"
              className={`payment-input ${
                ccExpiry?.length && ccExpiry?.length <= 3 ? "input-error" : ""
              }`}
              name="cc-expiry"
              placeholder="Card Expiry"
              value={ccExpiry}
              autoComplete="off"
              onInput={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  if (e.target.value.length <= 4) {
                    setCcExpiry(e.target.value);
                  }
                }
              }}
            />
            <input
              type="text"
              className={`payment-input ${
                ccName?.length && ccName?.length <= 4 ? "input-error" : ""
              }`}
              name="cc-holder"
              placeholder="Card Holder"
              value={ccName}
              autoComplete="off"
              onChange={(e) => {
                setCcName(e.target.value);
              }}
            />

            <input
              type="tel"
              className={`payment-input ${
                phone?.length && phone?.length <= 10 ? "input-error" : ""
              }`}
              name="phone"
              placeholder="Phone Number"
              value={phone}
              autoComplete="off"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="email"
              className={`payment-input ${
                ccEmail?.length &&
                ccEmail?.length > 0 &&
                !emailRegex.test(ccEmail)
                  ? "input-error"
                  : ""
              }`}
              name="email"
              placeholder="Email"
              value={ccEmail}
              autoComplete="off"
              onChange={(e) => {
                setCcEmail(e.target.value);
              }}
            />
            <a
              className={`pay-button ${canPay ? "active" : "inactive"}`}
              onClick={() => {
                handlePurchase();
              }}
            >
              Pay
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
