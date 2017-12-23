export function getInitialState() {
  return dispatch => {
    dispatch({
      type: 'SET_FETCHING',
      payload: true
    })
    fetch('http://localhost:3001/species')
    .then(blob => blob.json())
    .then(data =>{
    dispatch({
      type: 'SET_SPECIES',
      payload: data
    })
  })
  .catch((error)=> alert("Error fetching species!"))

    fetch('http://localhost:3001/sightings')
    .then(blob => blob.json())
    .then(data =>{
    dispatch({
      type: 'SET_SIGHTINGS',
      payload: data
    })
    dispatch({
      type:'SET_INITIAL_FETCHING',
    })
    dispatch({
      type: 'SET_FETCHING',
      payload: false
    })
  })
  .catch((error)=> {
    alert("Error fetching sightings!")
    dispatch({
      type: 'SET_FETCHING',
      payload: false
    })
  })

  }
}
