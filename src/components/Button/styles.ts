import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'IN' | 'OUT';

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
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_200};

    align-items: center;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};

    margin-top: 8px;
`;

export const ButtonText = styled.Text<Props>`
    ${({ theme, type }) => css`
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};

    margin-left: 10px;
`;