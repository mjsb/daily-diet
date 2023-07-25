import { Container, Title, BackIcon, Content, BackButton, HeaderMealsStyleProps } from "./styles";

type Props = {
    type?: HeaderMealsStyleProps;
    title: string;
}

export function HeaderMeals({type = 'ADD', title}: Props) {
    return (
        <Container
            type={type}
        >
            <BackButton>
                <BackIcon />
            </BackButton>
            <Content>
                <Title>{type === 'ADD' ? 'Nova refeição' : type === 'EDIT' ? 'Editar refeição' : 'Refeição'}</Title>
            </Content>
        </Container>
    )
}