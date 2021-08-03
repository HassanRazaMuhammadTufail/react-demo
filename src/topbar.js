import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 45px;
	background-color: #2868aa;
	display: flex;
	position: fixed;
`;

const SelectClass = styled.select`
	width: fit-content;
	margin: auto 1%;
	background-color: inherit;
	// float: left;
	// background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
	// 	no-repeat right #ddd;
`;

const SelectType = styled.select`
	width: fit-content;
	margin: auto 1%;
	background-color: inherit;
	// float: right;
	// background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
	// 	no-repeat right #ddd;
`;

const Select = styled.div`
	// width: fit-content;
	margin: auto;
	background-color: inherit;
	// background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
	// 	no-repeat right #ddd;
	display: flex;
`;

export default class Topbar extends Component {
	state = {
		classes: [
			{id: '1', value: 'Primary'},
			{id: '2', value: 'Elementary'},
		],
		types: ['By Date', 'Child Boxes'],
		// datesData: [
		// 	{
		// 		weekNo: 1,
		// 		value: 'Aug 02 - Aug 6',
		// 		columnIds: [
		// 			'col-02-08-2021',
		// 			'col-03-08-2021',
		// 			'col-04-08-2021',
		// 			'col-05-08-2021',
		// 			'col-06-08-2021',
		// 		],
		// 	},
		// 	{
		// 		weekNo: 2,
		// 		value: 'Aug 09 - Aug 13',
		// 		columnIds: [
		// 			'col-09-08-2021',
		// 			'col-10-08-2021',
		// 			'col-11-08-2021',
		// 			'col-12-08-2021',
		// 			'col-13-08-2021',
		// 		],
		// 	},
		// 	{
		// 		weekNo: 2,
		// 		value: 'Aug 16 - Aug 20',
		// 		columnIds: [
		// 			'col-16-08-2021',
		// 			'col-17-08-2021',
		// 			'col-18-08-2021',
		// 			'col-19-08-2021',
		// 			'col-20-08-2021',
		// 		],
		// 	},
		// 	{
		// 		weekNo: 3,
		// 		value: 'Aug 23 - Aug 27',
		// 		columnIds: [
		// 			'col-23-08-2021',
		// 			'col-24-08-2021',
		// 			'col-25-08-2021',
		// 			'col-26-08-2021',
		// 			'col-27-08-2021',
		// 		],
		// 	},
		// 	{
		// 		weekNo: 4,
		// 		value: 'Aug 30 - Sep 03',
		// 		columnIds: [
		// 			'col-01-08-2021',
		// 			'col-02-08-2021',
		// 			'col-03-08-2021',
		// 			'col-04-08-2021',
		// 			'col-05-08-2021',
		// 			'col-06-08-2021',
		// 		],
		// 	},
		// 	{
		// 		weekNo: 5,
		// 		value: 'Sep 06 - Sep 10',
		// 		columnIds: [
		// 			'col-01-08-2021',
		// 			'col-02-08-2021',
		// 			'col-03-08-2021',
		// 			'col-04-08-2021',
		// 			'col-05-08-2021',
		// 			'col-06-08-2021',
		// 		],
		// 	},
		// ],
		selectedDateRange: this.props.datesData[0],
	};

	onClick = e => {
		if (e.target.childNodes[0].data === 'Next') {
			let index = this.props.datesData.indexOf(this.state.selectedDateRange);
			this.setState({
				...this.state,
				selectedDateRange: this.props.datesData[index + 1],
			});
		} else {
			let index = this.props.datesData.indexOf(this.state.selectedDateRange);
			this.setState({
				...this.state,
				selectedDateRange: this.props.datesData[index - 1],
			});
		}
	};

	onDateRangeChange = e => {
		console.log(e);
		// this.setState({...this.state,})
	};

	render() {
		return (
			<Container>
				<SelectClass>
					<option disabled selected>
						select class...
					</option>
					{this.state.classes.map(_class => {
						return <option>{_class.value}</option>;
					})}
				</SelectClass>
				<Select>
					<button onClick={this.onClick}>Previous</button>
					<select
						onChange={this.onDateRangeChange}
						value={this.state.selectedDateRange.value}
					>
						{this.props.datesData.map(dateData => (
							<option>{dateData.value}</option>
						))}
					</select>
					<button onClick={this.onClick}>Next</button>
				</Select>
				<SelectType>
					<option disabled selected>
						select class...
					</option>
					{this.state.types.map(_type => {
						return <option>{_type}</option>;
					})}
				</SelectType>
				{/* <p>hi</p> */}
			</Container>
		);
	}
}
