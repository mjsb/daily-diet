import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, ButtonTypeStyleProps } from "./styles";
import theme from "@theme/index";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button ({ title, type = 'PRIMARY', ...rest}: Props) {
    return (
        <Container  
            type={type}
            {...rest}>
            {!type && (
                <AntDesign
                    name={type === 'PRIMARY' ? 'plus' : 'delete'}
                    size={18}
                    color={type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200 }
                />          
            )}
            <ButtonText>
                {title}
            </ButtonText>
        </Container>

    )
}