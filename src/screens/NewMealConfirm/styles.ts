import styled, { css } from "styled-components/native";

export type NewMealStyleProps = 'IN' | 'OUT';

type Props = {
    type: NewMealStyleProps;
}

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;

    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text <Props>`
    ${({ theme, type }) => css`
        color: ${type === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}

    margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    text-align: center;
    margin-bottom: 40px;
`;

export const Bold = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ImageConfirm = styled.Image`
    width: 224px;
    height: 288px;

    margin-bottom: 32px;
`;

export const BoxButton = styled.View`
    width: 191px;
`;