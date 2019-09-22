import React from 'react'

// return no results with an easter egg to make it entertaining (of course :))
const NoResults = () => {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results, perhaps it is hiding like this storm trooper. 
      <br/>
      Please try again...</p>
      <hr/>
      <img src="//live.staticflickr.com/3632/3410525442_cdcbdd4e86_h.jpg" alt="missing results" />
    </li>
  );
};

export default NoResults;