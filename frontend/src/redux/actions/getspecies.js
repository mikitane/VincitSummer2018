export function getSpecies() {
  return dispatch => {
    dispatch({
      type: 'SET_FETCHING',
      payload: true
    })
    fetch('/species')
    .then(blob => blob.json())
    .then(data =>{
    dispatch({
      type: 'SET_SPECIES',
      payload: data
    })
    dispatch({
      type: 'SET_FETCHING',
      payload: false
    })
  })
  }
}
