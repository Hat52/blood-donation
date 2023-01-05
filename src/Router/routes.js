import { useRoutes } from 'react-router-dom';
import { Landing, Login, Signup, ContactUs } from '../pages';

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <Landing />
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/join',
			element: <Signup />
		},
		{
			path: '/contact',
			element: <ContactUs />
		}
	]);
}
