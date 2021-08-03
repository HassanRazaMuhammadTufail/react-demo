// const lanes = {
// 	lanes: [
// 		{
// 			id: 'lane1',
// 			title: 'Completed1',
// 			label: '0/0',
// 			cards: [
// 				{
// 					id: 'Card2',
// 					title: 'Pay Rent',
// 					description: 'Transfer via NEFT',
// 					label: '5 mins',
// 					draggable: true,
// 					// metadata: {sha: 'be312a1'},
// 				},
// 			],
// 			editable: true,
// 		},
// 		{
// 			id: 'lane2',
// 			title: 'Planned Tasks',
// 			cards: [
// 				{
// 					id: 'Card1',
// 					name: 'John Smith',
// 					dueOn: 'due in a day',
// 					subTitle: 'SMS received at 12:13pm today',
// 					body: 'Thanks. Please schedule me for an estimate on Monday.',
// 					escalationText: 'Escalated to OPS-ESCALATIONS!',
// 					cardColor: '#BD3B36',
// 					cardStyle: {
// 						borderRadius: 6,
// 						boxShadow: '0 0 6px 1px #BD3B36',
// 						marginBottom: 15,
// 					},
// 				},
// 				{
// 					id: 'Card2',
// 					name: 'Card Weathers',
// 					dueOn: 'due now',
// 					subTitle: 'Email received at 1:14pm',
// 					body: 'Is the estimate free, and can someone call me soon?',
// 					escalationText: 'Escalated to Admin',
// 					cardColor: '#E08521',
// 					cardStyle: {
// 						borderRadius: 6,
// 						boxShadow: '0 0 6px 1px #E08521',
// 						marginBottom: 15,
// 					},
// 				},
// 			],
// 		},
// 	],
// };

// const App = () => {
// 	const [data, setData] = useState();
// 	const [lanes, setlanes] = useState([
// 		{
// 			id: 'lane-0',
// 			title: '??',
// 			label: '0/0',
// 			cards: [],
// 			editable: true,
// 		},
// 		{
// 			id: 'lane-1',
// 			title: '23/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 		{
// 			id: 'lane-2',
// 			title: '24/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 		{
// 			id: 'lane-2',
// 			title: '25/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 		{
// 			id: 'lane-2',
// 			title: '26/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 		{
// 			id: 'lane-2',
// 			title: '27/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 		{
// 			id: 'lane-2',
// 			title: '28/07',
// 			label: '0/0',
// 			cards: [],
// 		},
// 	]);
// 	const [cards, setcards] = useState([
// 		{
// 			id: 'card-1',
// 			laneId: 'lane-0',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 		{
// 			id: 'card-2',
// 			laneId: 'lane-0',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 		{
// 			id: 'card-3',
// 			laneId: 'lane-1',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 		{
// 			id: 'card-4',
// 			laneId: 'lane-1',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 		{
// 			id: 'card-5',
// 			laneId: 'lane-1',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 		{
// 			id: 'card-6',
// 			laneId: 'lane-2',
// 			title: 'Pay Rent',
// 			description: 'Transfer via NEFT',
// 		},
// 	]);

// 	useEffect(() => {
// 		let _lanes = lanes.map(lane => {
// 			let _cards = cards.filter(card => card.laneId === lane.id);
// 			return {...lane, cards: _cards};
// 		});
// 		setData({lanes: _lanes});
// 	}, [lanes, cards]);

// 	const addCard = (title, params) => {
// 		setcards([
// 			...cards,
// 			{
// 				id: '111',
// 				title,
// 				description: params[0],
// 				laneId: 'lane-0',
// 			},
// 		]);
// 	};

// 	return (
// 		<>
// 			{!data && 'loading'}
// 			{data && (
// 				<Board
// 					data={data}
// 					components={{
// 						NewCardForm: () => {
// 							return NewCardComponent({func: addCard});
// 						},
// 					}}
// 				></Board>
// 			)}
// 		</>
// 	);
// };
