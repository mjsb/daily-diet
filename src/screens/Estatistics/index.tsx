import { HeaderEstatistic } from "@components/HeaderEstatistics";
import { BoxFull, BoxMid, BoxMidContainer, Container, Content, EstatisticStyleProps, SubTitleBox, Title, TitleBox } from "./styles";

type Props = {
    type: EstatisticStyleProps;
}

export function Estatistics({ type = 'IN' }: Props) {
    return (
        <Container
            type={type}
        >
            <HeaderEstatistic />
            <Content>
                <Title>
                    Estatísticas gerais
                </Title>
                <BoxFull>
                    <TitleBox>4</TitleBox>
                    <SubTitleBox>melhor sequência de pratos dentro da dieta</SubTitleBox>
                </BoxFull>
                <BoxFull>
                    <TitleBox>109</TitleBox>
                    <SubTitleBox>refeições registradas</SubTitleBox>
                </BoxFull>
                <BoxMidContainer>
                    <BoxMid
                        type="IN"
                    >
                        <TitleBox>32</TitleBox>
                        <SubTitleBox>refeições dentro da dieta</SubTitleBox>
                    </BoxMid>
                    <BoxMid
                        type="OUT"
                    >
                        <TitleBox>77</TitleBox>
                        <SubTitleBox>refeições fora da dieta</SubTitleBox>
                    </BoxMid>
                </BoxMidContainer>
            </Content>
        </Container>
    )
}