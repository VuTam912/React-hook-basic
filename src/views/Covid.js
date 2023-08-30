import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../customize/fetch';

const Covid = () => {
	// 'https://jsonplaceholder.typicode.com/comments' - API

	const {
		data: dataCovid,
		isLoading,
		isError,
	} = useFetch('https://jsonplaceholder.typicode.com/comments');

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
