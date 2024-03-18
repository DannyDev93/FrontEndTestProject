import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import PaymentForm from "./PaymentForm";
import { Provider } from "react-redux";
import store from "../../lib/state/store";

describe("PaymentForm", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    );
  });
});
