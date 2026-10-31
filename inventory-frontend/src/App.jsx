import {useState} from 'react';

function App () {
  const [nama, setNama] = useState('')

  return (
    <div>
        <h1>Inventory Management</h1>

        <input
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          placeholder="Enter your name"
        />
      <p>Halo, {nama}</p>
    </div>
  );
}

export default App;