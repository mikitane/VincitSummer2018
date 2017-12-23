export function addSighting(payload) {
  return dispatch => {
    dispatch({
      type: 'SET_FETCHING',
      payload: true
    })
    fetch('http://localhost:3001/sightings',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    })
    .then(blob => blob.json())
    .then(data =>{
    dispatch({
      type: 'ADD_SIGHTING',
      payload: data
    })
    })
    .catch((error)=> alert("Error adding the sighting."))
    dispatch({
      type: 'SET_FETCHING',
      payload: false
    })
  }
}
