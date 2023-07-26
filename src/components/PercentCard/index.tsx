import { TouchableOpacityProps } from "react-native";
import { PercentCardStyleProps, Container, BoxIcon, Icon, SubTitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
    title: string;
    type: PercentCardStyleProps;
}

export function PercentCard({ title, type = 'IN'}: Props) {
    const navigation = useNavigation();

    function handlePercent() {
        navigation.navigate('estatistics');
    }

    return (
        <Container 
            type={type}
            onPress={handlePercent}    
        >
            <BoxIcon>
                <Icon type={type} />
            </BoxIcon>
            <Title>
                {title}
            </Title>
            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </Container>
    );
}
