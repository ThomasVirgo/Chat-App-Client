import React from "react";
import { CarouselContainer, Slider } from "../../components";

function LandingPage() {
    return (
        <>
         <h1>Landing Page</h1>
         <Slider data={[1,2,3,4,5]} />
        </>
    );
}

export default LandingPage;