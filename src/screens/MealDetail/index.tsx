import { HeaderMeals } from "@components/HeaderMeals";
import { Container, Title, SubTitle, BulletDetail, StatusDetail, FooterDetail, MealDetailStyleProps, Texto, TextoStatusDetail } from "./styles";
import { Button } from "@components/Button";
import { ButtonText } from "@components/Button/styles";
import theme from "@theme/index";
import { Alert, StyleSheet } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { useState } from "react";

type Props = {
    type?: MealDetailStyleProps;
    meal?: string;
    desc?: string;
    data?: string;
    hora?: string;
    title?: string;
}

export function MealDetail({type = 'IN', meal = 'Sanduíche', desc = 'Sanduíche de pão integral com atum e salada de alface e tomate', data = '21/07/2023', hora = '23:34', title = 'Refeição'}: Props) {

    const [showAlert, setShowAlert] = useState(false);

    function handleDeleteMeal() {
        setShowAlert(true);
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
            <AwesomeAlert 
                show={showAlert}
                showProgress={false}
                title="Deseja realmente excluir o registro da refeição?"                
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Cancelar"
                confirmText="Sim, excluir"
                onCancelPressed={() => setShowAlert(false)}
                onConfirmPressed={() => setShowAlert(false)}
                contentContainerStyle={styles.container}
                titleStyle={styles.title}
                cancelButtonStyle={styles.cancel}
                cancelButtonTextStyle={styles.cancelText}
                confirmButtonStyle={styles.confirm}
                confirmButtonTextStyle={styles.confirmText}
            />
        </>
    )
}

const styles = StyleSheet.create({
    confirm: {
        width: 135,
        height: 50,
        backgroundColor: theme.COLORS.GRAY_200,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    cancel: {
        width: 135,
        height: 50,
        backgroundColor: theme.COLORS.GRAY_700,
        borderWidth: 1,
        borderColor: theme.COLORS.GRAY_100, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginLeft: 20    
    },
    confirmText: {
      color: theme.COLORS.WHITE,
      fontSize: theme.FONT_SIZE.MD,
      fontFamily: theme.FONT_FAMILY.BOLD,
    },
    cancelText: {
      color: theme.COLORS.GRAY_100,
      fontSize: theme.FONT_SIZE.MD,
      fontFamily: theme.FONT_FAMILY.BOLD,
    },
    title: {
      color: theme.COLORS.GRAY_200,
      fontSize: theme.FONT_SIZE.XL,
      fontFamily: theme.FONT_FAMILY.BOLD,
      textAlign: 'center'
    },
    container: {
        backgroundColor: theme.COLORS.GRAY_700
        // alignItems: 'center'
    }
});