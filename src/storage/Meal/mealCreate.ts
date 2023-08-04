import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetByDate } from "./mealGetByDate";
import { AppError } from "@utils/appError";
import { MealStorageDTO } from "./MealStorageDTO";
import { Alert } from "react-native";

export async function mealCreate(newMeal: MealStorageDTO, data: string) {
    try {

        const storedMeals = await mealGetByDate(data);
        const mealAlreadyExists = storedMeals.filter(meals => meals.title === data);

        if(mealAlreadyExists.length > 0) {
            console.log(mealAlreadyExists);
            console.log(newMeal.data);
            console.log('Ok!'+storedMeals);
            
            // mealAlreadyExists[0]['data'].push(newMeal.data);
            // console.log(mealAlreadyExists);
            throw new AppError('Já existe uma refeição registrada nesta data!');
        }
        
        const storage = JSON.stringify([...storedMeals, newMeal]);

        Alert.alert('OK', storage);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${data}`, storage);

        // AsyncStorage.clear();
        
    } catch (error) {

        throw error;
        
    }
    
}