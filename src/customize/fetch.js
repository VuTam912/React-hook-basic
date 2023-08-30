import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	// useState = setState...
	// setDataCovid = cap nhap thay doi cua dataCovid
	const [data, setData] = useState([]);

	// su ly thay doi loading
	const [isLoading, setIsLoading] = useState(true);
	// catch Error
	const [isError, setIsError] = useState(false); // fasle = not error , true = error

	// componentDidMount
	useEffect(() => {
		try {
			async function fetchData() {
				// Call API - https://jsonplaceholder.typicode.com/ - (API FREE)
				let res = await axios.get(url);
				let data = res && res.data ? res.data : []; // true/false

				// chi lay/show 20 data trong data API - > cut from 0 to 20
				data = data.slice(0, 20);

				// Cap nhap data vao bien dataCovid
				setData(data);
				setIsLoading(false); // turn off isLoading
				setIsError(false); // API chay thanh cong va khong co error
			}
			// call fun fetchData
			fetchData();
		} catch (error) {
			setIsError(true); // co error
			setIsLoading(false); // turn off isLoading
			// alert(e.name + ' : ' + e.message);
		}
	}, []);

	return { data, isLoading, isError };
};

export default useFetch;
