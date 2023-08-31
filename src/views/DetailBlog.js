// su dung hook voi react-router-dom
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../customize/fetch';
import './Blog.scss';

const DetailBlog = () => {
	// lay tham so tren URL ..id=
	let { id } = useParams();
	// back page
	let history = useHistory();

	//Fetch 1 data
	const {
		data: dataBlogData,
		isLoading,
		isError,
	} = useFetch(`
    https://jsonplaceholder.typicode.com/posts/${id}`);

	const handleBackData = () => {
		// history.goBack();
		history.push('/blog');
	};

	return (
		<div>
			<div>
				<button onClick={handleBackData}>&lt;-- Back</button>
			</div>
			<div className='blogs-container'>
				<div className='single-blog'>
					{isLoading === false && dataBlogData && (
						<>
							<div className='title'>Blog ID: {dataBlogData.title}</div>
							<div className='content'>{dataBlogData.body}</div>
						</>
					)}
					{isLoading === true && <div>Loading data...</div>}
				</div>
			</div>
		</div>
	);
};

export default DetailBlog;
