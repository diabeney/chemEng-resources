import { Paragraph } from './../styles/reusableComponents';
import React from 'react';
import  { ThemeProps } from '../components/ThemeWrapper';
import { RiBook3Line, RiArticleLine, RiCodeSLine } from "react-icons/ri";

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
    HERO_PARAGRAPH = ' An insight to the chemical engineering major - what a chemial engineer does and the correct path to becoming a successful chemical engineer.',
    HERO_MARK = 'the guide you need.',
    SERVICES_TAG = 'How to do it?',
}

export const ActivitiesText = ['Opptunity to make an impact','Exciting career prospects','Modern and relevant', 'Develop a wide range of skills'];

type ServiceConstantProps = {
    color: keyof CardColorProps
    heading: string
    paragraph: string
}[]

export const ServicesConstants: ServiceConstantProps = [
    {
        color: 'RED',
        heading: 'Read & Plan',
        paragraph: 'Read about chemical engineering and make a decision based on your interests.',
    },
    {
        color: 'GREEN',
        heading: 'Get motivation',
        paragraph: 'Be introduced to well known chemical engineers and stay motivated.',
    },
    {
        color: 'BLUE',
        heading: 'Boost Productivity',
        paragraph: 'Get access to all resources and guide you need to improve.',
    },
   
]

export const ProductivityCards = [
    {
        name: 'Books',
        icon: RiBook3Line,
        paragraph: 'Download popular books for every course you\'ll take.'
    },
    {
        name: 'Articles',
        icon: RiArticleLine,
        paragraph: 'Get updated on latest happenings in the industries and academia.'
    },
    {
        name: 'Softwares',
        icon: RiCodeSLine,
        paragraph: 'Get introduced to softwares used by chemical engineers.'
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
        secondary500: 'rgb(203,204,207)',
        accent: 'hsl(237,63%,71%)',
        accent900: 'hsl(237,63%,61%)',
        mode: 'light',
    },
    dark: {
        foreground: '#FEFEFE',
        background: 'hsl(237,23%,10%)',
        secondary: 'hsl(220, 15%, 16%)',
        secondary500: 'hsl(220,15%,36%)',
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
            textColor: 'hsl(36, 100%, 45%)'
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

export const YEARS = ["First", "Second", "Third", "Fourth"];

export type YearCourseProps = {
    course: string,
    done: boolean
}[]

export type CoursesProps = {
  First: YearCourseProps;
  Second: YearCourseProps;
  Third: YearCourseProps;
  Fourth: YearCourseProps;
};
const setCourseData = (course: string) => ({ course, done: false });

export const FIRST_YEAR_COURSES = ["Algebra", "Applied Electricity", "Inorganic Chemistry for Engineers", 'Technical Drawing', 'Practical Chemistry', 'Organic Chemistry for Engineers', 'Communication Skills I & II',"General Physics", 'Calculus with Analysis', 'Basic Mechanics', 'Physical Chemistry for Engineers', 'Basic Electronics', 'Introduction to Information Technology'];
export const SECOND_YEAR_COURSES = ['Chemical Process Calculations I & II', 'Chemical Engineering Thermodynamics I & II', 'Fluid Transport' , 'Analytical Chemistry for Chemical Engineers', 'Chemical Process Industries', 'Computer Application for Engineers', 'Differential Equations', 'Engineering In Society','Heat Transfer Process', 'Calculus of Several Variables', 'Drawing for Engineers', 'Strength for Materials', 'Practical Chemistry II'];
export const THIRD_YEAR_COURSES = ["Still", "In", "Progress"];
export const FOURTH_YEAR_COURESES = ["Still", "In", "Progress"];

export const COURSES: CoursesProps = {
  First: FIRST_YEAR_COURSES.map(course => setCourseData(course)),
  Second: SECOND_YEAR_COURSES.map(course => setCourseData(course)),
  Third: THIRD_YEAR_COURSES.map(course => setCourseData(course)),
  Fourth: FOURTH_YEAR_COURESES.map(course => setCourseData(course)),
};




export type TagProps = {
    level: 'General' | 'Specific'
}


