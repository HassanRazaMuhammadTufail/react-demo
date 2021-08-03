import React, {Component} from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import makeAnimated from 'react-select/animated';

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

const colourOptions = [
	{value: 'chocolate', label: 'Chocolate'},
	{value: 'strawberry', label: 'Strawberry'},
	{value: 'vanilla', label: 'Vanilla'},
];

const animatedComponents = makeAnimated();

export default class AddLesson extends Component {
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
					<Select
						closeMenuOnSelect={false}
						components={animatedComponents}
						defaultValue={[colourOptions[4], colourOptions[5]]}
						isMulti
						options={colourOptions}
						onChange={this.props.onTagsAdd}
					/>
				</Container>
				<ButtonWrapper>
					<AddButton onClick={this.props.addLesson}>Add lesson</AddButton>
					<CancelButton onClick={this.props.onCancel}> X </CancelButton>
				</ButtonWrapper>
			</WrapperContainer>
		);
	}
}
