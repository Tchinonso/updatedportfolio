import React from 'react'
import Button from '../Button'
import PText from '../PText'
import AboutImg from '../assets/me images/mee2.jpeg'
import styled from 'styled-components'
import AboutInfoItem from '../AboutInfoItem'
import ContactBanner from '../ContactBanner'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 5px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding:10rem 0;
    .top-section{
      flex-direction:column;
      gap:5rem;
    }
    .about__subheading{
      font-size:1.8rem;
    }
    .about__heading{
      font-size:2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

const About = () => {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Tchinonso Destiny</span>
            </p>
            <h2 className="about__heading">A Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from West Africa, living in Owerri. A place of beauty and nature. Since my
                young age, i love art and design. I always try to design stuff
                with my unique point of view. I also love to create to things
                that can be useful to others.
                <br />
                <br />
                I have been coding consistently for 3 years and above. Coding is also an art and a
                therapy for me. I love it and now i have the opportunity to do
                other things alongside with it like trying to design. I find it
                really interesting and i enjoy the process also.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for me to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Tchinonso img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={[
                "Saints Academy Nursery and Primary School Jos, Plateau State, Nigeria.",
              ]}
            />
            <AboutInfoItem
              title="College"
              items={[
                "Saints Academy Secondary School Jos, Plateau State, Nigeria.",
              ]}
            />
            <AboutInfoItem
              title="Versity"
              items={["University of Jos, Plateau State, Nigeria."]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[
                'JAVASCRIPT','REACT', 'NEXTJS', 'Typescript'              ]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={[
                "NodeJs", 'ExpressJs', 'RUST', 'PostgreSQL'
              ]}
            />
            <AboutInfoItem
              title="Design"
              items={['---']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem
              title="2020-2021"
              items={[
                "Fullstack developer at RDX Lagos.",
              ]}
            />
            <AboutInfoItem
              title="2021-2022"
              items={[
                "Worked at Highscore and BrainyBytes as a Frontend Developer. ",
              ]}
            />
            <AboutInfoItem
              title="2022"
              items={ ["Currently working at City-Web as Project frontend developer and also as project supervisor"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About
