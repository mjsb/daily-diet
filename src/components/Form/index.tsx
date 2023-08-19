import { Container, Content, MealBoxFields, MealLabel, MealInput, MealTextArea, MealBoxField, MealInputDateTime, MealButton, MealBullet, MealFooter } from "./styles";
import { Button } from "@components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
    onChangeText: () => void;
}

export function mealForm() {

    return (
        <Container>
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
                    title="Cadastrar refeição"
                    onPress={handleNewMeal}
                />
            </MealFooter>      
        </Container>  
    )
}