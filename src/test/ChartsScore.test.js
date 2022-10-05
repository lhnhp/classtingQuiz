import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChartsScore  from '../components/ChartScore';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChartsScore />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
