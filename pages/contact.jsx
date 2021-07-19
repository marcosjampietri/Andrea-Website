import styled from "styled-components";
import Image from "next/image";

import Layout from "../components/layout";

import ContactSec from "../components/section/Contact";
import Card from "../components/micro/flipCard";
import GoogleMap from "../components/micro/google";
import Shop from "../components/section/Shop";

const Contact = () => {
    return (
        <Layout>
            <Page>
                <Shop />
                <GoogleMap />
                {/* <ContactSec /> */}
            </Page>
        </Layout>
    );
};

export default Contact;

const Page = styled.div``;
