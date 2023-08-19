import { Container, Hora, Meal, Bullet, Pipe, BulletTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    hora: string;
    meal: string;
    type?: BulletTypeStyleProps;
    onPress: () => void;
}

export function MealCard({ hora, meal, type = 'IN', onPress}: Props) {
    return (
        <Container
            onPress={onPress}
        >
            <Hora>{hora}</Hora>           
            <Pipe />
            <Meal>{meal}</Meal>
            <Bullet 
                type={type}
            />
        </Container>
    )
}