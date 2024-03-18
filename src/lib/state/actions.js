export const saveProducts = (products) => {
  if (products?.length > 0) {
    const products_to_save = JSON.stringify(products);
    localStorage.setItem("frontend_test_cart", products_to_save);
  } else {
    localStorage.removeItem("frontend_test_cart");
  }
};

export const saveUser = (user) => {
  if (user?.length > 0) {
    const user_to_save = JSON.stringify(user);
    localStorage.setItem("frontend_test_cart_user", user_to_save);
  } else {
    localStorage.removeItem("frontend_test_cart_user");
  }
};
