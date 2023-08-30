import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
	// useState('Alphonse Eric'); gia tri bien init (khoi tao)
	// setName = setState => xu ly su thay doi cua name
	// Chu y: duoc phep dat ten bat ky.
	let [name, setName] = useState('Alphonse Eric'); // a[a1,a2,...]
	const [address, setAdress] = useState('');

	// list data with useState
	const [todos, setTodos] = useState([
		{ id: 'todo1', title: 'Watchmen' },
		{ id: 'todo2', title: 'The Matrix' },
		{ id: 'todo3', title: 'BatMan' },
	]);

	const handleEventClick = (event) => {
		// console.log(address);
		// setName(address);
		if (!address) {
			alert('Please enter');
			return;
		}
		let newtodo = { id: 'todo4', title: address };
		// copy ...todos va add newtodo
		setTodos([...todos, newtodo]);
		// set empty
		setAdress('');
	};

	const handleOnChangeInput = (event) => {
		setAdress(event.target.value);
		// console.log(event.target.value);
	};

	return (
		<div className='App'>
			<Nav />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello world from ReactJS and {name}!</p>
				{/* readOnly => fix error log for input */}
				<div className='todos-container'>
					{todos.map((todo) => {
						return (
							<li className='todo-child' key={todo.id}>
								{todo.title}
							</li>
						);
					})}
				</div>
				<input
					type='text'
					value={address}
					onChange={(event) => handleOnChangeInput(event)}
				/>
				<button type='button' onClick={(event) => handleEventClick(event)}>
					Click me
				</button>
			</header>
		</div>
	);
};

export default App;
