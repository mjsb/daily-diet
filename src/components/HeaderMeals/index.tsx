import { Container, Title, BackIcon, Content, BackButton } from "./styles";

export function HeaderMeals() {
    return (
        <Container>
            <BackButton>
                <BackIcon />
            </BackButton>
            <Content>
                <Title>Nova refeição</Title>
            </Content>
        </Container>
    )
}