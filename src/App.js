import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

// Components
import Form from './components/Form';
import Nav from './components/Nav';
import ResultsContainer from './components/ResultsContainer';
// import Header from './components/Header';
// JSON
import beachesData from './data/beaches';
import parksData from './data/parks';
import sunsetsData from './data/sunsets';

// query parameters
const sort = 'sort=relevance';
const privacy = 'privacy_filter=1';
const safe = 'safe_search=1';
const content = 'content_type=1';
const extras = 'extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o';
const perPage = 'per_page=24';



class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      photos: [],
      searchValue: '',
      beachesResults: beachesData,
      parksResults: parksData,
      sunsetsResults: sunsetsData
    }
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch(query) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&${sort}&${privacy}&${safe}&${content}&${extras}&${perPage}&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(this.state);
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            searchValue: query
          });
        
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      }); 
  }

  render() {
    console.log(this.state);
    return(
      <div className="container">

          

          {/* Form component */}
          {/* <Form onSearch={this.performSearch} /> */}

          

          
          {/* Routes */}
          <Router>

          {/* Navigation component */}
          <Nav />

            <Switch>
              <Route path="/beaches" render={ () =>
                  <ResultsContainer 
                    data={this.state.beachesResults}
                    searchValue={this.state.searchValue}
                  />
                } 
              />
              <Route path="/parks" render={ () =>
                  <ResultsContainer 
                    data={this.state.parksResults}
                    searchValue={this.state.searchValue}
                  />
                }
              />
              <Route path="/sunsets" render={ () =>
                  <ResultsContainer 
                    data={this.state.sunsetsResults}
                    searchValue={this.state.searchValue}
                  /> 
                }
              />
            </Switch>
          </Router>

          {/* ResultsContainer component */}
          {/* <ResultsContainer 
            data={this.state.photos}
            searchValue={this.state.searchValue}
          /> */}
      </div>
    );
  }
}

export default App;
