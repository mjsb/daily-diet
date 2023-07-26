import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type HeaderMealsStyleProps = 'ADD' | 'EDIT' | 'IN' | 'OUT';

type Props = {
    type: HeaderMealsStyleProps;
}

export const Container = styled.View <Props>`
    width: 100%;
    height: 80px;

    padding: 29px 24px 24px;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 0px;

    background-color: ${({ theme, type }) => type === 'ADD' || type === 'EDIT' ? theme.COLORS.GRAY_500 : type === 'IN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};

    flex: 1;
    text-align: center;
    margin-left: -24px;
`;

export const BackButton = styled.TouchableOpacity`
    width: auto;
    z-index: 10;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => 
({
    name: 'arrow-back',
    color: theme.COLORS.GRAY_200,
    size: 24
}))``;
