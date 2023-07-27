import { useCallback, useState } from 'react';
import { Header } from '@components/Header';
import { Container, DateList, Title } from './styles';

import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import { MealCard } from '@components/MealList';
import { FlatList } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mealGetAll } from '@storage/Meal/mealGetAll';

export function Meals() {
	const [datas, setDatas] = useState([]);
	const [meals, setMeals] = useState<string[]>([]);

	const navigation = useNavigation();

	function handleNewMeal() {
		navigation.navigate('new');
	}

	async function fetchMeals() {

		try {

			const data = await mealGetAll();
			setMeals(data);
			console.log(data);
			
		} catch (error) {

			throw error;
			
		}
		
	}

	useFocusEffect(useCallback(() => {
		fetchMeals();
	}, []));

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
