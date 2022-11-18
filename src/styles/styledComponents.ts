import { ContainerProps } from "../constants/style-constants";
import styled from "styled-components";

export const Container = styled.div<ContainerProps>`
    display: ${({display}) => display ? display : 'block'};
    width: ${({width}) => width || 'fit-content'};
    height: ${({height}) => height || 'fit-content'};
    padding: ${({padding}) => padding || '1rem'};
    background-color: ${({theme}) => theme.background || '#fff'};
    color: ${({theme}) => theme.foreground || 'inherit'};

`