// let url = "https://65f71879b4f842e808851aaf.mockapi.io/purchase";

//   let body = [
//     {
//       username: "username 1",
//       user_id: "user_id 1",
//       user_phone: "user_phone 1",
//       user_email: "user_email 1",
//       user_test_object: "user_test_object 1",
//       products: [{ product: "product" }],
//       total_price: "total_price 1",
//       payment: { payment: "payment" },
//     },
//   ];

//   let purchase = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(body), // body data type must match "Content-Type" header
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));