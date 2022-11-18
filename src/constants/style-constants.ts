export const COLORS = {
    LIGHT: {
        background: 'hsl(0,0%,100%)',
        foreground: 'hsl(220, 15%, 16%)',
        accent: 'hsl(237,63%,71%)',
    },
    DARK: {
        foreground: 'hsl(0,0%,100%)',
        background: 'hsl(220, 15%, 16%)',
        accent: 'hsl(237,63%,71%)',

    }
};

export interface ContainerProps {
    display?: string,
    width?: string,
    height?: string,
    padding?: string,
    theme?: any,
}


