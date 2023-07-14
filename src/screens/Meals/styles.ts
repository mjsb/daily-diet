import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 24px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN_DARK};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    text-transform: uppercase;
`;