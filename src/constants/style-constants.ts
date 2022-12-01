import React from 'react';
import ThemeWrapper, { ThemeProps } from '../components/ThemeWrapper';

// <------- STYLES ------------>

export const NavStyles = {
        CloseStyles: {
            marginLeft: "auto",
            position: "absolute",
            right: "4%",
            top: "3%",
        } as React.CSSProperties,
}

export const SearchStyles = {
    marginLeft: 'auto',
    fontFamily: 'Raleway'
}


// <-------- STATIC TEXTS --------->

export const enum HomeTexts {
    HERO_TITLE = 'Planning on starting a major in chemical engineering?',
    HERO_PARAGRAPH = ' An insight to the chemical engineering major -Lorem ipsum dataum lie fiver in now  hagg hto jhaiejkkflsum',
    HERO_MARK = 'the guide you need.',
    SERVICES_TAG = 'How to do it?',
    CARD_ONE_HEADING = 'Read & Plan',
    CARD_ONE_PARAGRAPTH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    CARD_TWO_HEADING = 'Get motivation',
    CARD_TWO_PARAGRAPTH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    CARD_THREE_HEADING = 'Boost Productivity',
    CARD_THREE_PARAGRAPTH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    CARD_FOUR_HEADING = 'Excel',
    CARD_FOUR_PARAGRAPTH = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
}

export const ActivitiesText = ['Opptunity to make an impact','Opportunity to make an impact','Opportunity to make an '];
export const ServicesConstants = [
    {
        color: 'RED',
        heading: 'Read & Plan',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    },
    {
        color: 'GREEN',
        heading: 'Get motivation',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    },
    {
        color: 'BROWN',
        heading: 'Boost Productivity',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    },
    {
        color: 'BLUE',
        heading: 'Excel',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus',
    },
]

    // <------- COLORS ----------->

export interface ColorProps {
    light: ThemeProps,
    dark: ThemeProps,
}

export const  COLORS: ColorProps = {
    light: {
        background: '#FEFEFE',
        foreground: 'hsl(220, 15%, 26%)',
        secondary: 'rgb(243,244,247)',
        accent: 'hsl(237,63%,71%)',
        accent900: 'hsl(237,63%,61%)',
        mode: 'light',
    },
    dark: {
        foreground: '#FEFEFE',
        background: 'hsl(237,23%,10%)',
        secondary: 'hsl(220, 15%, 16%)',
        accent: 'hsl(237,63%,71%)',
        accent900: 'hsl(237,63%,61%)',
        mode: 'dark'

    }
};

export const CARDS = {
        RED: {
            backgroundColor: 'hsl(0, 100%, 95%)',
            headingColor: 'hsl(0, 100%, 70%)',
            textColor: 'hsl(0, 100%, 80%)'
        },
        GREEN: {
            backgroundColor: 'hsl(166, 100%, 95%)',
            headingColor: 'hsl(166, 100%, 20%)',
            textColor: 'hsl(166, 100%, 30%)',
        },
        BROWN: {
            backgroundColor: 'hsl(36, 100%, 95%)',
            headingColor: 'hsl(36, 100%, 25%)',
            textColor: 'hsl(36, 100%, 35%)'
        },
        BLUE: {
            backgroundColor: 'hsl(211, 100%, 95%)',
            headingColor: 'hsl(211, 100%, 65%)',
            textColor: 'hsl(211, 100%, 75%)'
        },
        LINKEDINBLUE: {
            backgroundColor: 'hsl(211,100%,90%)',
            textColor :'hsl(211,100%,36%)'
        }
}




// <------------- TYPES ----------->


export interface ContainerProps {
    display: string,
    width: string,
    height: string,
    padding: string,
    backgroundImage: any,
    backgroundColor: string
}

export interface ButtonProps {
    variant: string;
    padding?: string;
}

export interface GridProps extends ContainerProps  {
    gap: string;
    rows: number;
    columns: number;
    evenColumns: boolean;
    center: boolean;
}

export interface CardProps  {
  backgroundColor: string;
  headingColor: string;
  textColor: string;
};