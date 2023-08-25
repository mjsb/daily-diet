import { useCallback, useState } from "react";
import { mealGetAll } from "@storage/Meal/mealGetAll";            
import { HeaderEstatistic } from "@components/HeaderEstatistics";
import { BoxFull, BoxMid, BoxMidContainer, Container, Content, SubTitleBox, Title, TitleBox } from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export function Estatistics() {

    const [percent, setPercent] = useState<any>(0);
	const [type, setType] = useState<any>();
    const [totalIn, setTotalIn] = useState<any>();
    const [totalOut, setTotalOut] = useState<any>();
    const [totalMeals, setTotalMeals] = useState<any>();
    const [sequence, setSequence] = useState<any>();

	const meals_in: string[] = [];
	const meals_out: string[] = [];
    const arr_sequence: number[] = [];

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
                    counter = 0;
                    
				}

			});

            arr_sequence.push(counter);
            arr_sequence.sort();            

            const sequence_in = arr_sequence[arr_sequence.length-1];
            const total_in = meals_in.length;
            const total_out = meals_out.length;

			const percent_in = total_in / total_foods * 100;

			if ( percent_in >= 60 ) {

				res = (total_in / total_foods * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'IN';

			} else if ( percent_in < 60 ) {

				res = (total_out / total_foods * 100).toLocaleString('PT', {maximumFractionDigits: 2 });
				typ = 'OUT';

			}	
            
            setSequence(sequence_in);
            setTotalOut(total_out);
            setTotalIn(total_in);
            setTotalMeals(total_foods);
            setPercent(res);
			setType(typ);

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
                    <TitleBox>{sequence}</TitleBox>
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
                        <TitleBox>{totalIn}</TitleBox>
                        <SubTitleBox>refeições dentro da dieta</SubTitleBox>
                    </BoxMid>
                    <BoxMid
                        type="OUT"
                    >
                        <TitleBox>{totalOut}</TitleBox>
                        <SubTitleBox>refeições fora da dieta</SubTitleBox>
                    </BoxMid>
                </BoxMidContainer>
            </Content>
        </Container>

    )

}