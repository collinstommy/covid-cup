import React, { useState } from 'react';
import { Menu, Layout, PageHeader } from 'antd';
import '../layout.css';
import styled from 'styled-components';
import { races } from '../resultData';
import RaceDetail from '../components/RaceDetail';

const { Footer, Sider, Content } = Layout;

const MainContent = styled(Content)`
  padding: 40px;
`;

const SideNav = styled(Sider)`
  color: #fff;
  border-right: 1px solid #f0f0f0;
`;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const IndexPage = () => {
	const defaultId = races[1].id;
	const [ selectedRace, setRace ] = useState(defaultId);
	const handleClick = ({ key }) => {
		setRace(key);
	};
	const race = races.find(({ id }) => id === selectedRace);

	return (
		<StyledLayout>
			<PageHeader title="Covid Cup" />
			<Layout className="site-layout-background">
				<SideNav theme="light">
					<Menu defaultSelectedKeys={[ defaultId ]} mode="inline" styled={{ height: '100%' }}>
						<Menu.ItemGroup title="Races">
							{races.map((race) => (
								<Menu.Item key={race.id} onClick={handleClick}>
									{race.label}
								</Menu.Item>
							))}
						</Menu.ItemGroup>
					</Menu>
				</SideNav>
				<MainContent>
					<RaceDetail {...race} />
				</MainContent>
			</Layout>
			<Footer>© Copyright O'Mahony Event Management</Footer>
		</StyledLayout>
	);
};

export default IndexPage;
