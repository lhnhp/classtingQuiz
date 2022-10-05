import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Charts from '../components/Charts';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Charts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



describe('Charts test', () => {
    it('should render Main', () => {
        render(<Charts />);

        const target = screen.getByRole('button',{ name: '차트를 초기화하고 메인화면으로 돌아가기'});
        userEvent.click(target);
        expect(document.location.href = '/');
        
    });
})  
