import styled from "styled-components";
import Layout from "../components/layout";

import Hero from "../components/section/Hero";
import FlipCards from "../components/section/FlipCards";
import About from "../components/section/About";
import Gallery from "../components/section/Gallery";

const Home = () => {
    return (
        <Layout>
            <Page>
                <Hero />
                <FlipCards />
                <About />
                <Gallery />
            </Page>
        </Layout>
    );
};

export default Home;

const Page = styled.div``;
