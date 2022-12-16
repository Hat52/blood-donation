import { useRoutes } from 'react-router-dom';
import { Landing } from '../pages';

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <Landing />
		}
	]);
}
