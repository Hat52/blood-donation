import { BrowserRouter as Router } from 'react-router-dom';
import Auth0Provider from '../auth/authProvider';
import Routes from './routes';

function AppRoutes() {
	return (
		<Router>
			<Auth0Provider>
				<Routes />
			</Auth0Provider>
		</Router>
	);
}

export default AppRoutes;
