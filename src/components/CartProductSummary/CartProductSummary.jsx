import { FaMinus } from "react-icons/fa";
import { removeItem } from "../../lib/state/productSlice";
import { useDispatch } from "react-redux";

function CartProductSummary(props) {
  const dispatch = useDispatch();
  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <>
      <div className="product-summary-card">
        <div className="product-summary-img">
          <img src={props?.product?.img} alt="" />
        </div>
        <div className="product-summary-info">
          <h3>{props?.product?.name}</h3>
          <p>{props?.product?.description}</p>
        </div>
        <div className="product-summary-price">
          <p>${props?.product?.price}</p>
        </div>
        <div
          className="product-summary-remove"
          onClick={() => {
            handleRemoveItem(props?.index);
          }}
        >
          <a>
            <FaMinus />
            <p>Remove</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default CartProductSummary;
