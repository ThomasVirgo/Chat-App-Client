import NotFound from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Renders not found page", () => {

    test("it renders a div", () => {
        renderWithReduxProviderAuth(<NotFound />, {wrapper: MemoryRouter});
        const notFoundPage = screen.getByLabelText("notfound");
        expect(notFoundPage).toBeInTheDocument();
    })

    test("it renders a h1", () => {
        renderWithReduxProviderAuth(<NotFound />, {wrapper: MemoryRouter});
        const oops = screen.getByLabelText("oops-notification");
        expect(oops).toBeInTheDocument();
    })

    test("it renders a h3", () => {
        renderWithReduxProviderAuth(<NotFound />, {wrapper: MemoryRouter});
        const pageNotExist = screen.getByLabelText("nonexisting-page-notification");
        expect(pageNotExist).toBeInTheDocument();
    })
})
