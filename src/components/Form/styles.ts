import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`

    width: 100%;
    height: auto;

    align-items: flex-start;
    justify-content: flex-start;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    padding: 24px;
    
`;

export const MealBoxFields = styled.View`

    width: 100%;
    height: auto;

    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 24px;

`;

export const MealBoxField = styled.View`

    width: 48%;
    height: auto;
    
    min-width: 153px;    
    align-items: flex-start;

`;

export const MealLabel = styled.Text`

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};   

    margin-bottom: 5px;

`;

export const MealInput = styled.TextInput`

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_500};
    `};

    width: 100%;
    height: 48px;

    padding: 14px;

    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 24px;

`;

export const MealTextArea = styled.TextInput`

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_500};
    `};

    width: 100%;
    height: 142px;

    padding: 14px;

    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 24px;
    
    vertical-align: top;

`;

export const MealInputDateTime = styled.TextInput`

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_500};
    `};

    width: 100%;

    padding: 14px;
    border-width: 1px;
    border-radius: 8px;

`;

export const MealButton = styled.TouchableOpacity`

    width: 100%;

    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_600};
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

`;

export const MealBullet = styled(MaterialIcons).attrs({

    name: 'circle',
    size: 12

})`

    margin-right: 5px;
    margin-top: -3px;

`;

export const MealFooter = styled.View`

    width: 100%;
    height: auto;

    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

`;

