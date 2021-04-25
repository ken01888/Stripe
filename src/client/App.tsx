import * as React from 'react';
import { useState, useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import Donate from './pages/donate'
import {Elements} from '@stripe/react-stripe-js'

const stripe = loadStripe('pk_test_51Ib5r2Jnvz5Of8yMBsrHIeZGq3sVlcoLJSkHh1t9vRAUHHUviPiGmpSDhjM4cefE2BGGoDmh3UxRxOp0NwXHW9zI00GoC2dSHY')

const App = (props: AppProps) => {



	return (
		<>
		<Elements stripe={stripe}>
		<Donate />

		</Elements>
		</>
	);
};

interface AppProps {}

export default App;
