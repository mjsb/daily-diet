import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, ButtonTypeStyleProps } from "./styles";
import theme from "@theme/index";

type Props = TouchableOpacityProps & {
    title: string;
    type: ButtonTypeStyleProps;
    onPress: () => void;
}

export function Button ({ title, type, onPress }: Props) {
    return (
        <Container  
            type={type}
            onPress={onPress}
        >
            {type && (
                <AntDesign 
                    color={type === 'IN' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200}
                    name={type === 'IN' ? 'edit' : type === 'OUT' ? 'delete' : 'plus'}
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