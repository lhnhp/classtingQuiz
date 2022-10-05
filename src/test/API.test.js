import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import API from '../API';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<API />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe('takeQuizQuestions', () => {

    it('should load result', async () => {
    render(<API />);

    expect(screen.getByText('Data')).toBeInTheDocument();


  });
});