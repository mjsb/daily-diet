import { HeaderEstatistic } from "@components/HeaderEstatistics";
import { BoxFull, BoxMid, BoxMidContainer, Container, SubTitleBox, Title, TitleBox } from "./styles";

export function Estatistics() {
    return (
        <>
            <HeaderEstatistic />
            <Container>
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
            </Container>
        </>
    )
}