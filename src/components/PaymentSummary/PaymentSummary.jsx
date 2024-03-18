import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearArrayResult } from "../../lib/state/purchaseResult";

function PaymentSummary(props) {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearArrayResult());
  };

  return (
    <>
      {props?.result?.length > 0 ? (
        <div className="purchase-result">
          <h2>Thank you for your purchase!</h2>
          <div className="purchase-result-summary">
            <h4>Here's what you bought:</h4>
            <div>
              {props?.result[0].products?.map((prod, index) => {
                let tempTotal;
                tempTotal;
                if (index <= 9) {
                  return (
                    <div key={index}>
                      <p>{prod?.name}</p>
                    </div>
                  );
                } else if (index == 10) {
                  return (
                    <div key={index}>
                      <p>And more!</p>
                    </div>
                  );
                } else {
                  return <></>;
                }
              })}
            </div>
            <h4>For a total of: ${props?.result[0]?.total_price}</h4>
            <a
              className={`pay-button`}
              onClick={() => {
                handleClear();
              }}
            >
              Accept
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PaymentSummary;
