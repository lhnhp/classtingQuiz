import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuestionCard from '../components/QuestionCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<QuestionCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
