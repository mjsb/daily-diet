import { useState } from 'react';
import { Header } from '@components/Header';
import { Container, DateList, Title } from './styles';

import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import { MealCard } from '@components/MealList';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function Meals() {
	const [datas, setDatas] = useState(['16.07.2023', '17.07.2023', '18.07.2023', '19.07.2023']);
	const [meals, setMeals] = useState(['10:00', 'X-Tudo', 'NO']);

	const navigation = useNavigation();

	function handleNewMeal() {
		navigation.navigate('new');
	}

	return (
		<Container>
			<Header />
			<PercentCard
				type="IN"
				title="90,86%"
			/>
			<Title>Refeições</Title> 
			<Button 
				type="ADD"
				title="Nova refeição"
				onPress={handleNewMeal}
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
									type={item === 'NO' ? 'OUT' : 'IN'}
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
