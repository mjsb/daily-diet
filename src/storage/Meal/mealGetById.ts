import { mealGetAll } from "./mealGetAll";

export async function mealGetById(id: string) {
    
    try {    
            
        const stored = await mealGetAll();
        const food = stored.filter(item => item.id === id);
        return food;
        
    } catch (error) {

        throw error;
        
    }
    
}
