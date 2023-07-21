import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;
    align-items: center;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};

`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};

    margin-left: 10px;
`;