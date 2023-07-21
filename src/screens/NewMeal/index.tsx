import { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { HeaderMeals } from "@components/HeaderMeals";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Container, MealBoxFields, MealLabel, MealInput, MealTextArea, MealBoxField, MealInputDateTime, MealButton, MealBullet, MealFooter } from "./styles";
import { Button } from "@components/Button";
import theme from "@theme/index";

export function NewMeal() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState('');
    const [textHora, setTextHora] = useState('');

    const [btnStatus, setBtnStatus] = useState('');

    const onChange = (event: Event, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = ('0' + tempDate.getDate()).slice(-2) + '/' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '/' + tempDate.getFullYear();
        let fTime = ('0' + tempDate.getHours()).slice(-2) + ':' + ('0' + tempDate.getMinutes()).slice(-2);

        setTextDate(fDate);
        setTextHora(fTime);
    }

    const showMode = (currentMode: string) => {
        setShow(true);
        setMode(currentMode);
    }

    function buttonSelected(id: string) {
        setBtnStatus(id);
    }
    
    return (
        <>
            <HeaderMeals />
            <Container>
                <MealLabel>Nome</MealLabel>
                <MealInput />
                <MealLabel>Descrição</MealLabel>
                <MealTextArea 
                    multiline={true}
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
                            style={btnStatus === '1' ? [styles.borderPrimary, styles.backPrimary] : [styles.borderDefault, styles.backDefault]}                                                 
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
                            style={btnStatus === '2' ? [styles.borderSecondary, styles.backSecondary] : [styles.borderDefault, styles.backDefault]} 
                        >
                            <MealBullet 
                                color={theme.COLORS.RED_DARK}
                            />
                            <MealLabel>Não</MealLabel>
                        </MealButton>
                    </MealBoxField>
                </MealBoxFields>
            </Container>  
            <MealFooter>
                <Button 
                    title="Cadastrar refeição"
                />
            </MealFooter>      
        </>
    )
}

const styles = StyleSheet.create({
    borderPrimary: {
        borderColor: theme.COLORS.GREEN_DARK,
    },
    backPrimary: {
        backgroundColor: theme.COLORS.GREEN_LIGHT,
    },
    borderSecondary: {
        borderColor: theme.COLORS.RED_DARK,
    },
    backSecondary: {
        backgroundColor: theme.COLORS.RED_LIGHT,
    },
    borderDefault: {
        borderColor: theme.COLORS.GRAY_600,
    },
    backDefault: {
        backgroundColor: theme.COLORS.GRAY_600,
    }
  });