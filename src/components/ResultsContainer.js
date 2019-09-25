import React from 'react'
// import Container from 'react-bootstrap/Container'




// Components 
import Image from './Image';
import NoResults from './NoResults';


const ResultsContainer = props => {

  // pass the current state info to the image component
  const results = props.data;
  let photos;
  if (results.length) {
    // map the props to the image component
    photos = results.map(results => 
      <Image 
        url={results.url_q}
        key={results.id}
        desc={results.description}
        owner={results.ownername}
        title={results.title}
        views={results.views}
        date={results.datetaken}
      />
    );
  // else return no results
  }
   else {
    photos = <NoResults />
  }

  // render the returned component whether that is the Image component || NoResults component
  return (
    <div>
      <h2>{props.searchValue}</h2>
        <div className="photo-container">
          <ul>
            { photos }
          </ul>
        </div>
    </div>
  );
}

export default ResultsContainer;