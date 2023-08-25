import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODS_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealUpdate(editedMeal: MealStorageDTO) {

    function compareDate(a: any, b: any) {
        
        return b.sort_date - a.sort_date;
        
    }
    
    function compareHour(a: any, b: any) {
        
        return a.sort_hour - b.sort_hour;
        
    }

    try {
        
        const storedMeals = await mealGetAll();

        if ( storedMeals.length > 1 ) {

            const mealAlreadyExists = storedMeals.filter(meals => meals.id !== editedMeal.id);
            
            const allMeals = [...mealAlreadyExists, editedMeal];
            
            const sortHour = allMeals.sort(compareHour);
            const sortDate = sortHour.sort(compareDate);
            
            await AsyncStorage.setItem(FOODS_COLLECTION, JSON.stringify(sortDate)); 

        } else if ( storedMeals.length === 1 ) {

            await AsyncStorage.setItem(FOODS_COLLECTION, JSON.stringify([editedMeal])); 

        }        

    } catch (error) {

        throw error;
        
    }
    
}