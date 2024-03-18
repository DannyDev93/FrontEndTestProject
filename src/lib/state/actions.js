export const saveProducts = (products) => {
  if (products?.length > 0) {
    const products_to_save = JSON.stringify(products);
    localStorage.setItem("frontend_test_cart", products_to_save);
  } else {
    localStorage.removeItem("frontend_test_cart");
  }
};
