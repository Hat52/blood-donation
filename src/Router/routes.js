import { useRoutes } from 'react-router-dom';
import { Landing, Login } from '../pages';

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <Landing />
		},
		{
			path: '/login',
			element: <Login />
		}
	]);
}
