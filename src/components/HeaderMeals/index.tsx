import { Container, Title, BackIcon, Content, BackButton, HeaderMealsStyleProps } from "./styles";

type Props = {
    type: HeaderMealsStyleProps;
    title: string;
}

export function HeaderMeals({type, title}: Props) {
    return (
        <Container
            type={type}
        >
            <BackButton>
                <BackIcon />
            </BackButton>
            <Content>
                <Title>{title}</Title>
            </Content>
        </Container>
    )
}