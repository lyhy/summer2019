import React, {useState} from 'react';


const App = () => {
  const [{count, count2}, setCount] = useState({count: 10, count2: 20})
  return (
    <>
      <button onClick={()=>setCount(state =>({ count: state.count + 1, count2: state.count2}))}>+</button>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>


    </>
  )
}

export default App;
