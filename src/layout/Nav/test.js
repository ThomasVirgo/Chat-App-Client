import Nav from ".";
import Header from "../Header"
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";


describe("Renders nav", () => {
    beforeEach(() => {
        renderWithReduxProviderAuth(<Nav />, {wrapper: MemoryRouter})
    })

    test("it renders a div", () => {
        const navbar = screen.getByLabelText("navbar");
        expect(navbar).toBeInTheDocument();
    })

    test("loads with no menu", () => {
        const menuWrapper = screen.queryByLabelText("menu-wrapper");
        expect(menuWrapper).not.toBeInTheDocument();
    })


    test("menu opens on click", () => {
        userEvent.click(screen.getByLabelText("clickable"));
        expect(screen.getByLabelText("menu-wrapper")).toBeInTheDocument()
    })

    test("menu contains a ul", () => {
        userEvent.click(screen.getByLabelText("clickable"));
        expect(screen.getByLabelText("navlist")).toBeInTheDocument()
    })

})