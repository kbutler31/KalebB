import React, { useState } from 'react';
import axios from 'axios';
import Update from './Update';
const AddFlight = () => {
  const [flight, setFlight] = useState({
    flightNumber: '',
    destination: '',
    departure: '',
    departureTime: ''
  });

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3500/flights', flight);
    setFlight({ flightNumber: '', destination: '', departure: '', departureTime: '' });
    // You might want to update the FlightList here or use state management
  };

  return (
    <div>
      <h2>Add New Flight</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="flightNumber"
          value={flight.flightNumber}
          onChange={handleChange}
          placeholder="Flight Number"
        />
        <input
          type="text"
          name="destination"
          value={flight.destination}
          onChange={handleChange}
          placeholder="Destination"
        />
        <input
          type="text"
          name="departure"
          value={flight.departure}
          onChange={handleChange}
          placeholder="Departure"
        />
        <input
          type="datetime-local"
          name="departureTime"
          value={flight.departureTime}
          onChange={handleChange}
        />
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
};

function updateFlight() {
  return (
    <div>
      <Update />
    </div>
  );
}
export default AddFlight;