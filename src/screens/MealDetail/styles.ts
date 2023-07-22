import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type MealDetailStyleProps = 'PRIMARY' | 'IN' | 'OUT';

type Props = {
    type: MealDetailStyleProps;
}

export const Container = styled.View`
    flex: 1;

    align-items: flex-start;
    justify-content: flex-start;

    padding: 40px 24px 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
        
    font-size: 20px;
    margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
        
    margin-bottom: 12px;
`;

export const Texto = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
        
    margin-bottom: 24px;
`;

export const StatusDetail = styled.View`
    width: 144px;
    height: 34px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    border-radius: 1000px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 24px;
`;

export const TextoStatusDetail = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const FooterDetail = styled.View`
    width: 100%;
    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const BulletDetail = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    name: 'circle',
    size: 12
}))` 
    margin-right: 8px;
`;