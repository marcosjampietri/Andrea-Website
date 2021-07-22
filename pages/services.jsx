import styled from "styled-components";
import Layout from "../components/layout";

import FilterServ from "../components/section/Filter";
import Photo from "../components/section/Photo";
import TitleSec from "../components/micro/Title";
import Features from "../components/section/Features";
import CalltoAction from "../components/section/CTA";

const Services = () => {
    return (
        <Layout>
            <Page>
                <FilterServ />
                <TitleSec />
                <Photo />
                <CalltoAction />
            </Page>
        </Layout>
    );
};

export default Services;

const Page = styled.div`
    overflow: hidden;
`;
