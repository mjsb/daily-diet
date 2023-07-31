import { useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";
import { HeaderMeals } from "@components/HeaderMeals";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Container, Content, MealBoxFields, MealLabel, MealInput, MealTextArea, MealBoxField, MealInputDateTime, MealButton, MealBullet, MealFooter, NewMealsStyleProps } from "./styles";
import { Button } from "@components/Button";
import theme from "@theme/index";
import { AppError } from "@utils/appError";
import { mealCreate } from "@storage/Meal/mealCreate";

type Props = {
    type: NewMealsStyleProps;
}

export function NewMeal({ type = 'PRIMARY'}: Props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState();
    const [show, setShow] = useState(false);
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [textDate, setTextDate] = useState('');
    const [textHora, setTextHora] = useState('');
    const [btnStatus, setBtnStatus] = useState('');


    const onChange = (event: any, selectedDate: any) => {
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
        setName(name);
    }

    function handleDescriptionChange(description: string) {
        setDescription(description);
    }
    
    async function handleNewMeal() {
        try {

            let msn = '';

            if(name.trim().length === 0) {
                msn = 'Informe um nome!\n';
            }

            if(textDate.trim().length === 0) {
                msn += 'Informe uma data!\n';
            }

            if(textHora.trim().length === 0) {
                msn += 'Informe um horário!\n';
            }

            if(btnStatus.trim().length === 0) {
                msn += 'Informe se a refeição está ou não dentro da dieta!';
            }

            if(msn.trim().length !== 0) {
                return Alert.alert('Atenção!', msn);
            }

            const formData = {
                id: new Date().getTime(),
                name: name,
                description: description,
                date: textDate,
                hour: textHora,
                status: btnStatus
            };

            await mealCreate(formData, textDate);         

            //Alert.alert('WOW!', JSON.stringify(textDate));
            //Alert.alert('WOW!', JSON.stringify(formData));
            
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
            type={type}
        >
            <HeaderMeals />
            <Content>
                <MealLabel>Nome</MealLabel>
                <MealInput 
                    onChangeText={handleNameChange}
                />
                <MealLabel>Descrição</MealLabel>
                <MealTextArea 
                    multiline={true}
                    onChangeText={handleDescriptionChange}
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
                        onChange={onChange}
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
                        title="Cadastrar refeição"
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