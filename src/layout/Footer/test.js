import Footer from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Renders footer", () => {
    beforeEach(() => {
        renderWithReduxProviderAuth(<Footer />, {wrapper: MemoryRouter})
    })

    test("footer is rendered", () => {
        const footer = renderWithReduxProviderAuth(<Footer />, {wrapper: MemoryRouter})
        expect(footer).toBeTruthy;
    })

    test("it renders an <a> tag", () => {
        const ghLink = screen.getByLabelText("github-link");
        expect(ghLink).toBeTruthy;
    })

})