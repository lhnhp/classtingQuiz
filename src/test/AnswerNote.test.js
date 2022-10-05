import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnswerNote from '../components/AnswerNote';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Charts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



describe('AnswerNote test', () => {
    it('should render Main', () => {
        render(<AnswerNote />);

        const target = screen.getByRole('button',{ name: '메인화면으로 돌아가기'});
        userEvent.click(target);
        expect(document.location.href = '/');
        
    });
})  
