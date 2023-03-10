import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="card">
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <section className="habs">
          <p data-testid="attr1-card">
            { `str____________________${cardAttr1}` }
          </p>
          <p data-testid="attr2-card">
            { `agl____________________${cardAttr2}` }
          </p>
          <p data-testid="attr3-card">
            { `int____________________${cardAttr3}` }
          </p>
        </section>
        <p data-testid="rare-card">{cardRare}</p>
        { cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.required;

export default Card;
