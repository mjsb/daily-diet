import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type BulletTypeStyleProps = 'IN' | 'OUT';

type Props = {
    type: BulletTypeStyleProps;
}

export const Container =  styled(TouchableOpacity)`
    width: 100%;
    height: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};

    padding: 10px;
    margin-bottom: 8px;
`;

export const Hora = styled.Text`
    max-width: 35px;
    min-width: 35px;

    ${({ theme }) => css ({
        color: theme.COLORS.GRAY_100,
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.BOLD
    })}
`;

export const Pipe = styled.View`
    width: 1px;
    height: 20px;

    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin: 0 10px;
`;

export const Meal = styled.Text`
    flex: 1;
    ${({ theme }) => css ({
        color: theme.COLORS.GRAY_200,
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR
    })}
`;

export const Bullet = styled(MaterialIcons) .attrs <Props>(({ theme, type }) => ({
    name: 'circle',
    size: 16,
    color: type === 'IN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID
}))``;