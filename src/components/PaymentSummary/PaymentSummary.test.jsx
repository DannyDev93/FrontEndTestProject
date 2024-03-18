import React from "react";
import { render } from "@testing-library/react";
import PaymentSummary from "./PaymentSummary";
import { Provider } from "react-redux";
import store from "../../lib/state/store";

test("renders PaymentSummary correctly", () => {
  render(
    <Provider store={store}>
      <PaymentSummary />
    </Provider>
  );
});
