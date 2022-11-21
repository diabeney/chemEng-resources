import { GridProps } from './../constants/style-constants';
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
    padding: ${({padding}) => padding || `.4em 1em`};
    width: fit-content;
    font-family: inherit;
    border-radius: .2em;
    background-color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    border: 2px solid ${({theme}) =>  theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    transition: all 250ms ease-in;
    cursor: pointer;
    
    &:hover {
        border: 2px solid ${({theme}) =>  theme.foreground};
        background-color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    }
`


export const GridContainer = styled(Container)<Partial<GridProps>>`
    display: grid;
    grid-template-columns: ${({columns}) => `repeat(${columns || 1 },1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows || 1},1fr)`};
    gap: ${({gap}) => `${gap}rem` || `1rem`};
    
    @media(min-width: 50em) {
        grid-auto-flow: ${({evenColumns}) => evenColumns ? 'column' : ''};
        grid-auto-columns: ${({evenColumns}) => evenColumns ? '1fr' : ''};
    }

`

export const HeroContainer = styled(GridContainer)`
        position: absolute;
        padding: 0;
        top: 0;
        left: 0;
        padding-top: 5%;
        & h1 {
            font-size: 2em;
            padding-block: .5em;
        }

        & p {
            padding-block: 1em;
        }

        @media (min-width: 40em) {
            & h1 {
            font-size: 2em;
            padding-block: .5em;
        }
        }
        
        @media(min-width: 50em) {
            position : relative;

            & h1 {
                padding: 0;
                text-align: left;
                font-size: 3em;
            }
    
            & p {
                padding-block: 2em;
                text-align: left;
            }
        }
`

export const Mark = styled.mark`
    background: transparent;
    color: ${({theme}) => theme.accent}
`