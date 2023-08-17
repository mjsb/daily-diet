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
	const [percent, setPercent] = useState<any>(0);
	const [type, setType] = useState<any>('');

	const navigation = useNavigation();

	const meals_in = [];
	const meals_out = [];

	let res: string;
	let typ: string;

	function handleNewMeal() {
		navigation.navigate('new');
	}

	async function fetchMeals() {

		try {

			setType('');
			setMeals([]);
			setPercent(0);
			meals_in.length = 0;
			meals_out.length = 0;

			const foods = await mealGetAll();
			// console.log(foods);
			const meal = foods.reduce((acc: any, food) => {
				if (!acc[food.date]) {
					acc[food.date] = [];
				}
				acc[food.date].push(food);
				return acc;
			}, {});

			// console.log(meal);	

			foods.forEach(element => {

				if ( element.status === '1' ) {
					meals_in.push(element.status);
				} else {
					meals_out.push(element.status);
				}

			});

			const percent_in = meals_in.length / foods.length * 100;
			// const percent_out = meals_out.length / foods.length * 100;

			if ( percent_in >= 60 ) {

				res = (meals_in.length / foods.length * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'IN';

			} else if ( percent_in < 60 ) {

				res = (meals_out.length / foods.length * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'OUT';

			}			
			
			setPercent(res);
			setType(typ);

			const sectionListData = Object.keys(meal).map((item) => {
				const data = meal[item];
				return {
					id: item,
					title: item,
					data,
				};
			});
			
			setMeals(sectionListData);
			// console.log(meals);
			// AsyncStorage.clear();
			// setMeals([]);

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
			{ percent !== '0' &&
				<PercentCard
					type={type}
					title={percent}
					subtitle={type === 'IN' ? 'dentro' : 'fora'}
				/>
			}
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
							keyExtractor={item => item.sort_hour}
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
