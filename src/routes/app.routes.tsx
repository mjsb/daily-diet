import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Estatistics } from '@screens/Estatistics';
import { Meals } from '@screens/Meals';
import { MealDetail } from '@screens/MealDetail';
import { NewMeal } from '@screens/NewMeal';
import { NewMealConfirm } from '@screens/NewMealConfirm';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="meals"
                component={Meals}
            />
            <Screen 
                name="estatistics"
                component={Estatistics}
            />
            <Screen 
                name="detail"
                component={MealDetail}
            />
            <Screen 
                name="new"
                component={NewMeal}
            />
            <Screen 
                name="confirm"
                component={NewMealConfirm}
            />
        </Navigator>
    )
}
