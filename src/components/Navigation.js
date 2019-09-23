import React from 'react'
// import axios from 'axios';
// import apiKey from '../config';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

// import SearchForm from './SearchForm';

// // query parameters
// const sort = 'sort=relevance';
// const privacy = 'privacy_filter=1';
// const safe = 'safe_search=1';
// const content = 'content_type=1';
// const extras = 'extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o';
// const perPage = 'per_page=24';


  //   <Container className="justified-content-md-center">
  //   <Row>
  //     <Navbar collapseOnSelect expand bg="dark" variant="dark" sticky="top" width="device-width">

  //     <Col>
  //       <Navbar.Brand href="/beaches">{' Flickr Gallery App'}</Navbar.Brand>
  //     </Col>

  //       <Col>
  //         <Nav justify variant="tabs" className="mr-auto" >
  //           <Nav.Item>
  //             <Nav.Link href="/beaches">Beaches</Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link href="/parks">Parks</Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link href="/sunsets">Sunsets</Nav.Link>
  //           </Nav.Item>
  //         </Nav>
  //       </Col>

        
  //         <SearchForm onSearch={this.performSearch} />
        
  //     </Navbar>
  //   </Row>
  // </Container>

const Navigation = () => {

  // state = {
  //   loading: true,
  //   searchResults: [],
  //   searchValue: '',
  // }

  // componentDidMount() {
  //   this.performSearch();
  // }

  // performSearch = (query) => {
  //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&${sort}&${privacy}&${safe}&${content}&${extras}&${perPage}&format=json&nojsoncallback=1`)
  //     .then(response => {
  //       this.setState({
  //         searchResults: response.data.photos.photo,
  //         loading: false,
  //         searchValue: query
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     }); 
  // }

  // render() {
    return (

    <div className="navigation-div">
      <nav className="main-nav">
        <ul>
          <li>
            <Link to='/beaches'>Beaches</Link>
          </li>
          <li>
            <Link to='/parks'>Parks</Link>
          </li>
          <li>
            <Link to='/sunsets'>Sunsets</Link>
          </li>
        </ul>
      </nav>
    </div>

    );
}

export default Navigation;