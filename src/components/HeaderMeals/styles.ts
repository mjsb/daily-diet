import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    width: 100%;
    height: 132px;

    padding: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: -20px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
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
