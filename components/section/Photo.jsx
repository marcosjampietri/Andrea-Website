import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";

import { below } from "../../styles/breakpoint";
import { Reveal } from "../reveal";
import { picAction } from "../../store/actions/modActions";

const Photo = () => {
    const sections = [
        {
            klass: "",
            title: "PHOTOGRAPHY",
            text: "In 2014 I started working as a professional photographer for some of the most important brands in the fashion industry in Milan. Currently, I specialise in portraits, fashion, travel photography and more. The diversity of my work allows me to capture unique and eye-catching images that can satisfy my client's needs. If you want to check my portfolio, follow the link to my Instagram account.",
            path: "/photo.jpg",
        },
        {
            klass: "inverted",
            title: "VIDEOS",
            text: "Around the same time I started working as a professional photographer, I begun shooting and editing videos for several companies in the sport and hospitality industries. I also specialise in adventure travel videos, a job that has taken me to some of the most amazing locations in different parts of the world like Africa, Switzerland, Spain, etc. If you want to see my work as a videographer, follow the link to my YouTube channel.",
            path: "/video.jpg",
        },
        {
            klass: "",
            title: "CLASSES AND WORKSHOPS",
            text: "I graduated from the University of Sports of Torino in 2015, where I specialise in individual and group adventure sports, swimming, diving, alpinism and martial arts. The theme of my final dissertation was survival skills in hostile environments, which was written based on my expedition in the Tsavo desert in Kenya. To learn more about my workshops related to adventure sports and survival skills, visit my social media profiles.",
            path: "/class.jpg",
        },
        {
            klass: "inverted",
            title: "BRANDING",
            text: "I have worked with a large number of companies creating branding strategies for them. Among my duties there are administration, advertising, events planning and logistics, creation of social media content (photos and videos), etc. To check my CV, follow the link to my LinkedIn account.",
            path: "/shop.jpg",
        },
    ];

    const dispatch = useDispatch();
    //access rootReducer
    const { ModOn } = useSelector((state) => state.mod);

    //dispatch buttons
    const toggleMod = () => {
        dispatch(picAction());
    };

    useEffect(() => {
        if (ModOn) {
            dispatch(modAction());
        }
    }, [dispatch]);

    return (
        <PhotoSt>
            <Margin>
                {sections.map((item, index) => (
                    <div key={index}>
                        <Reveal>
                            <Item className={item.klass}>
                                <BoxT style={{ zIndex: "1" }}>
                                    <h1>{item.title}</h1>
                                    <h4>{item.text}</h4>
                                </BoxT>
                                <BoxI onClick={toggleMod}>
                                    <ServImg>
                                        <Image
                                            className="klass"
                                            src={item.path}
                                            width={800}
                                            height={412}
                                        />
                                    </ServImg>
                                </BoxI>
                            </Item>
                        </Reveal>
                    </div>
                ))}
            </Margin>
        </PhotoSt>
    );
};

export default Photo;

const PhotoSt = styled.div`
    padding: 0vh 0;

    background-color: hsla(220, 10%, 80%, 1);

    display: flex;
    justify-content: center;
`;
const Margin = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 50px 0px;

    .inverted {
        flex-direction: row-reverse;
    }
`;
const Title = styled.div`
    width: 300px;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    outline: 2px solid hsla(0, 0%, 0%, 0.1);
    outline-offset: -40px;

    padding: calc(25px + 2.5vw) 0px;
`;
const BoxT = styled.div`
    flex: 1 1 481px;
    margin: 30px 0;

    h1,
    h4 {
        margin: 0px auto;
        line-height: 1.5em;
        padding: 0px 20px 20px;

        backdrop-filter: blur(20px);
        background-color: hsla(220, 10%, 80%, 0.5);

        ${below.med`

           text-align: justify;


         `}
    }

    h1 {
        border-radius: 10px 10px 0 0;
        color: hsla(340, 95%, 45%, 1);
    }

    h4 {
        border-radius: 0px 0px 10px 10px;
        color: hsla(220, 0%, 35%, 1);
        text-shadow: -1px -1px 1px hsla(0, 0%, 100%, 0.65);
        letter-spacing: 0.08em;
    }
`;
const BoxI = styled.div`
    flex: 1 1 480px;
    position: relative;

    cursor: pointer;

    :before{
        content: "";
        display: block;
        position: absolute;
        bottom: calc(-50px + -10vh);
        right: 0px;
        width: 200px;
        height: 550px;
        background-color: hsla(340, 95%, 45%, 1);

        :
    }
`;

const ServImg = styled.div`
    width: 130%;
    height: 400px;
    transform: translateX(-11.5%);
    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);

    .klass {
        object-fit: cover;
        object-position: 50% 20%;
    }
`;
