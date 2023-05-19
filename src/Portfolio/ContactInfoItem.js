import React from 'react'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText'

const InfoStyles = styled.div`
padding:2rem;
background:var(--deep-dark);
display:flex;
align-items:center;
gap:2rem;
border-radius:8px;
margin-bottom:2rem;
.icon{
	color:var(--white);
	background:var(--gray-2);
	padding:1.3rem;
	align-items:center;
	justify-content:center;
	border-radius:50%;
}
svg{
	width:3.5rem;
}

`;


const ContactInfoItem = ({
	icon = <MdPlace />,
	text='this is the default text'
}) => {
  return (
	<InfoStyles>
		  <div className='icon'>{ icon }</div>
		  <div className='info'>
			  <PText>{text}</PText>
		  </div>
	</InfoStyles>
  )
}

export default ContactInfoItem
