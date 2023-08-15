import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealStorageDTO } from "./MealStorageDTO";
import { useNavigation } from "@react-navigation/native";

export async function mealCreate(newMeal: MealStorageDTO) {
    
    try {
        
        const navigate = useNavigation();
        const storedMeals = await mealGetAll();
        // const mealAlreadyExists = storedMeals.filter(meals => meals.title === newMeal.title);
        
        const allMeals = [...storedMeals, newMeal];
        
        const sortHour = allMeals.sort(compareHour);
        const sortDate = sortHour.sort(compareDate);
        
        // const storage = JSON.stringify([...storedMeals, newMeal]);
        const storage = JSON.stringify(sortDate);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage); 
        
        function compareDate(a: any, b: any) {
            return b.sort_date - a.sort_date;
        }
        
        function compareHour(a: any, b: any) {
            return a.sort_hour - b.sort_hour;
        }

        navigate.navigate('meals');

    } catch (error) {

        throw error;
        
    }
    
}