import Header from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";


describe("Renders header", () => {

    beforeEach(() => {
        renderWithReduxProviderAuth(<Header />, {wrapper: MemoryRouter})
    })

    test("header is rendered", () => {
        const header = renderWithReduxProviderAuth(<Header />, {wrapper: MemoryRouter})
        expect(header).toBeTruthy;
    })

    test("it renders a logo", () => {
        const logo = screen.getByLabelText("logo");
        expect(logo).toBeInTheDocument();
    })

    test("it renders a slogan", () => {
        const slogan = screen.getByText("Find London's best dating ideas");
        expect(slogan).toBeInTheDocument();
    })

    test("logo is wrapped in an <a> tag", () => {
        const homeLink = screen.getByLabelText("home-link");
        expect(homeLink).toBeTruthy;
    })

    test("logo has an alternative text", () => {
        const altText = screen.getByAltText("vibes-logo");
        expect(altText).toBeTruthy();
    })

})
