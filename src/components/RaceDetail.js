import React, { useState } from 'react';
import { Space, Typography, Radio } from 'antd';
import TeamResult from './TeamResult';
const { Title } = Typography;

const RaceDetail = ({
  label = '',
  teams = [],
  winner
}) => {

  const [showScore, setShowScore] = useState(true);
  if(!teams.length){
    return 'No data';
  };

  const handleMetricToggle = () => {
    setShowScore(!showScore)
  };

  const toggleValue = showScore ? 'Score' : 'time';
  const { name: winningTeamName } = teams.find(team => team.id === winner);

  return (
    <>
      <Title level={2}>{label}</Title>
      <Title level={4}>Winner: {winningTeamName}</Title>
      <Space direction="vertical" size="large">
        <Radio.Group onChange={handleMetricToggle} value={toggleValue}>
          <Radio.Button value="Score">Score</Radio.Button>
          <Radio.Button value="time">Time</Radio.Button>
        </Radio.Group>
        {teams.map(team => {
          const isWinner = team.id === winner;
          return (
            <TeamResult
              key={team.id}
              {...team}
              isWinner={isWinner}
              showScore={showScore}
            />
          );
        })}
      </Space>
    </>
  );
}

RaceDetail.propTypes = {};

export default RaceDetail;
