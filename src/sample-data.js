const initialData = {
	tasks: {
		'task-1': {
			id: 'task-1',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content:
				'Take out the garbage Take out the garbage Take out the garbage Take out the garbage Take out the garbage Take out the garbage Take out the garbage',
		},
		'task-2': {
			id: 'task-2',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content:
				'Watch my favorite show Take out the garbage  Take out the garbage Take out the garbageTake out the garbage Take out the garbage Take out the garbage Take out the garbage',
		},
		'task-3': {
			id: 'task-3',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content:
				'Charge my phone Watch my favorite show Take out the garbage  Take out the garbage Take out the garbageTake out the garbage Take out the garbage Take out the garbage Take out the garbage',
		},
		'task-4': {
			id: 'task-4',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content: 'Cook dinner',
		},
		'task-5': {
			id: 'task-5',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content: 'Some Lesson',
		},
		'task-6': {
			id: 'task-6',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content:
				'Some other lesson Watch my favorite show Take out the garbage  Take out the garbage Take out the garbageTake out the garbage Take out the garbage Take out the garbage Take out the garbage',
		},
		'task-7': {
			id: 'task-7',
			students: [
				{value: 'chocolate', label: 'Chocolate'},
				{value: 'strawberry', label: 'Strawberry'},
			],
			content: 'Task',
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: '??',
			taskIds: [
				'task-1',
				'task-2',
				'task-3',
				'task-4',
				'task-5',
				'task-6',
				'task-7',
			],
		},
		'column-2': {
			id: 'column-2',
			title: '27/07/21',
			taskIds: [],
		},
		'column-3': {
			id: 'column-3',
			title: '28/07/21',
			taskIds: [],
		},
		'column-4': {
			id: 'column-4',
			title: '29/07/21',
			taskIds: [],
		},
		'column-5': {
			id: 'column-5',
			title: '30/07/21',
			taskIds: [],
		},
		'column-6': {
			id: 'column-6',
			title: '31/07/21',
			taskIds: [],
		},
		'column-7': {
			id: 'column-7',
			title: '01/08/21',
			taskIds: [],
		},
		'column-8': {
			id: 'column-8',
			title: '02/08/21',
			taskIds: [],
		},
	},
	// Facilitate reordering of the columns
	columnOrder: [
		'column-1',
		'column-2',
		'column-3',
		'column-4',
		'column-5',
		'column-6',
		'column-7',
		'column-8',
	],
};

export default initialData;
