import { FlatList } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealList';
import { PercentCard } from '@components/PercentCard';

import { Container, DateList, Title } from './styles';

import { mealGetAll } from '@storage/Meal/mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Meals() {
	const [meals, setMeals] = useState<any[]>([]);
	const navigation = useNavigation();

	function handleNewMeal() {
		navigation.navigate('new');
	}

	async function fetchMeals() {

		try {

			const foods = await mealGetAll();
			console.log(foods);
			const meal = foods.reduce((acc: any, food) => {
				if (!acc[food.date]) {
					acc[food.date] = [];
				}
				acc[food.date].push(food);
				return acc;
			}, {});
			
			console.log(meal);

			const sectionListData = Object.keys(meal).map((item) => {
				const data = meal[item];
				return {
					id: item,
					title: item,
					data,
				};
			});
			
			setMeals(sectionListData);
			console.log(meals);
			// AsyncStorage.clear();
			// setMeals([]);

		} catch (error) {

			throw error; 
			
		}
		
	}

	useFocusEffect(useCallback(() => {
		setMeals([]);
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
				data={meals}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<>
						<DateList>
							{item.title.replaceAll('/','.')}
						</DateList>

						<FlatList 
							data={item.data}
							keyExtractor={item => item.data}
							renderItem={({ item }) => (
						
								<MealCard 
									hora={item.hour}
									meal={item.name}
									type={item.status === '2' ? 'OUT' : 'IN'}
								/>	

							)}
						/>	
											
					</>
				)}

				showsVerticalScrollIndicator={false}	
				fadingEdgeLength={300}
			>
			</FlatList>  
		</Container>
		
	);
}
