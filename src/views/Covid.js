import { useState, useEffect } from 'react';
import axios from 'axios';

const Covid = () => {
	// useState = setState...
	// setDataCovid = cap nhap thay doi cua dataCovid
	const [dataCovid, setDataCovid] = useState([]);

	// su ly thay doi loading
	const [loading, setLoading] = useState(true);

	// componentDidMount
	useEffect(async () => {
		setTimeout(async () => {
			// Call API - https://jsonplaceholder.typicode.com/ - (API FREE)
			let res = await axios.get(
				'https://jsonplaceholder.typicode.com/comments'
			);
			let data = res && res.data ? res.data : [];

			// chi lay 20 data trong data API - > cut from 0 to 20
			data = data.slice(0, 20);

			// Cap nhap data vao bien dataCovid
			setDataCovid(data);
			setLoading(false); // turn off loading
		}, 2000);
	}, []);

	return (
		<>
			<h3>typicode.com - comments:</h3>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{/* loading là false nghĩa loading đã turn off */}
					{loading === false &&
						dataCovid &&
						dataCovid.length > 0 &&
						dataCovid.map((item) => {
							return (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
								</tr>
							);
						})}
					{/* loading đã khởi tạo là true và đợi setTimeout xử lý lấy API trong 2s là show data*/}
					{loading === true && (
						<tr>
							<td colSpan={4} style={{ textAlign: 'center' }}>
								Loading...
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};
export default Covid;
