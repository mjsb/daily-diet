import { useState } from 'react';
import { Header } from '@components/Header';
import { Container, DateList, Title } from './styles';

import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import { MealCard } from '@components/MealList';
import { FlatList } from 'react-native';

export function Meals() {
	const [datas, setDatas] = useState(['16.07.2023', '17.07.2023', '18.07.2023', '19.07.2023']);
	const [meals, setMeals] = useState(['10:00', 'X-Tudo', 'NO']);
	return (
		<Container>
			<Header />
			<PercentCard
				type="PRIMARY"
				title="90,86%"
			/>
			<Title>Refeições</Title> 
			<Button 
				title="Nova refeição"
			/>  
			<FlatList
				data={datas}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<>
						<DateList>
							{item}
						</DateList>

						<FlatList
							data={meals}
							keyExtractor={item => item}
							renderItem={({ item }) => (
								
								<MealCard 
									hora={item}
									meal={item}
									type={item === 'NO' ? 'SECONDARY' : 'PRIMARY'}
								/>

							)}
						
						>
						</FlatList>					
					</>
				)}
				showsVerticalScrollIndicator={false}	
				fadingEdgeLength={300}
			>
			</FlatList>  
		</Container>
		
	);
}
