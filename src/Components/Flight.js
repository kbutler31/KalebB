




function Flight({flightInfo}){
console.log("Flight component recieves: " , flightInfo)


  return (

<p>{flightInfo.flightNumber} - {flightInfo.origin.city} to {flightInfo.destination.city}</p>

  )
}
export default Flight;