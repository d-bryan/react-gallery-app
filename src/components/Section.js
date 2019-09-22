import React from 'react'

const Section = props => {
  return (
    <div>
      <section>
        <strong>Owner:</strong> 
        <span> {props.owner}</span>
      </section>
      <section>
        <strong>Title:</strong> 
        <span> {props.title}</span>
      </section>
      <section>
        <strong>Views:</strong> 
        <span> {props.views}</span>
      </section>
      <section>
        <strong>Date:</strong> 
        <span> {props.date}</span>
      </section>
    </div>
  );
}

export default Section;