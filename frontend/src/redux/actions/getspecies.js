export function getSpecies() {
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
  .catch((error)=>alert("Error fething the species.")
  dispatch({
    type: 'SET_FETCHING',
    payload: false
  })
  }
}
