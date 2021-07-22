import styled from "styled-components";
import Image from "next/image";
import { useSpring, animated, config } from "react-spring";
import { Reveal } from "../reveal";

import {
  FiActivity,
  FiAlertCircle,
  FiCamera,
  FiCode,
  FiEye,
  FiPower,
  FiVideo,
  FiVoicemail,
} from "react-icons/fi";

const CardRow = () => {
  const cards = [
    {
      name: "FASHION AND MODELING",
      image: "/modeling.jpg",
      icon: <FiActivity />,
      path: "services/influencer",
      text: "If you're a model, influencer or an Artist, I have a broad set of skills and tools to make you're image stand out from your competitors from Photo Shooting for social media to Personal branding ",
    },
    {
      name: "BUSINESSES SOLUTIONS",
      image: "/business.jpg",
      icon: <FiAlertCircle />,
      path: "services/coorporative",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "EVENTS",
      image: "/events.jpg",
      icon: <FiCamera />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "PARTIES",
      image: "/parties.jpg",
      icon: <FiVoicemail />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "DIVING AND SWIMMING",
      image: "/diving.jpg",
      icon: <FiCode />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "TRAVELING",
      image: "/travel.jpg",
      icon: <FiVideo />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "SURVIVAL AND BUSHCRAFT",
      image: "/survival.jpg",
      icon: <FiPower />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
    {
      name: "NATURE",
      image: "/nature.jpg",
      icon: <FiEye />,
      path: "services/events",
      text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
    },
  ];

  return (
    <Reveal>
      <Block>
        {cards.map((card, index) => (
          <Card key={index}>
            <Front className="front">
              <Text>
                <Icon>
                  <div>
                    <div>{card.icon}</div>
                  </div>
                </Icon>
              </Text>
              <div>
                <h4>{card.name}</h4>
              </div>
              <Img>
                <Image
                  alt="Picture of the author"
                  width={500}
                  height={300}
                  src={card.image}
                  className="pics"
                />
              </Img>
            </Front>
            <Back className="back">
              <h4>{card.name}</h4>
              <div>
                <p>{card.text}</p>
              </div>
            </Back>
          </Card>
        ))}
      </Block>
    </Reveal>
  );
};

export default CardRow;

const Block = styled(animated.div)`
  padding: 0px 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  perspective: 1500px;
  max-width: 450px;

  height: 300px;
  margin: 1vw 20px;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 220px;

  :hover {
    .front {
      transform: rotateY(-180deg);
    }
    .back {
      backface-visibility: hidden;
      transform: rotateY(0deg);
    }
  }

  position: relative;
`;

const Text = styled.div``;
const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  border-radius: 5px;
  border: 1px solid hsla(0, 0%, 20%, 1);
  transition: all 0.5s ease-in-out;
`;

const Front = styled(Face)`
  background: hsla(350, 95%, 0%, 1);
  transform: rotateY(0deg);
  div h4 {
    padding: 20px 0px;
    text-align: center;

    color: hsla(350, 80%, 100%, 1);
  }
`;
const Icon = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      height: 30px;
      stroke: hsla(345, 0%, 100%, 1);
    }
  }
`;

const Img = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50%;

  overflow: hidden;

  .pics {
    position: absolute;
    left: 0;
    object-fit: cover;

    object-position: center center;
    border-radius: 0px 0px 5px 5px;
  }
`;

const Back = styled(Face)`
  background: hsla(350, 80%, 50%, 1);
  transform: rotateY(180deg);
  padding: 20px;

  h4 {
    margin: 20px 0px;
    text-align: center;
    color: hsla(350, 0%, 0%, 1);
  }
  p {
    font-size: 16px;
    letter-spacing: 1px;
    text-align: justify;
    color: white;
  }
`;
