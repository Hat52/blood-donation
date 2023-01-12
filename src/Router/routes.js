import { useRoutes } from 'react-router-dom';
import { Landing, Login, About, Signup, ContactUs, GetHelp, Dashboard } from '../pages';

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
		},
		{
			path: '/help',
			element: <GetHelp />
		},
		{
			path: '/dashboard',
			element: <Dashboard />
		},
		{
			path: '/about',
			element: <About />
		}
	]);
}
