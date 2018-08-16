import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Display from './components/Display';

const FourOhFour = () => <h1>Oh no 404</h1>;

export const App = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Display} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>
);
