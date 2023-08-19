import { useCallback, useState } from "react";
import { mealGetAll } from "@storage/Meal/mealGetAll";            
import { HeaderEstatistic } from "@components/HeaderEstatistics";
import { BoxFull, BoxMid, BoxMidContainer, Container, Content, EstatisticStyleProps, SubTitleBox, Title, TitleBox } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export function Estatistics() {

    const [percent, setPercent] = useState<any>(0);
	const [type, setType] = useState<any>();
    const [totalMealsIn, setTotalMealsIn] = useState<any>();
    const [totalMealsOut, setTotalMealsOut] = useState<any>();
    const [totalMeals, setTotalMeals] = useState<any>();
    const [bestSequence, setBestSequence] = useState<any>();

	const meals_in = [];
	const meals_out = [];
    const best_sequence: number[] = [];

	let res: string;
	let typ: string;
    let counter = 0;

    async function fetchMeals() {

		try {

			const foods = await mealGetAll();
            const total_foods = foods.length;

            foods.forEach(element => {

				if ( element.status === '1' ) {
					meals_in.push(element.status);
                    counter++;
				} else {
					meals_out.push(element.status);
                    if (counter > 0) best_sequence.push(counter);
                    counter = 0;
				}

			});

            best_sequence.sort();            

            const best_sequence_in = best_sequence[best_sequence.length-1];
            const total_foods_in = meals_in.length;
            const total_foods_out = meals_out.length;

			const percent_in = total_foods_in / total_foods * 100;

			if ( percent_in >= 60 ) {

				res = (total_foods_in / total_foods * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'IN';

			} else if ( percent_in < 60 ) {

				res = (total_foods_out / total_foods * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'OUT';

			}	
            
            setBestSequence(best_sequence_in);
            setTotalMealsOut(total_foods_out);
            setTotalMealsIn(total_foods_in);
            setTotalMeals(total_foods);
            setPercent(res);
			setType(typ);

            console.log(type);
            console.log(percent);
            console.log(totalMeals);
            console.log(best_sequence);

        } catch (error) {

            throw error;

        }
    }
    
    useFocusEffect(useCallback(() => {		
		fetchMeals();
	}, []));

    return (
        <Container
            type={type}
        >
            <HeaderEstatistic 
                type={type}
                title={percent}
                subtitle={type === 'IN' ? 'dentro' : 'fora'}
            />
            <Content>
                <Title>
                    Estatísticas gerais
                </Title>
                <BoxFull>
                    <TitleBox>{bestSequence}</TitleBox>
                    <SubTitleBox>melhor sequência de pratos dentro da dieta</SubTitleBox>
                </BoxFull>
                <BoxFull>
                    <TitleBox>{totalMeals}</TitleBox>
                    <SubTitleBox>refeições registradas</SubTitleBox>
                </BoxFull>
                <BoxMidContainer>
                    <BoxMid
                        type="IN"
                    >
                        <TitleBox>{totalMealsIn}</TitleBox>
                        <SubTitleBox>refeições dentro da dieta</SubTitleBox>
                    </BoxMid>
                    <BoxMid
                        type="OUT"
                    >
                        <TitleBox>{totalMealsOut}</TitleBox>
                        <SubTitleBox>refeições fora da dieta</SubTitleBox>
                    </BoxMid>
                </BoxMidContainer>
            </Content>
        </Container>
    )
}