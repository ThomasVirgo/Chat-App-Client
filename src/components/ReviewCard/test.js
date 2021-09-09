import ReviewCard from ".";
import { screen, render } from "@testing-library/react";

describe("Renders not review card", () => {
    const stubResult = { username: 'Bob', rating: 3.4, message: 'Testing, testing'}

    test("it renders a div", () => {
        render(<ReviewCard review={stubResult}/>)
        const reviewCardDiv = screen.getByLabelText("review-card-outline");
        expect(reviewCardDiv).toBeInTheDocument();
    })

    test("it renders the result object contents", () => {
        render(<ReviewCard review={stubResult}/>)
        const renderedCardDetails = screen.getByLabelText("review-card-info");
        expect(renderedCardDetails.textContent).toContain('Bob');
        expect(renderedCardDetails.textContent).toContain(3.4);
    })
})