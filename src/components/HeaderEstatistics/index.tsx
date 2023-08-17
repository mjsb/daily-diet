import { Container, Title, SubTitle, BackButton, BackIcon, HeaderStyleProps, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
    type?: HeaderStyleProps;
    title: string;
    subtitle: string;
}

export function HeaderEstatistic({ type = 'IN', title, subtitle }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container
            type={type}
        >
            <BackButton
                onPress={handleGoBack}
            >
                <BackIcon 
                    type={type}
                />
            </BackButton>
            <Content>
                <Title>{title}%</Title>
                <SubTitle>das refeições {subtitle} da dieta</SubTitle>
            </Content>
        </Container>
    )
}
