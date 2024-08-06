import { screen } from '@testing-library/react';
import { renderWithDeps } from '../jest.utils';
import LiveVideo from './LiveVideo';

describe('<LiveVideo />', () => {
	it('renders', () => {
		renderWithDeps(<LiveVideo/>);

		const liveVideo = screen.getByTestId('LiveVideo');

		expect(liveVideo).toBeVisible();
	});
});
