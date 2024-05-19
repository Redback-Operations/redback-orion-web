import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root/Root.tsx';

const router = createBrowserRouter([
	{
		element: <Root/>,
		// Handling errors inside Root so we can keep the core layout around the error message
		errorElement: <Root/>,
		children: [
			{
				path: '/',
				element: <div>Home</div>,
			},
			{
				path: 'about',
				element: <div>About</div>,
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
