import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
	let name = 'Alphonse';
	let number = 2021;
	let obj = { name: 'David', channel: 'Funny' };
	let link = 'https://www.youtube.com/watch?v=Lh0gDi-sQXg&t=462s';

	return (
		<div className='App'>
			<Nav />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello world from ReactJS and {name}!</p>
				<p>{JSON.stringify(obj)}</p>
				<a href={link} target='_blank'>
					Vist my channel
				</a>
			</header>
		</div>
	);
};

export default App;
