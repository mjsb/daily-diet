import { useCallback, useState } from 'react';
import { Header } from '@components/Header';
import { Container, DateList, Title } from './styles';

import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import { MealCard } from '@components/MealList';
import { FlatList } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mealGetAll } from '@storage/Meal/mealGetAll';
import { MealStorageDTO } from '@storage/Meal/MealStorageDTO';

export function Meals() {
	const [meals, setMeals] = useState<MealStorageDTO[]>([]);

	const navigation = useNavigation();

	let varData = '';

	function handleNewMeal() {
		navigation.navigate('new');
	}

	async function fetchMeals() {

		try {

			const meal = await mealGetAll();
			setMeals(meal);
			console.log('Refeições: '+meals);

			//const keys = [DATE_COLLECTION, MEAL_COLLECTION];
			//await AsyncStorage.multiRemove(keys);
			
			//const onlyDates = meal.filter(meals => meals.date === '29/07/2023');
			//console.log('Só as datas: '+onlyDates);

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
			{/* <FlatList
				data={}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
						<>
							<DateList>
								{item.date}
							</DateList>
							<FlatList
								data={meals}
								keyExtractor={item => item.id}
								renderItem={({ item }) => (
										<MealCard 
											hora={item.hour}
											meal={item.name}
											type={item.status === '2' ? 'OUT' : 'IN'}
										/>
									)

								}								
							
							>
							</FlatList>					
						</>)
					}
				showsVerticalScrollIndicator={false}	
				fadingEdgeLength={300}
			>
			</FlatList>   */}
		</Container>
		
	);
}
