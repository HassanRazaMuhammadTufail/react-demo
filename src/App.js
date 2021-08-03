import React, {Component} from 'react';
import './App.css';
// import Board from 'react-trello';
// import {NewCardComponent} from './components/createCard';
import {DragDropContext} from 'react-beautiful-dnd';
import initialData from './sample-data';
import Column from './column';
import Topbar from './topbar';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Screen = styled.div``;

export default class App extends Component {
	state = {
		...initialData,
		currentWeek: 4,
		datesData: [
			{
				weekNo: 1,
				value: 'Aug 02 - Aug 06',
				columnIds: [
					'col-02-08-2021',
					'col-03-08-2021',
					'col-04-08-2021',
					'col-05-08-2021',
					'col-06-08-2021',
				],
			},
			{
				weekNo: 2,
				value: 'Aug 09 - Aug 13',
				columnIds: [
					'col-09-08-2021',
					'col-10-08-2021',
					'col-11-08-2021',
					'col-12-08-2021',
					'col-13-08-2021',
				],
			},
			{
				weekNo: 2,
				value: 'Aug 16 - Aug 20',
				columnIds: [
					'col-16-08-2021',
					'col-17-08-2021',
					'col-18-08-2021',
					'col-19-08-2021',
					'col-20-08-2021',
				],
			},
			{
				weekNo: 3,
				value: 'Aug 23 - Aug 27',
				columnIds: [
					'col-23-08-2021',
					'col-24-08-2021',
					'col-25-08-2021',
					'col-26-08-2021',
					'col-27-08-2021',
				],
			},
			{
				weekNo: 4,
				value: 'Aug 30 - Sep 03',
				columnIds: [
					'col-01-08-2021',
					'col-02-08-2021',
					'col-03-08-2021',
					'col-04-08-2021',
					'col-05-08-2021',
					'col-06-08-2021',
				],
			},
			{
				weekNo: 5,
				value: 'Sep 06 - Sep 10',
				columnIds: [
					'col-01-08-2021',
					'col-02-08-2021',
					'col-03-08-2021',
					'col-04-08-2021',
					'col-05-08-2021',
					'col-06-08-2021',
				],
				date: [],
			},
		],
	};

	// onDragStart = () => {
	// 	document.body.style.color = 'orange';
	// 	document.body.style.transition = 'background-color 0.2s ease';
	// };

	// onDragUpdate = update => {
	// 	const {destination} = update;
	// 	const opacity = destination
	// 		? destination.index / Object.keys(this.state.tasks).length
	// 		: 0;
	// 	document.body.style.backgroundColor = `rgba( 153, 141, 217, ${opacity})`;
	// };

	onDragEnd = result => {
		// document.body.style.color = 'inherit';
		// document.body.style.backgroundColor = 'inherit';

		const {destination, source, draggableId} = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds,
			};

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn,
				},
			};

			this.setState(newState);
			return;
		}

		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds,
		};

		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		};

		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};
		this.setState(newState);
	};
	render() {
		return (
			<Screen>
				<>
					<Topbar datesData={this.state.datesData} />
					<DragDropContext
						onDragEnd={this.onDragEnd}
						// onDragStart={this.onDragStart}
						// onDragUpdate={this.onDragUpdate}
					>
						<Container>
							{this.state.columnOrder.map(columnId => {
								const column = this.state.columns[columnId];
								const tasks = column.taskIds.map(
									taskId => this.state.tasks[taskId]
								);

								return <Column key={column.id} column={column} tasks={tasks} />;
							})}
						</Container>
					</DragDropContext>
				</>
			</Screen>
		);
	}
}
