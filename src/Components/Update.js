import { useState } from 'react';

const URL_ENDPOINT = "http://localhost:3500/Flights";

function postFlight(e) {
  e.preventDefault();
  // Implement the logic to post a new flight
}

function Update() {
  const [flights, setFlights] = useState([]);
  const [updatedFlight, setUpdatedFlight] = useState([]);
  const [updatedFlightNumber, setUpdatedFlightNumber] = useState('');
  const [updatedDestination, setUpdatedDestination] = useState('');
  const [updatedDeparture, setUpdatedDeparture] = useState('');
  const [updatedDepartureTime, setUpdatedDepartureTime] = useState('');

  const [flightNumber, setFlightNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const updateFlight = (e, id) => {
    e.preventDefault();
    // Implement the logic to update a flight
    fetchPut(id, {
      flightNumber: updatedFlightNumber,
      destination: updatedDestination,
      departure: updatedDeparture,
      departureTime: updatedDepartureTime
    });
  };

  return (
    <>
      <div className="App">
        <form>
          <h3>Post new flight form</h3>
          <label>Flight Number</label>
          <input onChange={(e) => setFlightNumber(e.target.value)} value={flightNumber}></input>
          <label>Destination</label>
          <input onChange={(e) => setDestination(e.target.value)} value={destination}></input>
          <label>Departure</label>
          <input onChange={(e) => setDeparture(e.target.value)} value={departure}></input>
          <label>Departure Time</label>
          <input onChange={(e) => setDepartureTime(e.target.value)} value={departureTime}></input>
          <button onClick={(e) => postFlight(e)}>Submit</button>
        </form>
      </div>

      {flights.map((flight, index) => (
        <div key={index}>
          <div className="user">
            <div>Flight Number: {flight.flightNumber}</div><br />
            <div>Destination: {flight.destination}</div><br />
            <div>Departure: {flight.departure}</div><br />
            <div>Departure Time: {flight.departureTime}</div><br />
          </div>
          <form>
            <h3>Update flight form</h3>
            <label>Flight Number</label>
            <input onChange={(e) => setUpdatedFlightNumber(e.target.value)} value={updatedFlightNumber}></input>
            <label>Departure</label>
            <input onChange={(e) => setUpdatedDeparture(e.target.value)} value={updatedDeparture}></input>
            <label>Destination</label>
            <input onChange={(e) => setUpdatedDestination(e.target.value)} value={updatedDestination}></input>
            <label>Departure Time</label>
            <input onChange={(e) => setUpdatedDepartureTime(e.target.value)} value={updatedDepartureTime}></input>
            <button onClick={(e) => updateFlight(e, flight.id)}>Submit</button>
          </form>
        </div>
      ))}
    </>
  );
}

const fetchPut = async (id, updatedFlight) => {
  try {
    let response = await fetch(`${URL_ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFlight)
    });
    let data = await response.json();
    console.log(data); // Do something with the data here!
  } catch (error) {
    console.error('Error:', error);
  }
};

export default Update;