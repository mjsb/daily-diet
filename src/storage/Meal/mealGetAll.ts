import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealGetAll() {
    try {
        
        const stored = await AsyncStorage.getItem(FOODS_COLLECTION);
        const meal: MealStorageDTO[] = stored ? JSON.parse(stored) : [];

        return meal;
        
    } catch (error) {

        throw error;
        
    }
    
}
