import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { View } from 'react-native';
import theme from '@theme/index';

export function Routes() {
    return (
        <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700}}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}