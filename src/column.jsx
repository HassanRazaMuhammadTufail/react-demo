import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Task from './task';
import AddLesson from './addLesson.jsx';
import AddTask from './addTask';

const Container = styled.div`
	margin: 8px;
	border: 1px solid lightgrey;
	border-radius: 2px;
	min-width: 320px;
	display: flex;
	flex-direction: column;
	background-color: #2d6e89;
	height: fit-content;
	max-height: 90vh;
	margin-top: 50px;
`;
const Title = styled.h3`
	padding: 8px;
	width: 80%;
	margin: auto;
	// background-color: inherit;
`;
const TaskList = styled.div`
	padding: 8px;
	transition: background-color 0.2s ease;
	// background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
	// background-color: skyblue;
	flex-grow: 1;
	overflow: auto;
`;
// min-height: 100px;
// max-height: 80vh;

const Button = styled.button`
	border: none;
	color: #00333b;
	background-color: inherit;
	font-weight: 600;
`;

// const AddLesson = styled.div``;

const ButtonBar = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2%;
	justify-content: space-between;
`;

export default class Column extends React.Component {
	state = {
		addLesson: {
			show: false,
			topicSelected: false,
			columnId: '',
		},
		tags: [],
		addTask: {
			show: false,
			columnId: '',
		},
		lessonText: '',
	};
	onLessonAdd = e => {
		console.log(this.props);
		this.setState({
			...this.state,
			addLesson: {...this.state.addLesson, show: true},
		});
		// alert('add lesson');
	};

	onCancel = () => {
		this.setState({
			...this.state,
			addLesson: {...this.state.addLesson, show: false},
		});
	};

	enterKeyFunc = e => {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			this.addLesson();
		}
	};

	addLesson = () => {
		this.setState({
			...this.state,
			addLesson: {...this.state.addLesson, show: false},
		});
		this.props.tasks.push({
			id: 'task-5101',
			content: this.state.lessonText,
			students: this.state.tags,
		});
	};

	addTask = () => {
		this.setState({
			...this.state,
			addTask: {...this.state.addLesson, show: false},
		});
		this.props.tasks.push({
			id: 'task-5101',
			content: this.state.lessonText,
		});
	};

	onTaskAdd = e => {
		console.log(this.props);
		this.setState({
			...this.state,
			addTask: {...this.state.addTask, show: true},
		});
		// alert('add lesson');
	};

	onTagsAdd = e => {
		console.log(e);
		this.setState({...this.state, tags: this.state.tags.push(...e)});
	};

	handleTextChange = e => {
		console.log(e.target.value);
		this.setState({...this.state, lessonText: e.target.value});
	};

	onRightClick = e => {
		console.log(e.type);
	};
	render() {
		console.log(this.props);
		return (
			<Container>
				<Title>{this.props.column.title}</Title>
				<Droppable droppableId={this.props.column.id}>
					{(provided, snapshot) => (
						<>
							<TaskList
								ref={provided.innerRef}
								{...provided.droppableProps}
								isDraggingOver={snapshot.isDraggingOver}
							>
								{this.props.tasks.map((task, index) => (
									<Task
										key={task.id}
										task={task}
										index={index}
										onRightClick={this.onRightClick}
									/>
								))}
								{provided.placeholder}
							</TaskList>
							{!this.state.addLesson.show && !this.state.addTask.show ? (
								<ButtonBar>
									<Button onClick={this.onLessonAdd}>+ Select Lesson</Button>
									<Button onClick={this.onTaskAdd}>+ Add Task</Button>
								</ButtonBar>
							) : (
								<>
									{this.state.addLesson.show && (
										<AddLesson
											addLesson={this.addLesson}
											onCancel={this.onCancel}
											handleTextChange={this.handleTextChange}
											enterKeyFunc={this.enterKeyFunc}
											onTagsAdd={this.onTagsAdd}
										/>
										// 	<textarea
										// 		rows='2'
										// 		cols='39'
										// 		onChange={this.handleTextChange}
										// 		onKeyDown={this.enterKeyFunc}
										// 	></textarea>
										// 	<Button onClick={this.addLesson}>Add lesson</Button>
										// 	<Button onClick={this.onCancel}> X </Button>
										// </AddLesson>
									)}

									{this.state.addTask.show && (
										<AddTask
											addTask={this.addTask}
											onCancel={this.onCancel}
											handleTextChange={this.handleTextChange}
											enterKeyFunc={this.enterKeyFunc}
										/>
										// 	<textarea
										// 		rows='2'
										// 		cols='39'
										// 		onChange={this.handleTextChange}
										// 		onKeyDown={this.enterKeyFunc}
										// 	></textarea>
										// 	<Button onClick={this.addLesson}>Add Task</Button>
										// 	<Button onClick={this.onCancel}> X </Button>
										// </AddLesson>
									)}
								</>
							)}
						</>
					)}
				</Droppable>
			</Container>
		);
	}
}
