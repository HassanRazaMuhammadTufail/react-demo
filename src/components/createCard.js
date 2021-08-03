import React, {useState, useEffect} from 'react';

export const NewCardComponent = params => {
	const [child, setchild] = useState('');
	const [title, settitle] = useState('');
	const [childList, setchildList] = useState([]);
	const addChild = params => {
		setchildList([...childList, child]);
	};
	const {func} = params;
	console.log(func);
	const handleChildChange = params => {
		setchild(params.target.value);
	};
	const handleTitleChange = params => {
		settitle(params.target.value);
	};

	const _addCard = params => func(title, childList);

	return (
		<div>
			<div className='new-card-main'>
				<header
					style={{
						borderBottom: '1px solid #eee',
						padding: 6,
						marginBottom: 10,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						color: '#E08521',
					}}
				>
					{/* <div style={{fontSize: 14, fontWeight: 'bold'}}>props.name</div> */}
					{/* <label>Title: </label> */}
					<select onChange={handleTitleChange}>
						<option selected disabled>
							select title...
						</option>
						<option>Lesson 1</option>
						<option>Lesson 2</option>
						<option>Lesson 3</option>
						<option>Lesson 4</option>
					</select>
					{/* <div style={{fontSize: 11}}>props.dueOn</div> */}
				</header>
				<div style={{fontSize: 12}}>
					{childList &&
						childList.map(child => {
							return <p>{child}</p>;
						})}
					<select onChange={handleChildChange}>
						<option selected disabled>
							Add child...
						</option>
						<option>student 1</option>
						<option>student 2</option>
						<option>student 3</option>
						<option>student 4</option>
						<option>student 5</option>
					</select>
					{/* <input type='submit' value='Submit' /> */}
					<button onClick={addChild}>add</button>
					{/* <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>props.subTitle</div>
				<div style={{padding: '5px 0px'}}>
					<i>props.body</i>
				</div>
				<div
					style={{
						marginTop: 10,
						textAlign: 'center',
						color: '#E08521',
						fontSize: 15,
						fontWeight: 'bold',
					}}
				>
					props.escalationText
				</div> */}
				</div>
			</div>
			<div>
				<button onClick={_addCard}>Add</button>
				<button>Cancel</button>
			</div>
		</div>
	);
};
