import { useState, useEffect } from 'react';
import axios from 'axios';

const Covid = () => {
	// useState = setState...
	// setDataCovid = cap nhap thay doi cua dataCovid
	const [dataCovid, setDataCovid] = useState([]);

	// su ly thay doi loading
	const [isLoading, setIsLoading] = useState(true);
	// catch Error
	const [isError, setIsError] = useState(false); // fasle = not error , true = error

	// componentDidMount
	useEffect(async () => {
		setTimeout(async () => {
			try {
				// Call API - https://jsonplaceholder.typicode.com/ - (API FREE)
				let res = await axios.get(
					'https://jsonplaceholder.typicode.com/comments'
				);
				let data = res && res.data ? res.data : [];

				// chi lay 20 data trong data API - > cut from 0 to 20
				data = data.slice(0, 20);

				// Cap nhap data vao bien dataCovid
				setDataCovid(data);
				setIsLoading(false); // turn off isLoading
				setIsError(false); // API chay thanh cong va khong co error
			} catch (e) {
				setIsError(true); // co error
				setIsLoading(false); // turn off isLoading
				// alert(e.name + ' : ' + e.message);
			}
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
					{/* isLoading là false nghĩa isLoading đã turn off */}
					{isLoading === false &&
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
					{/* isLoading đã khởi tạo là true và đợi setTimeout xử lý lấy API trong 2s là show data*/}
					{isLoading === true && (
						<tr>
							<td colSpan={4} style={{ textAlign: 'center' }}>
								Loading...
							</td>
						</tr>
					)}
					{/* Catch duoc error => showw  */}
					{isError === true && (
						<tr>
							<td colSpan={4} style={{ textAlign: 'center' }}>
								Something wrong ....
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};
export default Covid;
