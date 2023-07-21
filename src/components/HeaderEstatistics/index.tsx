import { Container, Title, SubTitle, BackIcon, HeaderStyleProps, Content } from "./styles";

type Props = {
    type?: HeaderStyleProps;
}

export function HeaderEstatistic({ type = 'PRIMARY'}: Props) {
    return (
        <Container
            type={type}
        >
            <BackIcon />
            <Content>
                <Title>30,21%</Title>
                <SubTitle>das refeições dentro da dieta</SubTitle>
            </Content>
        </Container>
    )
}
