import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Definir as FONTES padrões
  
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "1.75rem", // 28px
      fontWeight: 700,
      lineHeight: "2,25rem", // 36px
    },
    h2: {
      fontSize: "1.5rem", // 24px
      fontWeight: 700,
      lineHeight: "2rem", // 32px
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
      lineHeight: "1.625rem", // 26px
    },
    h4: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      lineHeight: "1.5rem", // 24px
    },
    h5: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      lineHeight: "1.3125rem", // 21px
    },
    body1: {
      fontSize: {xs:"0.875rem", sm:"1rem"}, // 16px
      fontWeight: 400,
      lineHeight: "1.5rem", // 24px
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: "1.25rem", // 20px
      letterSpacing: "0.01071em",
    },
  },
  // Definir as CORES padrões
  palette: {
    primary: {
      main: "#1A73E8", // Azul Moreto
    },
    secondary: {
      main: "#FBDB60", // Amarelo Moreto
    },
    white: {
      main: "#fff",
    },
    text: {
      primary: "#3E3F42", // dark
      secondary: "#6B6C6F", // medium
      light: "#5f6368", // light
      link: "#3367d6", // link azul
    },
    background: {
      default: "#EEEEEE",
      paper: "#fff",
    },
  },
  mixins: {
    toolbar: {
      minHeight: "64px",
      "@media (min-width: 600px) and (orientation: landscape)": {
        minHeight: "50px",
      },
    },
  },
  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: "menu" },
          style: {
            background: "none",
            color: "#fff",
            padding: "4px",
            "&:hover": {
              background: "rgb(255,255,255, 0.2)",
            },
          },

          props: { variant: "balloon" },
          style: {
            background: "none",
            color: "#636363",
            padding: "4px"
          },
        },
      ],
    },
    MuiFormLabel: {
      defaultProps: {
        required: false,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "110px",
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "subMenu" },
          style: {
            textTransform: "none",
            justifyContent: "flex-start",
            background: "none",
            color: "#3E3F42",
            height: "50px",
            padding: "6px 16px",
            fontSize: "1rem", // 18px
            fontWeight: 400,
            lineHeight: "1.5rem", // 24px
            letterSpacing: "0.00938em",
            borderRadius: "0",
            "&:hover": {
              background: "#F1F1F1",
            },
          },
        },

        {
          props: { variant: "link" },
          style: {
            background: "none",
            color: "#1a73e8",
            fontWeight: "700",
            minWidth: "auto",
            width: "fit-content",
            padding: "0",

            "&:hover": {
              background: "none",
            },
          },
        },
        {
          props: { variant: "menu" },
          style: {
            background: "none",
            color: "#fff",
            fontWeight: "500",
            fontSize: "1rem",
            minWidth: "auto",
            width: "fit-content",
            padding: "0",
            "&:hover": {
              background: "none",
            },
          },
        },
        {
          props: { variant: "btn-link" },
          style: {
            background: "none",
            color: "#1a73e8",
            fontWeight: "400",
            minWidth: "auto",
            width: "fit-content",
            padding: "0",

            "&:hover": {
              background: "none",
            },
          },
        },
      ],
    },
    
    MuiPaper: {
      variants: [
        {
          props: { variant: "transparent" },
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        //disableRipple: true,
      },
    },
  },
});

export default theme;
