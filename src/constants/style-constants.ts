import React from 'react';
import  { ThemeProps } from '../components/ThemeWrapper';
import { RiBook3Line, RiArticleLine, RiCodeSLine } from "react-icons/ri";


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
}

export const ActivitiesText = ['Opptunity to make an impact','Opportunity to make an impact','Opportunity to make an '];

type ServiceConstantProps = {
    color: keyof CardColorProps
    heading: string
    paragraph: string
}[]

export const ServicesConstants: ServiceConstantProps = [
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

export const ProductivityCards = [
    {
        name: 'Books',
        icon: RiBook3Line,
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Articles',
        icon: RiArticleLine,
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        name: 'Softwares',
        icon: RiCodeSLine,
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
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

export interface CardColorProps {
    RED: CardProps
    GREEN: CardProps
    BROWN: CardProps
    BLUE: CardProps
    LINKEDINBLUE: {
        backgroundColor: string
        textColor: string
    }
}



export const CARDS: CardColorProps = {
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