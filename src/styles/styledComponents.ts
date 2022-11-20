import { ContainerProps,ButtonProps } from "../constants/style-constants";
import styled from "styled-components";

export const Container = styled.div<Partial<ContainerProps>>`
    display: ${({display}) => display ? display : 'block'};
    width: ${({width}) => width || 'fit-content'};
    height: ${({height}) => height || 'fit-content'};
    padding: ${({padding}) => padding || '1rem'};
    background-color: ${({theme}) => theme.background || '#fff'};
    color: ${({theme}) => theme.foreground || 'inherit'};

`

export const PrimaryButton = styled.button<ButtonProps>`
    padding: .6em .8em;
    width: 6rem;
    font-family: inherit;
    border-radius: .2em;
    background-color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    border: 2px solid ${({theme}) =>  theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    transition: all 250ms ease-in;
    
    &:hover {
        border: 2px solid ${({theme}) =>  theme.foreground};
        background-color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    }
`