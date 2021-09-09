import Header from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Renders header", () => {

    test("it renders a logo", () => {
        renderWithReduxProviderAuth(<Header />, {wrapper: MemoryRouter});
        const logo = screen.getByLabelText("logo");
        expect(logo).toBeInTheDocument();
    })

})







// 1. Test image is present (logo)
// 2. Test slogan is present
// 3. Test slogan "Find London's best dating ideas"
// 4. Check <i></i> tages are present
// 5. Check <i> element contains a pseudo element and renders a div with menu
