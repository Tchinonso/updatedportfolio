import React from 'react'
import SectionTitle from './SectionTitle'
import PText from './PText';
import Button from './Button';
import me3 from './assets/me images/me3.jpg'
import styled from 'styled-components';


const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    text-align: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width:100%;
    }
	.aboutSection__right{
		margin-top:3rem;
	}
	.section-title{
		text-align:center;
	}
	.para{
		margin:0 auto;
		margin-top:2rem;
	}
	.aboutSection__buttons{
		flex-direction:column;
		gap:0;
		.button-wrapper,
		a{
			width:100%;
			text-align:center;
		}
	}
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About me"
          />

          <PText>
            I am a Full-stack Web and Javascript Developer, from Lagos Nigeria.
            I create professional websites. I love Tech and always try to show
            unique views to the audience through coding.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read more" outline={true} />
          </div>
			  </div>
			  <div className='aboutSection__right'>
				  <img src={me3} alt='' />
			  </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection
