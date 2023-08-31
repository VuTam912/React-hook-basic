// su dung hook voi react-router-dom
import { useParams } from 'react-router-dom';

const DetailBlog = () => {
	// lay tham so tren URL ..id=
	let { id } = useParams();

	return (
		<div>
			<h1>Hello detail blog with id = {id} </h1>
		</div>
	);
};

export default DetailBlog;
