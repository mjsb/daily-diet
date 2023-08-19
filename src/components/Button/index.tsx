import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, ButtonTypeStyleProps } from "./styles";
import theme from "@theme/index";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    onPress: () => void;
}

export function Button ({ title, type = 'PRIMARY', onPress }: Props) {
    return (
        <Container  
            type={type}
            onPress={onPress}
        >
            {type !== 'PRIMARY' && (
                <AntDesign 
                    color={ type === 'ADD' || type === 'EDIT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200 }
                    name={ type === 'EDIT' ? 'edit' : type === 'DEL' ? 'delete' : type === 'ADD' ? 'plus' : 'minus' }
                    size={20}
                />          
            )}

            <ButtonText
                type={type}
            >
                {title}
            </ButtonText>
        </Container>
    )
}