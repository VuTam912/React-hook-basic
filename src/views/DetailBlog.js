// su dung hook voi react-router-dom
import { useParams, useHistory } from 'react-router-dom';

const DetailBlog = () => {
	// lay tham so tren URL ..id=
	let { id } = useParams();
	// back page
	let history = useHistory();

	const handleBackData = () => {
		// history.goBack();
		history.push('/blog');
	};

	return (
		<div>
			<div>
				<button onClick={handleBackData}>&lt;-- Back</button>
			</div>
			<h1>Hello detail blog with id = {id} </h1>
		</div>
	);
};

export default DetailBlog;
