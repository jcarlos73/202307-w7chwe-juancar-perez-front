import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import ListPage from "./ListPage";

describe("Given a ListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'List Page' inside a heading", () => {
      const headingText = "List Page";

      render(
        <Provider store={store}>
          <ListPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
