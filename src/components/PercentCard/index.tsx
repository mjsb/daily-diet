import { TouchableOpacityProps } from "react-native";
import { PercentCardStyleProps, Container, BoxIcon, Icon, SubTitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type: PercentCardStyleProps;
}

export function PercentCard({ title, type = 'PRIMARY' }: Props) {
    return (
        <Container type={type}>
            <BoxIcon>
                <Icon type={type} />
            </BoxIcon>
            <Title>
                {title}
            </Title>
            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </Container>
    );
}
