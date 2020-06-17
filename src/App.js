import React from 'react';
import store from './store.js'
import Accordion from './state-drills/Accordion'

function App() {
  return (
    <main className='App'>
      <Accordion sections={store}/>
    </main>
  );
}

export default App;