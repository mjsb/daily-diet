import { Container, Title, BackIcon, Content, BackButton, HeaderMealsStyleProps } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    type?: HeaderMealsStyleProps;
    title?: string;
}

export function HeaderMeals({type = 'ADD', title}: Props) {
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
                <BackIcon />
            </BackButton>
            <Content>
                <Title>{type === 'ADD' ? 'Nova refeição' : type === 'EDIT' ? 'Editar refeição' : 'Refeição'}</Title>
            </Content>
        </Container>
    )
}