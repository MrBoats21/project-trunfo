import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  sendToCollection = () => {
    const { cards, ...collectionItem } = this.state;
    console.log(collectionItem);
    this.setState((savedItem) => {
      console.log(savedItem);
      return {
        cards: [...cards, savedItem],
      };
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.sendToColection();
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      isSaveButtonDisabled: false,
    }));
  }

  btnChecker() {
    const maxAttr = 90;
    const maxStats = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    if (cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== ''
      && (Number(cardAttr1) <= maxAttr && Number(cardAttr1) >= 0)
      && (Number(cardAttr2) <= maxAttr && Number(cardAttr2) >= 0)
      && (Number(cardAttr3) <= maxAttr && Number(cardAttr3) >= 0)
      && ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxStats)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    const onInputChange = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, this.btnChecker);
    };

    return (
      <>
        <h1>Tryunfo</h1>
        <div className="main">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>

        <div className="colection">
          {
            cards.map((card) => (
              <div key={ card.cardName } className="card">
                <p key={ card.cardName }>
                  { card.cardName }
                </p>
                <img src={ card.cardImage } alt="imagem" />
                <p key={ card.cardDescription }>{ card.cardDescription }</p>
                <section className="habs">
                  <p>{ `str____________________${card.cardAttr1}` }</p>
                  <p>{ `agl____________________${card.cardAttr2}` }</p>
                  <p>{ `int____________________${card.cardAttr3}` }</p>
                </section>
                <p>{card.cardRare}</p>
                { card.cardTrunfo && <h4>Super Trunfo</h4> }
              </div>
            ))
          }
        </div>

      </>
    );
  }
}

export default App;
