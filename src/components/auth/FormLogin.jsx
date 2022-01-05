import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import logoMoreto from "/public/images/logo.svg";

export default function FormLogin() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FBDB60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card
          sx={{
            width: { xs: "100vw", sm: "425px" },
            minHeight: { xs: "100vh", sm: "auto" },
            px: [3, 5],
            pt: [3, 6],
            pb: 5,
            m: [0, 5],
          }}
        >
          <Box
            sx={{
              height: 21,
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Image src={logoMoreto} width="139" />
          </Box>
          <Stack alignItems="center" sx={{ mb: 2 }}>
            <Typography component="h1" variant="h2">
              Fazer login
            </Typography>
            <Typography>Use a sua conta da moreto.co</Typography>
          </Stack>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField type="email" label="Email" required/>
            <TextField type="password" label="Senha" required sx={{mt:2}}/>
            <Button variant="link" disableRipple sx={{mt:1, mb:0.5}}>Esqueci minha senha</Button>
            <Typography variant="body2" color="text.light" sx={{pt:4, pb:3}}>
              Ainda não é cliente? Abra sua empresa com a gente e tenha acesso à
              sua contabilidade online 24 horas por dia.{" "}
              <Box component="a" href="#" target="_blank" sx={{fontWeight:700, color:"text.link" }}>
                Saiba mais
              </Box>
            </Typography>
            <Box sx={{alignSelf:"flex-end"}}>
              <Button variant="contained" size="medium" type="submit">Próximo</Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
