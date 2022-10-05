import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Main  from '../components/Main';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

describe('Main test', () => {
    it('should render Main', () => {
        render(<Main />);

        const target = screen.getByRole('button',{ name: '정답률차트'});
        userEvent.click(target);
        expect(document.location.href = '/charts');

        
        const target1 = screen.getByRole('button',{ name: '오답노트'});
        userEvent.click(target);
        expect(document.location.href = '/AnswerNote');
       
    });
})