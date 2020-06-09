import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDog } from '../redux/actions/dogs'

export default function Dogs() {
  const dispatch = useDispatch()

  const {
    dogs: { cachedDogs, error },
  } = useSelector(state => ({
    ...state,
  }))

  return (
    <>
      <h4>Get dog pics:</h4>
      <button onClick={() => dispatch(getDog())}>GET</button>
      {error && <div>{error}</div>}
      <br />
      {cachedDogs.map(dog => (
        <img className="dogpic" key={dog} src={dog} alt="Pic" />
      ))}
    </>
  )
}
