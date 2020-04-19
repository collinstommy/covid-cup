export const getTotal = (record) => {
	return record.cycleScore + record.runScore + record.cycleScoreVert + record.runScoreVert;
};

export const scoreColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Cycle',
		dataIndex: 'cycleScore',
		key: 'cycleScore'
	},
	{
		title: 'Cycle Vert',
		dataIndex: 'cycleScoreVert',
		key: 'cycleScoreVert'
	},
	{
		title: 'Run',
		dataIndex: 'runScore',
		key: 'runScore'
	},
	{
		title: 'Run Vert',
		dataIndex: 'runScoreVert',
		key: 'runScoreVert'
	},
	{
		title: 'Penalties',
		dataIndex: 'penalties',
		key: 'penalties'
	},
	{
		title: 'Total',
		dataIndex: 'total',
		key: 'total',
		render: (_, record) => getTotal(record),
		sorter: (a, b) => getTotal(a) - getTotal(b)
	}
];

const asKm = (text) => (!text ? '' : `${text} km`);
const asM = (text) => (!text ? '' : `${text} m`);

export const timeColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Cycle Distance',
		dataIndex: 'cycleDistance',
		key: 'cycleDistance',
		render: asKm
	},
	{
		title: 'Cycle Vert',
		dataIndex: 'cycleDistanceVert',
		key: 'cycleDistanceVert',
		render: asM
	},
	{
		title: 'Run',
		dataIndex: 'runDistance',
		key: 'runDistance',
		render: asKm
	},
	{
		title: 'Run',
		dataIndex: 'runDistanceVert',
		key: 'runDistanceVert',
		render: asM
	},
	{
		title: 'Penalties',
		dataIndex: 'penalties',
		key: 'penalties'
	}
];
