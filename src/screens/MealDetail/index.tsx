import { HeaderMeals } from "@components/HeaderMeals";
import { Container, Title, SubTitle, BulletDetail, StatusDetail, FooterDetail, MealDetailStyleProps, Texto, TextoStatusDetail } from "./styles";
import { Button } from "@components/Button";
import { ButtonText } from "@components/Button/styles";
import theme from "@theme/index";
import { Alert } from "react-native";

type Props = {
    type?: MealDetailStyleProps;
    meal?: string;
    desc?: string;
    data?: string;
    hora?: string;
    title?: string;
}

export function MealDetail({type = 'IN', meal = 'Sanduíche', desc = 'Sanduíche de pão integral com atum e salada de alface e tomate', data = '21/07/2023', hora = '23:34', title = 'Refeição'}: Props) {

    function handleDeleteMeal() {
        Alert.alert(
            'Remover turma',
            'Deseja realmente excluir o registro da refeição?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim, excluir', onPress: () => groupRemove() }
            ]
        );
    }

    function groupRemove() {
        Alert.alert('Atenção!','OK');
    }

    return (
        <>
            <HeaderMeals 
                type={type}
                title={title}
            />
            <Container>
                <Title>{meal}</Title>
                <Texto>{desc}</Texto>
                <SubTitle>Data e hora</SubTitle>
                <Texto>{data} às {hora}</Texto>
                <StatusDetail>
                    <BulletDetail
                        color={type === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
                    />
                    <TextoStatusDetail>
                        {type === 'IN' ? 'dentro da dieta' : 'fora da dieta'}
                    </TextoStatusDetail>
                </StatusDetail>
            </Container>
            <FooterDetail>
                <Button
                    type="IN"                   
                    title="Editar refeição"
                    onPress={() => handleDeleteMeal()}
                >
                    <ButtonText
                        type="IN"
                    >
                        Editar refeição
                    </ButtonText>
                </Button>
                <Button
                    type="OUT"
                    title="Excluir refeição"
                    onPress={() => handleDeleteMeal()}
                >
                    <ButtonText
                        type="OUT"
                    >
                        Excluir refeição
                    </ButtonText>
                </Button>
            </FooterDetail>
        </>
    )
}