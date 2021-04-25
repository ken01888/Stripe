import * as React from 'react'
import {useState,useEffect} from 'react'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'


const Donate = (props: DonateProps) => {
	const [payName,setName] = useState('');
	const [amount,setAmount] = useState('');


const stripe = useStripe();
const elements = useElements();

const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>)=>{
	e.preventDefault();
	if(!stripe||!elements) return;

	const cardElement = elements.getElement(CardElement);

	const {error, paymentMethod} = await stripe.createPaymentMethod({
		type:'card',
		card:cardElement,
	})

	if(error){
		console.log(error)
	} else {
		const res = await fetch('api/donate',{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({amount,paymentMethod})
		});
		const paymentDone = await res.json();
		console.log(paymentDone)
	}

}


	return (
		<main className="container d-flex">
			<section className="row mt-5 justify-content center"></section>
			<div className="col-md-6">
			<form className = 'form-group p-3 border rounded-lg'>
				<label>Name</label>
				<input type="text" className='form-control' value={payName} onChange={e=>{setName(e.target.value)}}/>
				<label>Amount</label>

				<input type="text" className='form-control' value={amount} onChange={e=>{setAmount(e.target.value)}}/>
				<CardElement className="form-control"/>
				<button onClick={handleSubmit} type="submit" className='btn btn-primary mt-3 '>Donate to me</button>
			</form>

			</div>
		</main>
	);
};

interface DonateProps {}

export default Donate;