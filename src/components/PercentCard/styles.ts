import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type PercentCardStyleProps = 'IN' | 'OUT';

type Props = {
    type: PercentCardStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`

    width: 100%;
    height: auto;

    padding: 8px 8px 20px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    margin: 30px 0;

    background-color: ${({ theme, type }) => type === 'IN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};    
    `}
    margin-top: -15px;
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};    
    `}
`;

export const BoxIcon = styled.View`
    width: 100%;
    height: 25px;
`;

export const Icon = styled(MaterialIcons).attrs <Props> (({ theme, type }) => ({
    size: 25,
    name: 'call-made',
    color: type === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    text-align: right;
`;