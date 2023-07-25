import { Button } from "@components/Button";
import { Container, Title, SubTitle, ImageConfirm, BoxButton, NewMealStyleProps, Bold } from "./styles";

import confirmIN from "@assets/confirmIN.png";
import confirmOUT from "@assets/confirmOUT.png";
import { Text } from "react-native";

type Props = {
    type?: NewMealStyleProps;
}

export function NewMealConfirm({type = 'IN'}: Props) {
    return (
        <Container>
            <Title
                type={type}
            >
                {type === 'IN' 
                    ? 'Continue assim!' 
                    : 'Que pena!'
                }
            </Title>            
            <SubTitle>
                {type === 'IN' 
                    ? 
                        <>
                            <Text>Você continua </Text>
                            <Text><Bold>dentro da dieta</Bold></Text>
                            <Text>. Muito bem!</Text> 
                        </>
                    : 
                    <>
                        <Text>Você </Text>
                        <Text><Bold>saiu da dieta </Bold></Text>
                        <Text>dessa vez, mas continue se esforçando e não desista!</Text> 
                    </>
                }                
            </SubTitle>
            <ImageConfirm 
                source={type === 'IN' ? confirmIN : confirmOUT}
            />
            <BoxButton>
                <Button 
                    type="IN"
                    title="Ir para a página inicial"
                    onPress={() => {}}
                />
            </BoxButton>
        </Container>
    )
}