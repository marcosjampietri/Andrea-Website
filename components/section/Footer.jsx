import styled from "styled-components";

const Footer = () => {
    return (
        <FooterSt>
            <Container>
                <div>
                    <Column>
                        <aside>
                            <h3>WELCOME</h3>
                            <p>
                                I graduated from the University of Sports of
                                Torino in 2015, where I specialise in individual
                                and group adventure sports, swimming, diving,
                                alpinism and martial arts.
                            </p>
                        </aside>
                    </Column>
                    <Column>
                        <aside>
                            <h3>CONTACT</h3>
                            <p>Camden Town, London, UK</p>
                            <Pair>
                                <p>Phone:</p>
                                <p>+44 7440450444</p>
                            </Pair>
                            <Pair>
                                <p>Email:</p>
                                <h5> andrea.mangiacavallo@gmail.com </h5>
                            </Pair>
                        </aside>
                    </Column>
                    <Column>
                        <Social>
                            <h3>SOCIAL</h3>
                            <ul>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.facebook.com/andre.siffredi"
                                    >
                                        <img
                                            src="/icons/facebook.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.instagram.com/andrea_mangiacavallo/"
                                    >
                                        <img
                                            src="/icons/instagram.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Instagram</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.youtube.com/channel/UCFjLZ79E8WI8FyrUInjdAbg"
                                    >
                                        <img
                                            src="/icons/youtube.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Youtube</p>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/in/andrea-mangiacavallo-ab8009142/"
                                    >
                                        <img
                                            src="/icons/linkedin.svg"
                                            alt="LinkedIn Logo"
                                        />
                                        <p>LinkedIn</p>
                                    </a>
                                </li>
                            </ul>
                        </Social>
                    </Column>
                </div>
            </Container>
            <CopyR>
                <div>
                    <p> © copyright 2021 by </p>
                    <a
                        href="https://www.marcosjampietri.co.uk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        marcosjampietri.co.uk
                    </a>
                </div>
            </CopyR>
        </FooterSt>
    );
};

export default Footer;

const FooterSt = styled.section`
    width: 100vw;
    padding: 100px 0px;

    background-color: hsla(0, 0%, 10%, 1);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Container = styled.div`

margin-bottom: 50px;


    > div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }


    }
    ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    a {
        color: #007bff;


    }

    }
`;

const Social = styled.aside`
    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 0px 40px 0px 0px;
            width: 170px;
            a {
                display: flex;
                filter: grayscale(100%);
                transition: 0.8s;
                p {
                    transition: 0.8s;

                    color: hsla(345, 0%, 50%, 1);
                }
                :hover {
                    transition: 0.2s;
                    filter: grayscale(0%);
                    p {
                        transition: 0.2s;
                        color: hsla(345, 100%, 60%, 1);
                    }
                    img {
                        transition: 0.2s;
                        background-color: hsla(0, 0%, 100%, 0.8);
                    }
                }
                img {
                    background-color: hsla(0, 0%, 100%, 0.2);

                    margin: 10px 25px 10px 0px;
                    padding: 2px;
                    width: 35px;
                    height: 35px;

                    border-radius: 5px;
                }
            }
        }
    }
`;

const Column = styled.div`
    margin: 20px;
    padding: 5vh 20px;
    flex-wrap: wrap;
    flex: 1 1 30%;

    border-top: 1px solid #303030;
    border-right: 2px solid #303030;



    display: flex;
    justify-content: center;

    aside, ${Social} {

    width: 70%;

    h3 {
        margin: 0.5rem 0;
        padding-bottom: 20px;
        letter-spacing: 10px;
        font-size: 1.5em;
        color: #bebebe;

    }
    p {
        letter-spacing: 4px;
        line-height: 1.8em;
        margin: 1rem 0;
        max-width: 280px;
        font-size: 0.8em;


    }

`;

const Pair = styled.div`
    display: flex;
    align-items: center;

    p {
        padding: 0px 20px 0px 0px;
    }
`;

const CopyR = styled.div`
    width: 100%;
    height: 10vh;

    div {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        text-align: center;

        border-top: 1px solid hsla(0, 0%, 20%, 1);
        P,
        a {
            color: #bebebe;
            margin-bottom: 10px;
            letter-spacing: 3px;
        }
    }
`;
