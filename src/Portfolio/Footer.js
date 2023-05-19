import React from 'react'
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText'

const FooterStyles = styled.div`
padding:10rem;
background:var(--deep-dark);
.container{
	display:flex;
	gap:3rem;
}
.footer__col1{
	flex:2;
}
.footer__col2,
.footer__col3,
.footer__col4{
	flex:1;
}
.footer__col1__title{
	font-size:3.5rem;
	margin-bottom:1rem;
}
.copyright{
	background:var(--dark-bg);
	text-align:left;
	padding:1rem 0;
	margin-top:5rem;
	.para{
		margin-left:0;
	}
}
@media only screen and (max-width:768px){
	.container{
		flex-direction:column;
		gap:0rem;
		& > div{
			margin-top:5rem;
		}
	}
	.footer__col1 .para{
		max-width:100%;
	}
	.copyright{
		.container{
			div{
				margin-top:0;
			}
		}
	}
}
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Tchinonso Destiny</h1>
          <PText>
            A Freelance web designer and developer from Lagos Nigeria. I always
            make websites that has unique designs and also has a good
            performance.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                type: "Links",
                title: "Home",
                path: "/home",
              },
              {
                type: "Links",
                title: "About",
                path: "/about",
              },
              {
                type: "Links",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Links",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+2348160272732",
                path: "tel:+2348160272732",
              },
              {
                title: "lightersmercury@gmail.com",
                path: "mailto:lightersmercury@gmail.com",
              },
              {
                title: "IKEJA, Lagos, Nigeria",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com/bighostblog",
              },
              {
                title: "Instagram",
                path: "http://instagram.com/tchinonso_",
              },
              {
                title: "Twitter",
                path: "http://twitter.com/TCHlNONSO",
              },
              {
                title: "Github",
                path: "http://github.com/Tchinonso",
              },
              {
                title: "Linkedin",
                path: "http://linkedin.com/in/tchinonso",
              },
            ]}
          />
        </div>
		  </div>
		  <div className='copyright'>
			  <div className='container'>
				  <PText>
					  &copy; 2023-Tchinonso Destiny | Designed with React
				  </PText>
			  </div>
		  </div>
    </FooterStyles>
  );
}

export default Footer
