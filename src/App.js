import React from 'react';
import Header from './components/header';
import './app.scss';
import Headline from './components/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header='POST' desc='Click the button to render text'/>
      </section>
    </div>
  );
}

export default App;
