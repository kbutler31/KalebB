

const URL_ENDPOINT = "http://localhost:3500/Flights"

// Function to delete data from db.json

  const deleteDataFromDbJson = async (id) => {
    try {
        let response = await fetch(URL_ENDPOINT + "/" + id, {
            method: 'DELETE'
        });
        let data = await response.json();
        console.log(data);
         // UPDATE STATE data here!
    } catch (error) {
        console.error('Error:', error);
    }
}



export default deleteDataFromDbJson