import { Container, Hora, Meal, Bullet, Pipe, BulletTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    hora: string;
    meal: string;
    type?: BulletTypeStyleProps;
}

export function MealCard({ hora, meal, type = 'PRIMARY'}: Props) {
    return (
        <Container>
            <Hora>{hora}</Hora>           
            <Pipe />
            <Meal>{meal}</Meal>
            <Bullet 
                type={type}
            />
        </Container>
    )
}