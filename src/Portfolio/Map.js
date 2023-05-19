import React from 'react'
import styled from 'styled-components'
import PText from './PText'
import MapImg from './assets/images/map.png'

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    max-width:none;
	right:auto;
  }
`;

const Map = () => {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is Me</h3>
          <PText>IKEJA Lagos,Nigeria.</PText>
          <a
            href="https://www.google.com/maps/place/Ikeja,+Lagos/@6.5295306,3.2934884,12z/data=!3m1!4b1!4m5!3m4!1s0x103b9228fa2a3999:0xd7a8324bddbba1f0!8m2!3d6.601838!4d3.3514863"
            target="_blank"
            rel="noreferrer"
            className="map__card__link">
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}

export default Map
