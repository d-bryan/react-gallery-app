import React from 'react'
import Section from './Section';

const Image = props => {
  return (
    // renders the image with props
    <div>
        <li>
          <img src={props.url} alt="" />
        </li>
      {/* renders additional information from the API for description info about the photo */}
      <div>
          <Section 
            owner={props.owner}
            title={props.title}
            views={props.views}
            date={props.date}
          />
      </div>
    </div>
  );
}

export default Image;