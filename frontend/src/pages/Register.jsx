import {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
//useSelector() ​ Allows you to extract data from the Redux store state, using a selector function.
//useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../features/auth/authSlice'

function Register() {
	const [formData, setFormData] = useState({
		name:'',
		email:'',
		password:'',
		password2:''
	})

	const {name, email, password, password2} = formData

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
		console.log('object');

		if (password !== password2) {
			toast.error ('passwords do not match')
		} else {
			const userData ={
				name,
				email,
				password
			}

			dispatch(register(userData))
		}
	}
	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register 
				</h1>
				<p>Please create an account  </p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input 
							type="text" 
							className="form-control" 
							id="name" 
							name="name" 
							value={name} 
							onChange={onChange} 
							placeholder="Your name" 
							required
						/>
					</div>

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
						<input 
							type="password" 
							className="form-control" 
							id="password2" 
							value={password2} 
							name="password2" 
							onChange={onChange} 
							placeholder="Confirm your password" 
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

export default Register