import { CARDS, COLORS } from './../constants/style-constants';
import { motion } from 'framer-motion';
import { GridProps } from '../constants/style-constants';
import { ContainerProps,ButtonProps } from "../constants/style-constants";
import styled from "styled-components";
import { TagProps } from './../constants/style-constants';

export const Container = styled.div<Partial<ContainerProps>>`
    display: ${({display}) => display ? display : 'block'};
    width: ${({width}) => width || 'fit-content'};
    min-height: ${({height}) => height || 'fit-content'};
    padding: ${({padding}) => padding || '1rem'};
    background-color: ${({backgroundColor}) => backgroundColor || 'inherit'};
    color: ${({theme}) => theme.foreground || 'inherit'};
    position: relative;

`

export const PrimaryButton = styled(motion.button)<ButtonProps>`
    padding: ${({padding}) => padding || `.4em 1em`};
    width: fit-content;
    font-family: inherit;
    border-radius: .2em;
    background-color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    border: 2px solid ${({theme}) =>  theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    cursor: pointer;
    
    &:hover {
        border: 2px solid ${({theme}) =>  theme.foreground};
        background-color: ${({variant,theme}) => variant === 'primary' ? theme.background : theme.foreground};
    color: ${({variant,theme}) => variant === 'primary' ? theme.foreground : theme.background};
    }
`


export const GridContainer = styled(Container)<Partial<GridProps>>`
    display: grid;
    max-width: 1400px;
    margin-inline: auto;
    grid-template-columns: ${({columns}) => `repeat(${columns || 1 },1fr)`};
    grid-template-rows: ${({rows}) => `repeat(${rows || 1},1fr)`};
    gap: ${({gap}) => gap ? `${gap}rem` :  `1rem`};
    place-content: ${({center}) => center ? 'center': ''};
    
    @media(min-width: 50em) {
        grid-auto-flow: ${({evenColumns}) => evenColumns ? 'column' : ''};
        grid-auto-columns: ${({evenColumns}) => evenColumns ? '1fr' : ''};
    }

`

export const Mark = styled.mark`
    background: transparent;
    color: ${({theme}) => theme.accent};
`


/* Resources Styled Component */

export const Mainheading = styled.h2`
    font-size: 2.5em;
    padding-bottom: .6em;
    @media(min-width: 50em) {
        font-size: 3em;
    }
`

export const Subheading = styled.h3`
    font-size: 1.8em;
    padding-block: .8em;
    @media(min-width: 50em) {
        font-size: 2em;
    }
`

export const Lowheading = styled.h4`
    font-size: 1.2em;
    padding-block: .6em;
    @media(min-width: 50em) {
        font-size: 1.5em;
    }
`

export const Paragraph = styled.p `
    font-size: 1em;
    @media(min-width: 50em) {
        font-size: 1.2em;
    }   
`



export const LevelTag = styled.span<TagProps>`
    padding: .2em .6em;
    background-color: ${({level}) => level === 'Advanced' ? `${CARDS.BROWN.backgroundColor}` : `${CARDS.GREEN.backgroundColor}`};
    border-radius: .2em;
    color: ${({level}) => level === 'Advanced' ? `${CARDS.BROWN.textColor}` : `${CARDS.GREEN.textColor}`};
    width: fit-content;
`

type NoticeProps = {
    variant: 'Info' | 'Warning' | 'In Progress'
}

const NoticeBackgroundColors = {
    BLUE: {
        background: 'hsla(211, 100%, 85%,.3)',
    },
    RED: {
        background: 'hsla(0, 100%, 85%,.3)'
    },
    BROWN: {
        background: 'hsla(36, 100%, 85%,.3)'
    }

}

export const Notice = styled.section<NoticeProps>`
    width: 100%;
    height: fit-content;
    padding: 1em;
    margin-block: 1em;
    background-color: ${({variant}) => variant === 'Info' ? `${NoticeBackgroundColors.BLUE.background}` : `${NoticeBackgroundColors.RED.background}` };
    border-left:3px solid  ${({variant}) => variant === 'Info' ? `${CARDS.BLUE.textColor}`: `${CARDS.RED.textColor}`};

    h4 {
        color: ${({variant}) => variant ===  'Info' ? `${CARDS.BLUE.headingColor}`: `${CARDS.RED.headingColor}`};
    }
`

export const ListContainer = styled.div`
    width: 100%;
    margin-inline: auto;
    padding: 1em;
    border-radius: 1em;
    margin-block: 1em;
    height: fit-content;
    background-color: ${({theme}) => theme.secondary};
    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: circle; 
        list-style-position: inside;

        li {
            padding-block: .6em;
        }
    }
`

export const ContentInProgress = styled(Notice) `
    background-color: ${({variant}) => variant === 'In Progress' ? `${NoticeBackgroundColors.BROWN.background}` : ''};
    border-left: 3px solid ${CARDS.BROWN.textColor};
    h4 {
        color: ${CARDS.BROWN.textColor};
    }
`

