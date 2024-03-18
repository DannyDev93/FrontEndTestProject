export const purchaseProducts = async (purchase) => {
  let url = "https://65f71879b4f842e808851aaf.mockapi.io/purchase";
  let body = {
    username: purchase?.buyer_name,
    user_phone: purchase?.buyer_phone,
    user_email: purchase?.buyer_email,
    products: purchase?.buyer_products,
    total_price: purchase?.buyer_total,
    payment: {
      type: purchase?.buyer_payment?.type,
      cc_number: purchase?.buyer_payment?.cc_number,
      cc_ccv: purchase?.buyer_payment?.cc_ccv,
      cc_expiry: purchase?.buyer_payment?.cc_expiry,
      cc_holder: purchase?.buyer_name,
    },
  };
  let purchaseRes = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return { message: "Succesfull purchase!", code: 200, data: data };
    })
    .catch((error) => {
      return { message: "Error!", code: 500 };
    });

  return purchaseRes;
};

export const getProducts = async () => {
  let url = "https://65f71879b4f842e808851aaf.mockapi.io/products";
  let products = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return [];
    });

  return products;
};
