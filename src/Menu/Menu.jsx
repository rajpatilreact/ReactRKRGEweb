import "./Menu.css";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {Home} from '../Home';
import {About} from '../About';
import {Contact} from '../Contact';
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom';
function template() {
  return (
    <div >
      <Navbar  data-bs-theme="dark">
        <Container>
          
          <Nav>
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <HashRouter>
        <Routes>
              <Route path="*" element={<Navigate to ="/home"/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
          
        </Routes>
      </HashRouter>
    </div>
  );
};

export default template;
