import { TouchableOpacityProps } from "react-native";
import { PercentCardStyleProps, Container, BoxIcon, Icon, SubTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
    title: string;
    subtitle: string;
    type: PercentCardStyleProps;
}

export function PercentCard({ title, subtitle, type = 'IN'}: Props) {
    const navigation = useNavigation();

    function handlePercent() {
        navigation.navigate('estatistics');
    }

    return (
        <Container 
            type={type}
            >
            <BoxIcon
                type={type}
                onPress={handlePercent}                
            >
                <Icon type={type} />
            </BoxIcon>
            <Title>
                {title}%
            </Title>
            <SubTitle>
                das refeições {subtitle} da dieta
            </SubTitle>
        </Container>
    );
}
