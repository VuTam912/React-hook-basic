import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
	// useState('Alphonse Eric'); gia tri bien init (khoi tao)
	// setName = setState => xu ly su thay doi cua name
	// Chu y: duoc phep dat ten bat ky.
	let [name, setName] = useState('Alphonse Eric'); // a[a1,a2,...]
	const [address, setAdress] = useState('');

	// list data with useState
	const [todos, setTodos] = useState([
		{ id: 'todo1', title: 'Watchmen', type: 'eric' },
		{ id: 'todo2', title: 'The Matrix', type: 'al' },
		{ id: 'todo3', title: 'BatMan', type: 'al' },
		{ id: 'todo4', title: 'Reading books', type: 'eric' },
	]);

	const handleEventClick = (event) => {
		// console.log(address);
		// setName(address);
		if (!address) {
			alert('Please enter');
			return;
		}
		let id = Math.floor(Math.random() * 100 + 5);
		let newtodo = { id: `todo${id}`, title: address, type: 'eric' };
		// copy ...todos va add newtodo
		setTodos([...todos, newtodo]);
		// set empty
		setAdress('');
	};

	const handleOnChangeInput = (event) => {
		setAdress(event.target.value);
		// console.log(event.target.value);
	};

	// delete todo => child component will call and parent component will receive
	const deleteDataTodo = (id) => {
		let currentTodos = todos; // fix bien constant (ko thay doi = const)
		currentTodos = currentTodos.filter((item) => item.id !== id);

		setTodos(currentTodos);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<Nav />
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello world from ReactJS and {name}!</p>
				{/* readOnly => fix error log for input */}
				<Todo
					todos={todos}
					title={'All todos'}
					deleteDataTodo={deleteDataTodo}
				/>
				<Todo
					todos={todos.filter((item) => item.type === 'eric')}
					title={'All todos - Eric'}
					deleteDataTodo={deleteDataTodo}
				/>
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
