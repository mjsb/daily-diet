import styled, { css } from "styled-components/native";

export type EstatisticStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: EstatisticStyleProps;
}

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: start;

    margin-top: -20px;
    padding: 33px 24px;
    border-radius: 20px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};    
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    
    margin-bottom: 23px;
`;

export const BoxFull = styled.View`
    width: 100%;
    height: 89px;

    padding: 16px;

    align-items: center;
    justify-content: space-around;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    margin-bottom: 12px;
`;

export const BoxMidContainer = styled.View`
    width: 100%;
    height: auto;

    flex-direction: row;

    justify-content: space-between;

`;

export const BoxMid = styled.View <Props>`
    width: 48%;
    height: 107px;

    padding: 16px;

    align-items: center;
    justify-content: space-around;

    border-radius: 8px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TitleBox = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const SubTitleBox = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    text-align: center;
`;
