import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type PercentCardStyleProps = 'IN' | 'OUT';

type Props = {
    type: PercentCardStyleProps;
}

export const Container = styled.View <Props>`

    width: 100%;
    height: auto;

    padding: 20px 8px 20px;
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    margin: 30px 0 0;

    background-color: ${({ theme, type }) => type === 'IN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    position: relative;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};    
    `}
    
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};    
    `}
`;

export const BoxIcon = styled.TouchableOpacity <Props>`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Icon = styled(MaterialIcons).attrs <Props> (({ theme, type }) => ({
    size: 25,
    name: 'call-made',
    color: type === 'IN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    text-align: right;
`;