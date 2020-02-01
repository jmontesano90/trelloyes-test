import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';

class App extends Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      store: STORE,
    };
  }

  handleDeleteFunction =(cardId, listId) =>{
      console.log("delete works");
      console.log(cardId + " " + listId);

  }

  render() {
    const { store } = this.state;
    console.log(store);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              id={this.state.store.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              listId={list.id}
              onDelete={this.handleDeleteFunction}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;