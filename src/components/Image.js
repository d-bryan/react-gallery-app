import React from 'react'

// import Section from './Section';

const Image = props => {
  return (
    // renders the image with props

      <li>
        <img src={props.url} alt="" />
      </li>
  );
}

export default Image;