import { useRoutes } from 'react-router-dom';
import { Landing, Login, Signup } from '../pages';

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
		}
	]);
}
