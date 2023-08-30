import React, { useState, useEffect } from 'react';

// count components
class Countdown extends React.Component {
	state = {
		count: 60,
	};

	// Doi render xong thi Mount moi execute
	componentDidMount() {
		// sau 1s se log(ME)
		// setTimeout(() => {
		// 	console.log('ME');
		// }, 1000);

		// chay vo han trong 1s | var => cho phep truy cap tu ben ngoai va ben trong fun
		this.timer = setInterval(() => {
			this.setState({
				count: this.state.count - 1,
			});
		}, 1000);
	}

	// gia tri old/qua khu cua props va state when vua cap nhap setState xong truoc do
	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count && this.state.count === 0) {
			if (this.timer) {
				// stop - run timer
				clearInterval(this.timer);
				// this.props.onTimeup();
			}
		}
	}

	render() {
		return <div>{this.state.count} class</div>;
	}
}

// Timer hooks
const NewCountDown = (props) => {
	const [count, setCount] = useState(10);

	//Note:
	// 1. mỗi khi biến count thay đổi, thì hàm useEffect sẽ chạy (hoặc chạy nhiều lân nếu count thay đổi nhiều lần)
	// 2. setInterval delay (hoãn lại) trước khi hành động. ở đây, trôi qua 1s,là chạy hàm useEffect 1 lần
	// 3. nếu cứ chạy thì N cái timer = set.. được sinh ra. nên là trước khi sinh ra cái timer mới, cần clear cái cũ đi (clearInternal)

	useEffect(() => {
		// stop timer
		if (count === 0) {
			props.onTimeup();
			return;
		}

		let timer = setInterval(() => {
			console.log('run me');
			setCount(count - 1);
		}, 1000); // 1s delay

		return () => {
			clearInterval(timer); // clear đi để timer ko được sinh ra nuẵ. count sẽ được cap nhap tu giảm đi
		};
	}, [count]); // nếu giá trị count thay đổi thì effect sẽ kích hoat effect nhiều lần. [] để trống thì chỉ chạy effect 1 lần

	return <div>{count} hooks</div>;
};

// export 2 function/class => cho phep su dung 2 component trong 1 file js
export { Countdown, NewCountDown };

// Luôn viết hoa ở chữ cái đầu ở class hoặc function
