import { useCallback, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { HeaderMeals } from "@components/HeaderMeals";
import { ButtonText } from "@components/Button/styles";

import theme from "@theme/index";
import { Container, Content, Title, SubTitle, BulletDetail, StatusDetail, FooterDetail, MealDetailStyleProps, Texto, TextoStatusDetail } from "./styles";

import { mealGetAll } from "@storage/Meal/mealGetAll";
import { mealDelete } from "@storage/Meal/mealDelete";

type RouteParams = {
    meal: string;
}

export function MealDetail() {

    const [showAlert, setShowAlert] = useState(false);
    const [nameFood, setNameFood] = useState<string>();
    const [descFood, setDescFood] = useState<string>();
    const [dateFood, setDateFood] = useState<string>();
    const [hourFood, setHourFood] = useState<string>();
    const [type, setType] = useState<MealDetailStyleProps>('PRIMARY');

    const navigation = useNavigation();

    const route = useRoute();    
    const { meal } = route.params as RouteParams;
    
    async function fetchMeal() {
        
        try {
            
            const stored = await mealGetAll();
            const food = stored.filter(item => item.id === meal);
            
            const typeFood = food[0].status === '1' ? 'IN' : 'OUT';
            
            setType(typeFood);
            setNameFood(food[0].name);
            setDescFood(food[0].description);
            setDateFood(food[0].date);
            setHourFood(food[0].hour);            
            
        } catch (error) {
            
            throw error;

        }

    }

    function handleEditMeal() {
        navigation.navigate('edit', { meal: meal });
    }
    
    function handleDeleteMeal() {
        setShowAlert(true);
    }

    function groupRemove() {
        Alert.alert('Atenção!','OK');        
    }

    async function deleteMeal(meal: string | number[]) {

        try {
            
            await mealDelete(meal);
            navigation.navigate('meals');

        } catch (error) {

            throw error;
            
        }

    }

    useFocusEffect(useCallback(() => {		
		fetchMeal();
	}, []));

    return (
        <Container
            type={type}
        >
            <HeaderMeals 
                type={type}
                mode="VIEW"
            />
            <Content>
                <Title>{nameFood}</Title>
                <Texto>{descFood}</Texto>
                <SubTitle>Data e hora</SubTitle>
                <Texto>{dateFood} às {hourFood}</Texto>
                <StatusDetail>
                    <BulletDetail
                        color={type === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
                    />
                    <TextoStatusDetail>
                        {type === 'IN' ? 'dentro da dieta' : 'fora da dieta'}
                    </TextoStatusDetail>
                </StatusDetail>
            </Content>
            <FooterDetail>
                <Button
                    type="EDIT"                   
                    title="Editar refeição"
                    onPress={() => handleEditMeal()}
                >
                    <ButtonText
                        type="EDIT"
                    >
                        Editar refeição
                    </ButtonText>
                </Button>
                <Button
                    type="DEL"
                    title="Excluir refeição"
                    onPress={() => handleDeleteMeal()}
                >
                    <ButtonText
                        type="DEL"
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
                onConfirmPressed={() => deleteMeal(meal)}
                contentContainerStyle={styles.container}
                titleStyle={styles.title}
                cancelButtonStyle={styles.cancel}
                cancelButtonTextStyle={styles.cancelText}
                confirmButtonStyle={styles.confirm}
                confirmButtonTextStyle={styles.confirmText}
            />
        </Container>
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