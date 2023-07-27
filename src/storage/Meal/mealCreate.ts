import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { AppError } from "@utils/appError";

export async function mealCreate(newMeal:string) {
    try {

        const storedMeals = await mealGetAll();
        const mealAlreadyExists = storedMeals.includes(newMeal);

        if (mealAlreadyExists) {
            throw new AppError('Já existe uma refeição com esse nome!');
        }

        const storage = JSON.stringify([...storedMeals, newMeal]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
    } catch (error) {

        throw error;
        
    }
    
}