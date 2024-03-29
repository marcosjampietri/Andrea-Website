import Link from "next/link";
import styled from "styled-components";

import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiVideo,
  FiVoicemail,
} from "react-icons/fi";

import { below } from "../../styles/breakpoint";
import { Reveal } from "../reveal";

const Shop = () => {
  return (
    <ShopSt>
      <Margin>
        <div>
          <Reveal>
            <Outline>
              <BoxT style={{ zIndex: "1" }}>
                <Text>
                  <h4>
                    ANDREA
                    <br /> MANGIACAVALLO
                  </h4>
                </Text>
                <List>
                  <Line>
                    <div>
                      <FiMapPin />
                    </div>
                    <h5>Camden Town, London, UK</h5>
                  </Line>
                  <Line>
                    <div>
                      <FiMail />
                    </div>
                    <h5>andrea.mangiacavallo@gmail.com</h5>
                  </Line>
                  <Line>
                    <div>
                      <FiPhone />
                    </div>
                    <h5>+44 7818 872124</h5>
                  </Line>
                </List>
                <Social>
                  <a
                    href="https://www.facebook.com/andre.siffredi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiFacebook />
                    <h5>facebook</h5>
                  </a>
                  <a
                    href="https://www.instagram.com/andrea_mangiacavallo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram />
                    <h5>instagram</h5>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrea-mangiacavallo-ab8009142/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                    <h5>linkdin</h5>
                  </a>
                </Social>
              </BoxT>
              <BoxI>
                <ServImg src="/shop.jpg" />
              </BoxI>
            </Outline>
          </Reveal>
        </div>
      </Margin>
    </ShopSt>
  );
};

export default Shop;

const ShopSt = styled.div`
  padding: 10vh 0;

  background-color: hsla(220, 10%, 95%, 1);

  display: flex;
  justify-content: center;
`;
const Margin = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0px 0px;

  .inverted {
    flex-direction: row-reverse;
  }
`;

const Outline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  outline: 2px solid hsla(0, 0%, 0%, 0.1);
  outline-offset: -40px;

  padding: calc(25px + 2.5vw) 0px;
`;
const BoxT = styled.div`
  flex: 1 1 481px;
  margin: 0px 0;
  padding: 30px 10px;

  backdrop-filter: blur(20px);
  background-color: hsla(220, 10%, 80%, 0.5);
  border-radius: 10px;
`;

const Text = styled.div`
  h4 {
    padding: 0px 0px 25px 0px;
    font-size: 1.3em;
    font-family: Neon Heavy;
  }

  p {
    padding: 0px 0px 25px 50px;
    font-size: 0.5em;
    max-width: 450px;
  }
`;
const List = styled.div`
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  padding: 25px 0px 25px 0px;
`;
const Line = styled.div`
  width: 100%;
  height: 30px;
  padding: 25px 0px;

  svg {
    margin: 0 20px 0px 0px;
    width: 30px;
    height: 100%;
  }

  display: flex;
  align-items: center;
`;
const Social = styled.div`
  padding: 30px 10px;

  display: flex;
  justify-content: space-between;

  ${below.med`
         
   `};

  a {
    text-align: center;
    padding: 10px;
    h5 {
    }
  }
`;

const BoxI = styled.div`
  flex: 1 1 480px;
  position: relative;
  height: 500px;
`;

const ServImg = styled.img`
  width: 130%;
  height: 100%;
  transform: translateX(-11.5%);

  object-fit: cover;
  object-position: 50% 20%;

  box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;
