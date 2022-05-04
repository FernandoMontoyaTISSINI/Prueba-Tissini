import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        blue: {
            dark: string;
            main: string;
            light: string;
        };
        neutrals: {
            disabled: string;
            white: string;
            alternative: string;
            session: string;
            outline: string;
        };
    }
    interface PaletteOptions {
        blue: {
            dark: string;
            main: string;
            light: string;
        };
        neutrals: {
            disabled: string;
            white: string;
            alternative: string;
            session: string;
            outline: string;
        };
    }
    interface TypographyVariants {
        bodyBig: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        bodyBig?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bodyBig: true;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsSizeOverrides {
        giant: true;
    }
}

const theme = createTheme({
    spacing: 6,
    palette: {
        background: {
            default: '#FAFBFD',
        },
        primary: {
            dark: '#7D184F',
            main: '#C93B89',
            light: '#FFD9ED',
        },
        secondary: {
            dark: '#807632',
            main: '#C9BA4F',
            light: '#FFF9CC',
        },
        info: {
            dark: '#0D3C61',
            main: '#2196F3',
            light: '#E9F4FE',
        },
        warning: {
            dark: '#5F2B01',
            main: '#ED6C02',
            light: '#FDF0E6',
        },
        success: {
            dark: '#1E4620',
            main: '#4CAF50',
            light: '#EDF7ED',
        },
        error: {
            dark: '#D21B16',
            main: '#F44336',
            light: '#FEECEB',
        },
        text: {
            primary: '#333333',
            secondary: '#757575',
        },
        blue: {
            dark: '#1E747D',
            main: '#26BAC9',
            light: '#C93B89',
        },
        neutrals: {
            disabled: '#D6D6D6',
            white: '#FFFFFF',
            alternative: '#FAFBFD',
            session: '#F6F7FC',
            outline: '#E2E8EE',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        h1: {
            fontFamily: 'Roboto',
            fontSize: '2.25rem',
            fontWeight: 700,
            lineHeight: '42px',
            letterSpacing: '-0.5px',
        },
        h2: {
            fontFamily: 'Roboto',
            fontSize: '1.6rem',
            fontWeight: 500,
            lineHeight: '32px',
            letterSpacing: '-0.5px',
        },
        h3: {
            fontFamily: 'Roboto',
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: '26px',
            letterSpacing: '-0.25px',
        },
        button: {
            fontFamily: 'Roboto',
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: '26px',
            letterSpacing: '-0.25px',
            textTransform: 'none',
        },
        bodyBig: {
            fontFamily: 'Roboto',
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: '30px',
            letterSpacing: '0.15px',
        },
        body1: {
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '25px',
            letterSpacing: '0',
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0',
        },
        subtitle2: {
            fontFamily: 'Roboto',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '22px',
            letterSpacing: '0.1px',
        },
        caption: {
            fontFamily: 'Roboto',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0',
        },
        overline: {
            fontFamily: 'Roboto',
            fontSize: '0.625rem',
            fontWeight: 500,
            lineHeight: '16px',
            letterSpacing: '1.5px',
        },
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'giant',
            },
            styleOverrides: {
                root: {
                    borderRadius: 999,
                },
            },
            variants: [
                {
                    props: { size: 'giant' },
                    style: ({ theme: _theme }) => ({
                        height: '56px',
                        ..._theme.typography.button,
                    }),
                },
            ],
        },
    },
});

export default theme;