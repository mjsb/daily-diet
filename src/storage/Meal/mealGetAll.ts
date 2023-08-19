import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetAll() {
    try {
        
        const stored = await AsyncStorage.getItem(MEAL_COLLECTION);
        const meal: MealStorageDTO[] = stored ? JSON.parse(stored) : [];

        return meal;
        
    } catch (error) {

        throw error;
        
    }
    
}
