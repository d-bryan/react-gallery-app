import React from 'react'

// Components 
import Image from './Image';
import NoResults from './NoResults';

const ResultsContainer = props => {

  // pass the current state info to the image component
  const results = props.data;
  let photos;
  if (results.length > 0) {
    // map the props to the image component
    photos = results.map(results => 
      <Image 
        url={results.url_m}
        key={results.id}
        desc={results.description}
        owner={results.ownername}
        title={results.title}
        views={results.views}
        date={results.datetaken}
      />
    );
  // else return no results
  } else {
    photos = <NoResults />
  }

  // render the returned component whether that is the Image component || NoResults component
  return (
    <div className="photo-container">
      <h2>{props.searchValue}</h2>
        <div>
          <ul>
            { photos }
          </ul>
        </div>
    </div>
  );
}

export default ResultsContainer;