import React, { useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

import Button1 from "../micro/Button1";
import Btn12 from "../micro/btn12";
import Social from "../micro/social";
import { Reveal, RevealR } from "../reveal";

const Hero = () => {
    return (
        <HeroSt>
            <Margin>
                <Text>
                    <Reveal>
                        <Pre>I AM</Pre>
                        <Name>ANDREA MANGIACAVALLO</Name>
                        <Post>
                            I DESIGN DIGITAL PRODUCTS THAT HELP BUSINESSES GROW,
                            TELL YOUR STORY AND BUILD UP YOUR IMAGE.
                        </Post>
                        <Link href="/contact">
                            <BtnWrp>
                                <Btn12 text={"GET IN TOUCH"} />
                            </BtnWrp>
                        </Link>
                    </Reveal>
                    <Social />
                </Text>
            </Margin>
        </HeroSt>
    );
};

export default Hero;

const HeroSt = styled.section`
    height: 100vh;
    min-height: 700px;

    background-image: linear-gradient(
        hsla(0, 0%, 100%, 1),
        hsla(220, 10%, 40%, 1)
    );

    background-size: cover;

    display: flex;
    justify-content: center;
`;
const Margin = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 10px;

    display: flex;
    align-items: center;
    border: 0px solid black;
`;

const Text = styled.div`
    position: relative;
    margin: 0 20px;

    display: flex;
    flex-direction: column;

    align-items: start;

    h2,
    p,
    h4 {
        z-index: 1;
    }
`;

const BtnWrp = styled.a`
    display: inline-block;
`;
const Pre = styled.h4`
    font-size: clamp(8px, 1vw, 24px);
    line-height: clamp(12px, 2vw, 30px);
    letter-spacing: clamp(0px, 0.3vw, 3px);
    margin: 0 0 5px;

    color: hsla(0, 0%, 55%, 1);
`;

const shining = keyframes`
0% {
-webkit-transform: scale(0) rotate(315deg);
opacity: 0;
}
80% {
-webkit-transform: scale(0) rotate(315deg);
opacity: 0.5;
}
81% {
-webkit-transform: scale(4) rotate(315deg);
opacity: 0.9;
}
100% {
-webkit-transform: scale(50) rotate(315deg);
opacity: 0;
}
`;

const Name = styled.h2`
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0px 0px 10px;
    font-size: clamp(20px, 6.5vw, 90px);
    line-height: clamp(20px, 7vw, 100px);

    font-family: Neon Heavy;
    letter-spacing: clamp(1px, 0.3vw, 3px);
    white-space: pre-line;
    color: hsla(345, 80%, 50%, 1);

    :before {
        position: absolute;
        content: "";
        display: inline-block;
        top: -30px;
        left: 0;
        width: 50px;
        height: 100%;
        background-color: hsla(0, 0%, 100%, 0.5);
        animation: ${shining} 7s infinite;
        animation-timing-function: cubic-bezier(0.28, 0, 0, 0.99);
    }
`;
const Post = styled.p`
    max-width: 500px;
    margin: 0 0 10px;
    font-size: clamp(8px, 1.2vw, 24px);
    line-height: clamp(12px, 2.2vw, 30px);
    letter-spacing: clamp(0px, 0.1vw, 2px);

    color: hsla(0, 0%, 25%, 1);
`;
