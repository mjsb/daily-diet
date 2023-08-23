import { useCallback, useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";

import { Button } from "@components/Button";
import { HeaderMeals } from "@components/HeaderMeals";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Container, Content, MealBoxFields, MealLabel, MealInput, MealTextArea, MealBoxField, MealInputDateTime, MealButton, MealBullet, MealFooter, NewMealsStyleProps } from "./styles";

import theme from "@theme/index";
import { AppError } from "@utils/appError";
import { mealCreate } from "@storage/Meal/mealCreate";

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import uuid from 'react-native-uuid';
import { mealGetAll } from "@storage/Meal/mealGetAll";
import { MealStorageDTO } from "@storage/Meal/MealStorageDTO";
import { HeaderMealsTitleProps } from "@components/HeaderMeals/styles";
import { mealUpdate } from "@storage/Meal/mealUpdate";

type RouteParams = {
    meal: string;
}

export function CreateUpdateMeal() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState();
    const [show, setShow] = useState(false);
    
    const [textID, setTextID] = useState<any>('');
    const [textName, setTextName] = useState('');
    const [textDesc, setTextDesc] = useState('');
    const [textDate, setTextDate] = useState('');
    const [textHora, setTextHora] = useState('');
    const [btnStatus, setBtnStatus] = useState('');

    //const [typeFood, setTypeFood] = useState<NewMealsStyleProps>('PRIMARY');

    const navigation = useNavigation();
    const route = useRoute();

    const { meal } = route.params as RouteParams;

    let msn = '';
    let viewTitle: HeaderMealsTitleProps;
    let formData: MealStorageDTO;

    if ( meal !== '0' ) {

        viewTitle = 'EDIT';
        
        useFocusEffect(useCallback(() => {		
            fetchMeal();
        }, []));

    } else {

        viewTitle = 'ADD';

    }

    const onChangeDatePicker = (event: any, selectedDate: any) => {

        const currentDate = selectedDate || date;

        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = ('0' + tempDate.getDate()).slice(-2) + '/' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '/' + tempDate.getFullYear();
        let fTime = ('0' + tempDate.getHours()).slice(-2) + ':' + ('0' + tempDate.getMinutes()).slice(-2);

        setTextDate(fDate);
        setTextHora(fTime);

    }

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    }
    
    function buttonSelected(id: string) {
        setBtnStatus(id);
    }

    function handleNameChange(name: string) {
        setTextName(name);
    }

    function handleDescriptionChange(description: string) {
        setTextDesc(description);
    }

    async function fetchMeal() {
        
        try {

            const stored = await mealGetAll();
            const food = stored.filter(item => item.id === meal);
            
            setTextID(food[0].id);
            setTextName(food[0].name);
            setTextDesc(food[0].description);
            setTextDate(food[0].date);
            setTextHora(food[0].hour);                

            food[0].status === '1' ? buttonSelected('1') : buttonSelected('2');
            
        } catch (error) {

            throw error;
            
        }
    }
    
    async function handleNewMeal() {

        try {

            if (textName.trim().length === 0) {
                msn = 'Informe um nome!\n';
            }

            if (textDesc.trim().length === 0) {
                msn += 'Informe uma descrição!\n';
            }

            if (textDate.trim().length === 0) {
                msn += 'Informe uma data!\n';
            }

            if (textHora.trim().length === 0) {
                msn += 'Informe um horário!\n';
            }

            if (btnStatus.trim().length === 0) {
                msn += 'Dentro ou fora da dieta?';
            }

            if (msn.trim().length !== 0) {
                return Alert.alert('Atenção!', msn);
            }

            const splitDate = textDate.split('/');
            const splitHour = textHora.split(':'); 

            const formData = {                
                id: textID,
                name: textName,
                description: textDesc,
                date: textDate,
                hour: textHora,
                status: btnStatus,              
                sort_date: new Date(splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0]).getTime().toString(),
                sort_hour: new Date(Number(splitDate[2]), Number(splitDate[1]), Number(splitDate[0]), Number(splitHour[0]), Number(splitHour[1])).getTime().toString(),
            };

            if ( meal !== '0' ) {

                await mealUpdate(formData);
                navigation.navigate('detail', { meal });

            } else {

                setTextID(uuid.v4());
                console.log(textID);
                await mealCreate(formData); 
                navigation.navigate('confirm', {status: btnStatus === '1' ? 'IN' : 'OUT'});        

            }
            
        } catch (error) {

            if(error instanceof AppError) {
                Alert.alert('Nova refeição', error.message);
            } else {
                Alert.alert('Nova refeição', 'Não foi possível cadastrar essa refeição!');
                console.log(error);
            }
            
        }
        
    }
    
    return (
        <Container
            type="PRIMARY"
        >
            <HeaderMeals
                mode={viewTitle}
            />
            <Content>
                <MealLabel>Nome</MealLabel>
                <MealInput 
                    onChangeText={handleNameChange}
                    value={textName}
                />
                <MealLabel>Descrição</MealLabel>
                <MealTextArea 
                    multiline={true}
                    onChangeText={handleDescriptionChange}
                    value={textDesc}
                />
                <MealBoxFields>
                    <MealBoxField>
                        <MealLabel>Data</MealLabel>
                        <MealInputDateTime 
                            value={textDate}
                            onPressIn={() => showMode('date')}
                            showSoftInputOnFocus={false}
                        />
                    </MealBoxField>
                    <MealBoxField>
                        <MealLabel>Hora</MealLabel>
                        <MealInputDateTime 
                            value={textHora}
                            onPressIn={() => showMode('time')}
                            showSoftInputOnFocus={false}
                        />
                    </MealBoxField>
                </MealBoxFields>

                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChangeDatePicker}
                    />                
                )}

                <MealLabel>Está dentro da dieta?</MealLabel>
                <MealBoxFields>
                    <MealBoxField>
                        <MealButton
                            testID="yes"
                            onPress={() => buttonSelected('1')}
                            style={btnStatus === '1' ? [styles.borderIN, styles.backIN] : [styles.borderDefault, styles.backDefault]}                                                 
                        >
                            <MealBullet 
                                color={theme.COLORS.GREEN_DARK}
                            />
                            <MealLabel>Sim</MealLabel>
                        </MealButton>
                    </MealBoxField>
                    <MealBoxField>
                        <MealButton
                            testID="no"
                            onPress={() => buttonSelected('2')}
                            style={btnStatus === '2' ? [styles.borderOUT, styles.backOUT] : [styles.borderDefault, styles.backDefault]} 
                        >
                            <MealBullet 
                                color={theme.COLORS.RED_DARK}
                            />
                            <MealLabel>Não</MealLabel>
                        </MealButton>
                    </MealBoxField>
                </MealBoxFields>
                <MealFooter>
                    <Button 
                        title={ viewTitle === 'ADD' ? 'Cadastrar refeição' : 'Salvar alterações' }
                        onPress={handleNewMeal}
                    />
                </MealFooter>      
            </Content>  
        </Container>
    )
}

const styles = StyleSheet.create({
    borderIN: {
        borderColor: theme.COLORS.GREEN_DARK,
    },
    backIN: {
        backgroundColor: theme.COLORS.GREEN_LIGHT,
    },
    borderOUT: {
        borderColor: theme.COLORS.RED_DARK,
    },
    backOUT: {
        backgroundColor: theme.COLORS.RED_LIGHT,
    },
    borderDefault: {
        borderColor: theme.COLORS.GRAY_600,
    },
    backDefault: {
        backgroundColor: theme.COLORS.GRAY_600,
    }
});