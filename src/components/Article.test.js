import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'express/lib/response';

test('renders component without errors', ()=> {
    render(<Article/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article isFetchingData={true}/>);

    const headline = screen.queryByText(/fetching data/i);
    const author = screen.queryByText(/fetching data/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
 });

test('renders "Associated Press" when no author is given', ()=> {

 });

test('executes handleDelete when the delete button is pressed', ()=> {
    const mockHandleDelete = jest.fn();

    render(<Article isFetchingData={false} handleDelete={mockHandleDelete}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(mockHandleDelete).toBeCalled();
 });

//Task List:
//1. Complete all above tests. Create test article data when needed.