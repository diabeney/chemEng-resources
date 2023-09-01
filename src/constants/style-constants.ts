import React from "react";
import { ThemeProps } from "../components/ThemeWrapper";
import { RiBook3Line, RiArticleLine, RiCodeSLine } from "react-icons/ri";

// <------------- TYPES ----------->

export interface ContainerProps {
  display: string;
  width: string;
  height: string;
  padding: string;
  backgroundImage: any;
  backgroundColor: string;
}

export interface ButtonProps {
  variant: string;
  padding?: string;
}

export interface GridProps extends ContainerProps {
  gap: string;
  rows: number;
  columns: number;
  evenColumns: boolean;
  center: boolean;
}

export interface CardProps {
  backgroundColor: string;
  headingColor: string;
  textColor: string;
}

// <------- STYLES ------------>

export const NavStyles = {
  CloseStyles: {
    marginLeft: "auto",
    position: "absolute",
    right: "4%",
    top: "3%",
  } as React.CSSProperties,
};

// <-------- STATIC TEXTS --------->

export const enum HomeTexts {
  HERO_TITLE = "Your Gateway to the Latest Research and Resources.",
  HERO_PARAGRAPH = "Our library is dedicated to providing access to a vast collection of resources related to the field of Chemical Engineering, including books, journals, research papers, and other publications.",
  HERO_MARK = "the guide you need.",
  SERVICES_TAG = "How to do it?",
}

export const ActivitiesText = [
  {
    title: "Transport Phenomena",
    url: "https://youtube.com/playlist?list=PLDea8VeK4MUTOXDUWy7RsNZTb5KUPjBVj&si=0up4Iqf0q9Z1VqWm",
  },
  {
    title: "Mass Transfer Processes",
    url: "https://youtube.com/playlist?list=PLwdnzlV3ogoVX_S_8DyKa7RudEazDL0o_&si=IOi_OMoKZ2X-yJM_",
  },
  {
    title: "Chemical Process Calculations",
    url: "https://youtube.com/playlist?list=PLD4476BAFA5A65111&si=GJiZzc542VzAP4hT",
  },
  {
    title: "Aspen Tutorials",
    url: "https://youtube.com/playlist?list=PL6BVDkN5_logxOSRdtTUc7IeEtNQBax6z&si=OpruJhMlapX6cxD7",
  },
];

type ServiceConstantProps = {
  color: keyof CardColorProps;
  heading: string;
  paragraph: string;
}[];

export const ServicesConstants: ServiceConstantProps = [
  {
    color: "RED",
    heading: "Read & Plan",
    paragraph:
      "Read about chemical engineering and make a decision based on your interests.",
  },
  {
    color: "GREEN",
    heading: "Get motivation",
    paragraph:
      "Be introduced to well known chemical engineers and stay motivated.",
  },
  {
    color: "BLUE",
    heading: "Boost Productivity",
    paragraph: "Get access to all resources and guide you need to improve.",
  },
];

export const ProductivityCards = [
  {
    name: "Books",
    icon: RiBook3Line,
    paragraph: "Download popular books for every course you'll take.",
  },
  {
    name: "Articles",
    icon: RiArticleLine,
    paragraph:
      "Get updated on latest happenings in the industries and academia.",
  },
  {
    name: "Softwares",
    icon: RiCodeSLine,
    paragraph: "Get introduced to softwares used by chemical engineers.",
  },
];

// <------- COLORS ----------->

export interface ColorProps {
  light: ThemeProps;
  dark: ThemeProps;
}

export const COLORS: ColorProps = {
  light: {
    background: "#FEFEFE",
    foreground: "hsl(220, 15%, 26%)",
    secondary: "rgb(243,244,247)",
    secondary500: "rgb(203,204,207)",
    accent: "hsl(237,63%,71%)",
    accent900: "hsl(237,63%,61%)",
    mode: "light",
  },
  dark: {
    foreground: "#FEFEFE",
    background: "hsl(212, 89%, 5%)",
    secondary: "hsl(220, 15%, 16%)",
    secondary500: "hsl(220,15%,36%)",
    accent: "hsl(237,63%,71%)",
    accent900: "hsl(237,63%,61%)",
    mode: "dark",
  },
};

export interface CardColorProps {
  RED: CardProps;
  GREEN: CardProps;
  BROWN: CardProps;
  BLUE: CardProps;
  LINKEDINBLUE: {
    backgroundColor: string;
    textColor: string;
  };
}

export const CARDS: CardColorProps = {
  RED: {
    backgroundColor: "hsl(0, 100%, 95%)",
    headingColor: "hsl(0, 100%, 70%)",
    textColor: "hsl(0, 100%, 80%)",
  },
  GREEN: {
    backgroundColor: "hsl(166, 100%, 95%)",
    headingColor: "hsl(166, 100%, 20%)",
    textColor: "hsl(166, 100%, 30%)",
  },
  BROWN: {
    backgroundColor: "hsl(36, 100%, 95%)",
    headingColor: "hsl(36, 100%, 25%)",
    textColor: "hsl(36, 100%, 45%)",
  },
  BLUE: {
    backgroundColor: "hsl(211, 100%, 95%)",
    headingColor: "hsl(211, 100%, 65%)",
    textColor: "hsl(211, 100%, 75%)",
  },
  LINKEDINBLUE: {
    backgroundColor: "hsl(211,100%,90%)",
    textColor: "hsl(211,100%,36%)",
  },
};

export type TagProps = {
  level: "General" | "Specific";
};

export const saveData = <T>(key: string, data: T) =>
  localStorage.setItem(key, JSON.stringify(data));
