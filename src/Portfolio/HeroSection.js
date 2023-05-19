import React from 'react'
import socialmediaarrow from './assets/images/social-media-arrow.svg'
import mesnapchat from './assets/me images/mesnapchat.jpg'
import Button from './Button';
import PText from './PText'
import scrolldown from './assets/images/scroll-down-arrow.svg'
import styled from 'styled-components';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: center;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
	  color:var(--white)
    }
  }
  .hero__img{
	max-width:900px;
	width:100%;
	height:600px;
	margin:0 auto;
	border:2px solid var(--gray-1);
  }
  .hero__info{
	margin-top:-18rem;
  }
  .hero__social,
  .hero_scrollDown{
	display:flex;
	flex-direction:column;
	gap:2rem;
	position:absolute;
	bottom:20px;
	width:50px;
  }
  .hero__social{
	left:50px;
  }
  .hero_scrollDown{
	right:50px;
  }
  .hero__social__indicator,
  .hero_scrollDown{
	width:50px;
	p{
		font-size:1.6rem;
		transform:translateY(-70px) rotate(90deg);
		letter-spacing:0.7rem;
		text-transform:uppercase;
	}
	img{
		max-height:45px;
		width:16px;
		margin:0 auto;
		object-fit:contain;
	}
  }
  .hero_scrollDown{
	img{
		max-height:70px;
	}
  }
  .hero_social_text{
	ul{
		li{
			margin-bottom:1rem;
		}
		a{
			display:inline-block;
			font-size:1.6rem;
			transform:rotate(-90deg);
			letter-spacing:5px;
			margin-bottom:2rem;
		}
	}
  }
  @media only screen and  (max-width:768px){
	.hero{
		min-height:750px;
	}
	.hero__heading{
		font-size:1.4rem;
		margin-bottom:-3rem;
		.hero__name{
			font-size:4.5rem;
		}
	}
	.hero__img{
		height:300px;
	}
	.hero__info{
		margin-top:3rem;
	}
	.hero__social{
		left:0px;
		bottom:-15%;
		width:20px;
		.hero__social__indicator{
			width:20px;
			p{
				font-size:1.2rem;
			}
			img{
				max-height:22px;
			}
		}
		.hero_social_text{
			ul{
				li{
					a{
						font-size:1.2rem;
						margin-bottom:1rem;
					}
				}
			}
		}
	}
	.hero_scrollDown{
		right:0;
		width:20px;
		gap:1rem;
		p{
			font-size:1.3rem;
		}
	}
  }
`;

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, this is </span>
            <span className="hero__name">Tchinonso Destiny</span>
          </h1>
          <div className="hero__img">
            <img src={mesnapchat} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am a Full-stack Web and Javascript Developer, I have few years
              of experience and i love to code
            </PText>
            <Button btnLink="/projects" btnText="See my Work" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>follow</p>
              <img src={socialmediaarrow} alt="" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com/bighostblog"
                    target="_blank"
                    rel="noreferrer">
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/TCHlNONSO"
                    target="_blank"
                    rel="noreferrer">
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://github.com/Tchinonso"
                    target="_blank"
                    rel="noreferrer">
                    Git
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/tchinonso"
                    target="_blank"
                    rel="noreferrer">
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/tchinonso_"
                    target="_blank"
                    rel="noreferrer">
                    IG
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>scroll</p>
            <img src={scrolldown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection
