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
		// Fix error memory leak.
		// xu ly cancel Request Axios => stop Asnys khi chuyen tab khac hoac khong dung conponnet
		const ourRequest = axios.CancelToken.source(); // <-- 1st step
		async function fetchData() {
			try {
				// Call API - https://jsonplaceholder.typicode.com/ - (API FREE)
				let res = await axios.get(url, {
					cancelToken: ourRequest.token, // <-- 2nd step
				});
				let data = res && res.data ? res.data : []; // true/false

				// chi lay/show 20 data trong data API - > cut from 0 to 20
				data = data.slice(0, 20);

				// Cap nhap data vao bien dataCovid
				setData(data);
				setIsLoading(false); // turn off isLoading
				setIsError(false); // API chay thanh cong va khong co error
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log('Request canceled ', error.message);
				} else {
					setIsError(true); // co error
					setIsLoading(false); // turn off isLoading
					// alert(e.name + ' : ' + e.message);
				}
			}
		}

		//wait for 2s will call fun fetchData
		setTimeout(() => {
			fetchData();
		}, 2000);

		// simliar componentWillUnmount
		return () => {
			ourRequest.cancel('Operation canceled by the user.'); // <-- 3rd step
		};
	}, [url]); // neu APi co su thay doi thi effect sẽ activated

	return { data, isLoading, isError };
};

export default useFetch;
