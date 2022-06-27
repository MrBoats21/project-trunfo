import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Tryunfo</h1>
        <div className="main">
          <Form />
          <Card
            cardName="nome teste"
            cardImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CbtBTW3SrW5H5WK1nLdy5tCAfgrCKoSAWw&usqp=CAU"
            cardDescription="descrição teste"
            cardAttr1="1"
            cardAttr2="2"
            cardAttr3="4"
            cardRare="raro"
            cardTrunfo={ false }
          />
        </div>
      </>
    );
  }
}

export default App;
