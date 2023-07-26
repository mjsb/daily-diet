import { Container, Title, SubTitle, BackButton, BackIcon, HeaderStyleProps, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    type?: HeaderStyleProps;
}

export function HeaderEstatistic({ type = 'IN'}: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container
            type={type}
        >
            <BackButton
                onPress={handleGoBack}
            >
                <BackIcon 
                    type={type}
                />
            </BackButton>
            <Content>
                <Title>30,21%</Title>
                <SubTitle>das refeições dentro da dieta</SubTitle>
            </Content>
        </Container>
    )
}
