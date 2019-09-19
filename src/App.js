import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [{
  fname: 'Jame',
  LName: 'Bloggs',
  email: 'jamebloggs@getMaxListeners.com',
  age: 54,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header='POST' desc='Click the button to render text' tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
