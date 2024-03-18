import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../lib/state/productSlice";

function ProductCard(props) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem("New Item"));
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card-top">
          <img src={props?.img} alt="" />
        </div>
        <div className="product-card-bottom">
          <h3 className="prodcut-name">{props?.name}</h3>
          <p className="product-description">{props?.description}</p>
          <p className="product-price">${props?.price}</p>
          <div
            className="add-product-container"
            onClick={() => {
              handleAdd();
            }}
          >
            <a className="add-product">
              <FaPlus /> <span>Agregar al carrito</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
