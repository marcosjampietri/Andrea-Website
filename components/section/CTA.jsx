import styled from "styled-components";
import Link from "next/link";
import Btn12 from "../micro/btn12W";

const CallToAction = () => {
    return (
        <CallToActionSt>
            <h2>SO, IF YOU ARE INTERESTED IN MY SERVICES...</h2>
            <p>
                I currently have a limited amount of vacancies at lower rates
                for people who are interested in my work. Don't waste your time
                and get in touch with me right now. Just click on the button
                below.
            </p>
            <Link href="/contact">
                <a>
                    <Btn12 text={"GET IN TOUCH >>"} />
                </a>
            </Link>
        </CallToActionSt>
    );
};

export default CallToAction;

const CallToActionSt = styled.div`
    height: 50vh;
    min-height: 500px;
    background-image: linear-gradient(
        hsla(345, 100%, 55%, 1),
        hsla(345, 80%, 40%, 1)
    );

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        max-width: 800px;
        text-align: center;
        font-size: 3em;
        margin: 50px;

        color: white;
    }
    p {
        max-width: 800px;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 1px;

        color: white;
    }
`;
