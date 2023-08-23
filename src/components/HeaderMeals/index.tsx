import { Container, Title, BackIcon, Content, BackButton, HeaderMealsStyleProps, HeaderMealsTitleProps } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    type?: HeaderMealsStyleProps;
    mode: HeaderMealsTitleProps;
} 

export function HeaderMeals({ type = 'PRIMARY', mode }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container
            type={type}
            mode={mode}
        >
            <BackButton
                onPress={handleGoBack}
            >
                <BackIcon />
            </BackButton>
            <Content>
                <Title>{mode === 'ADD' ? 'Nova refeição' : mode === 'EDIT' ? 'Editar refeição' : 'Refeição'}</Title>
            </Content>
        </Container>
    )
}