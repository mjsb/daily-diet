import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};    
    `};
    margin-bottom: 10px;
`;

export const DateList = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-top: 32px;
    margin-bottom: 8px;
`;