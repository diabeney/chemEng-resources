
export const COLORS = {
    LIGHT: {
        background: 'hsl(0,0%,100%)',
        foreground: 'hsl(220, 15%, 16%)',
        accent: 'hsl(237,63%,71%)',
        accent900: 'hsl(237,63%,61%)',
        mode: 'light',
    },
    DARK: {
        foreground: 'hsl(0,0%,100%)',
        background: 'hsl(220, 15%, 16%)',
        accent: 'hsl(237,63%,71%)',
        accent900: 'hsl(237,63%,61%)',
        mode: 'dark'

    }
};

export interface ContainerProps {
   display: string,
    width: string,
    height: string,
    padding: string,
    theme: any,
}

export interface ButtonProps {
    variant: string;
}

