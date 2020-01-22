import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card'

let allCards = [
    {
        id: 1,
        title: "First Card",
        content: "Lorem ipsum"
    },

    {
        id: 2,
        title: "Second Card",
        content: "Lorem ipsum"
    },

    {
        id: 3,
        title: "Third Card",
        content: "Lorem ipsum"
    },
];
//
describe('List component', () =>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List 
          header='Second Row'
          cards={allCards}
          />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', ()  =>{
        const tree = renderer
            .create(
                <section className='List'>
                <header className='List-header'>
                  <h2>Second List</h2>
                </header>
                <div className='List-cards'>
                <Card title="Fourth Card" content="Lorem ipsum"/>
                  <button
                    type='button'
                    className='List-add-button'
                  >
                    + Add Random Card
                  </button>
                </div>
              </section>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

//