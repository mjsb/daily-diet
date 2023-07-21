import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type HeaderStyleProps  = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: HeaderStyleProps;
}

export const Container = styled.View <Props>`
    width: 100%;
    height: 200px;   
    
    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

`;

export const Content = styled.View`
    width: 100%;
    height: auto;

    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};    
    `};
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};    
    `};
`;

export const BackIcon = styled(MaterialIcons).attrs <Props>(({ theme, type }) => ({
    name: 'arrow-back',
    size: 25,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;