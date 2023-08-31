import useFetch from './../customize/fetch';
import './Blog.scss';
import { Link } from 'react-router-dom';

const Blog = () => {
	// jsonplaceholder.typicode.com <-- API free

	const {
		data: dataCovid,
		isLoading,
		isError,
	} = useFetch('https://jsonplaceholder.typicode.com/posts');

	// lay khoang 20 data
	let newData = [];
	if (dataCovid && dataCovid.length > 0) {
		newData = dataCovid.slice(0, 10);
	}

	return (
		<>
			<div className='blogs-container'>
				{isLoading === false &&
					newData &&
					newData.length > 0 &&
					newData.map((item) => {
						return (
							<div className='single-blog' key={item.id}>
								<div className='title'>Title: {item.title}</div>
								<div className='content'>{item.body}</div>
								<button>
									<Link to={`/blog/${item.id}`}>View detail</Link>
								</button>
							</div>
						);
					})}
				{isLoading === true && <div>Loading...</div>}
			</div>
		</>
	);
};

export default Blog;
