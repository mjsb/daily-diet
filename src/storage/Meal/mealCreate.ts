import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { AppError } from "@utils/appError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealCreate(newMeal: MealStorageDTO, data: Date) {
    try {

        const storedMeals = await mealGetAll();
        const mealAlreadyExists = storedMeals.filter(meals => meals.title === data);

        if(mealAlreadyExists.length > 0) {
            throw new AppError('Já existe uma refeição registrada nesta data e horário!');
        }
        
        const storage = JSON.stringify([...storedMeals, newMeal]);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}`, storage);
        
    } catch (error) {

        throw error;
        
    }
    
}