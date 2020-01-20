import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () =>{
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', ()  =>{
        const tree = renderer
            .create(
            <div className='Card'>
            <button
              type='button'
            >
              delete
            </button>
            <h3>Fourth Card</h3>
            <p>Lorem ipsum</p>
          </div>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});