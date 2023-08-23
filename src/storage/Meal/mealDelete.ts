import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODS_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealDelete(deletedID: string | number[]) {

    try {
        
        const storedMeals = await mealGetAll();        

        const mealAlreadyExists = storedMeals.filter(meals => meals.id !== deletedID);
      
        await AsyncStorage.setItem(FOODS_COLLECTION, JSON.stringify(mealAlreadyExists)); 
        
    } catch (error) {

        throw error;
        
    }
    
}