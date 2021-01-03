import React, { useState } from 'react';

function Profile() {
  const [state, setState] = useState({ name: '', age: 1 });
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>

      <input
        type="text"
        value={state.name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />

      <input
        type="number"
        value={state.age.toString()}
        onChange={e => setState({ ...state, age: Number(e.target.value) })}
        // setReducer 를 쓰는게 더 좋다고 한다.
      />
    </div>
  )
}

export default Profile;