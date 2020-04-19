import { Table, Typography } from 'antd';
import React from 'react';
import { StarFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { timeColumns, scoreColumns, getTotal } from '../config/dataTable';

const { Text } = Typography;

const WinningStar = styled(StarFilled)`
  margin-right: 8px;
`;

const TeamResult = ({ name, members, isWinner, showScore }) => {
	const title = () => (
		<span>
			{isWinner && <WinningStar />}
			{name}
		</span>
	);

	const columnConfig = showScore ? scoreColumns : timeColumns;
	return (
		<Table
			pagination={false}
			title={title}
			dataSource={members}
			columns={columnConfig}
			bordered
			summary={(pageData) => {
				const keys = columnConfig.map(({ key }) => key);
				keys.shift();
				keys.pop();

				const teamTotal = pageData.reduce((sum, record) => (sum += getTotal(record)), 0);

				return (
					<tr>
						<th>Totals</th>
						{keys.map((colId) => (
							<td>
								<Text>{pageData.reduce((sum, record) => (sum += record[colId]), 0)}</Text>
							</td>
						))}
						<th>
							<Text strong>{teamTotal}</Text>
						</th>
					</tr>
				);
			}}
		/>
	);
};

export default TeamResult;
