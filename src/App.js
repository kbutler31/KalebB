

import React from 'react';
import { Routes, Route, Link} from 'react-router-dom'


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Home from './Components/Home.js';
import About from './Components/About.js';
import FlightList from './Components/FlightList';
import AddFlights from './Components/AddFlights';
import Delete from './Components/Delete.js';
import Update from './Components/Update.js';

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Flight CRUD App</h1>

      </div>



    <Container>


      <div>
          <ButtonGroup>
            <Button variant='outline-secondary'>
              <Link to="/">Home</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to="/about">About</Link>
            </Button>
            <Button variant='outline-secondary'>
        <Link to="/flights">Flights</Link>
            </Button>
          </ButtonGroup>



          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/flights" element={<FlightList />} />
            <Route path="/addFlights" element={<AddFlights />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        </Container>
      </>
  );
}

export default App;
