import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="Nome" data-testid="name-input" />
        <textarea placeholder="Descrição" data-testid="description-input" />
        <input type="number" placeholder="Força" data-testid="attr1-input" />
        <input type="number" placeholder="Agilidade" data-testid="attr2-input" />
        <input type="number" placeholder="Inteligência" data-testid="attr3-input" />
        <input type="text" placeholder="imagem" data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        <input type="submit" placeholder="Salvar" data-testid="save-button" />
      </form>
    );
  }
}

export default Form;
