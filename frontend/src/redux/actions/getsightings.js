export function getSightings() {
  return dispatch => {
    dispatch({
      type: 'SET_FETCHING',
      payload: true
    })
    fetch('http://localhost:3001/sightings')
    .then(blob => blob.json())
    .then(data =>{
    dispatch({
      type: 'SET_SIGHTINGS',
      payload: data
    })
    })
    .catch((error)=>alert("Error fetching the sightings!"))
    dispatch({
      type: 'SET_FETCHING',
      payload: false
    })
  }
}
