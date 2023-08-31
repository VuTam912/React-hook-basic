import useFetch from './../customize/fetch';
import './Blog.scss';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from './AddNewBlog';
import axios from 'axios';

const Blog = () => {
	// jsonplaceholder.typicode.com <-- API free

	const [newData, setNewData] = useState([]); // cap nhap thay doi cua data khi add new data.
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const {
		data: dataBlogs,
		isLoading,
		isError,
	} = useFetch('https://jsonplaceholder.typicode.com/posts');

	useEffect(() => {
		if (dataBlogs && dataBlogs.length > 0) {
			let data = dataBlogs.slice(0, 9); // hien 9 data
			setNewData(data);
		}
	}, [dataBlogs]);

	// chuyen qua child conponent AddNewBlog
	const handleAddNew = (blog) => {
		let data = newData;
		data.unshift(blog); // show data o vi tri dau tien or day data len dau.

		setShow(false); // hide modal
		setNewData(data); // cap nhat lai data.
	};

	// thục chất là lọc data. chứ không xóa.
	const deletePost = (id) => {
		let data = newData;
		data = data.filter((item) => item.id !== id);
		setNewData(data);
	};

	return (
		<>
			<>
				<Button variant='primary' className='my-3' onClick={handleShow}>
					+ Add new blog
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add New Blog</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<AddNewBlog handleAddNew={handleAddNew} />
					</Modal.Body>
				</Modal>
			</>

			<div className='blogs-container'>
				{isLoading === false &&
					newData &&
					newData.length > 0 &&
					newData.map((item) => {
						return (
							<div className='single-blog' key={item.id}>
								<div className='title'>
									<span> {item.title}</span> &nbsp;
									<span
										style={{ cursor: 'pointer' }}
										onClick={() => deletePost(item.id)}
									>
										X
									</span>
								</div>
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
