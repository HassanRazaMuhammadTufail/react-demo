import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 5px;
	width: 90%;
	background-color: white;
	margin: auto;
`;

const AddButton = styled.button`
	border: none;
	color: #00333b;
	background-color: skyblue;
	font-weight: 600;
`;

const CancelButton = styled.button`
	border: none;
	color: #00333b;
	background-color: inherit;
	font-weight: 600;
`;

const Textarea = styled.textarea`
	margin: auto;
	width: 90%;
`;

const ButtonWrapper = styled.div`
	display: flex;
`;

const WrapperContainer = styled.div`
	// display: flex;
`;

export default class AddTask extends Component {
	render() {
		return (
			<WrapperContainer>
				<Container>
					<Textarea
						rows='2'
						cols='39'
						onChange={this.props.handleTextChange}
						onKeyDown={this.props.enterKeyFunc}
					></Textarea>
				</Container>
				<ButtonWrapper>
					<AddButton onClick={this.props.addTask}>Add Task</AddButton>
					<CancelButton onClick={this.props.onCancel}> X </CancelButton>
				</ButtonWrapper>
			</WrapperContainer>
		);
	}
}
