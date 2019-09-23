import React from 'react'


// return no results with an easter egg to make it entertaining (of course :))
const NoResults = () => {
  return (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoResults;