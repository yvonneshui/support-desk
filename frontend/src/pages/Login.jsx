import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'

import {useSelector, useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

function Login() {
	const [formData, setFormData] = useState({
		email:'',
		password:'',
	})

	const { email, password} = formData

	const dispatch = useDispatch()

	const {user, isLoading, isSuccess} =useSelector(state => state.auth)

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

	const onSubmit = (e) => {
		//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
		// For example, this can be useful when:

		// Clicking on a "Submit" button, prevent it from submitting a form
		// Clicking on a link, prevent the link from following the URL
		e.preventDefault()

		const userData ={
			email,
			password
			}

			dispatch(login(userData))
	}
	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Log In
				</h1>
				<p>Please log in here</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>


					<div className="form-group">
						<input 
							type="email" 
							className="form-control" 
							name="email" 
							id="email" 
							value={email} 
							onChange={onChange} 
							placeholder="Your email" 
							required
						/>
					</div>

					<div className="form-group">
						<input 
							type="password" 
							className="form-control" 
							id="password" 
							name="password" 
							value={password} 
							onChange={onChange} 
							placeholder="Your password" 
							required
						/>
					</div>
					
				<div className="form-group">
					<button className="brn btn-block"> Submit</button>
				</div>
				</form>
			</section>
		</>
	)
}

export default Login