import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	// text-decoration: line-thro;
	background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	margin: 5px;
`;

const animatedComponents = makeAnimated();

export default class Task extends React.Component {
	state = {
		textDecoration: 'none',
	};

	onCheckChange = e => {
		e.target.checked
			? this.setState({...this.state, textDecoration: 'line-through'})
			: this.setState({...this.state, textDecoration: 'none'});
	};

	render() {
		const styles = {
			containerStyle: {
				textDecoration: this.state.textDecoration,
			},
		};
		const {containerStyle} = styles;
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index}>
				{(provided, snapshot) => (
					<Container
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						isDragging={snapshot.isDragging}
						style={containerStyle}
					>
						<div onContextMenu={this.props.onRightClick}>
							<Input type='checkbox' onChange={this.onCheckChange} />
							{this.props.task.content}
							{/* <Select
								closeMenuOnSelect={false}
								components={animatedComponents}
								defaultValue={this.props.task.students}
								isMulti
								isClearable={true}
							/> */}
						</div>
					</Container>
				)}
			</Draggable>
		);
	}
}
