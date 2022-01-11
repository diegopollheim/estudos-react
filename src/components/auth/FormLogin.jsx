import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import logoMoreto from "/public/images/logo.svg";

// ETAPA EMAIL
function EtapaEmail(props) {
  const { etapa, setEtapa } = props;
  console.log(etapa);

  //console.log(setEtapa(etapa + 1)); // ACESSANDO E ALTERANDO O VALOR DA ETAPA

  return (
    <>
      {/* TITULO */}
      <Box
        sx={{
          height: 21,
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}>
        <Image src={logoMoreto} width="139" />
      </Box>
      <Stack alignItems="center" sx={{ mb: 3 }}>
        <Typography component="h1" variant="h2">
          Fazer login
        </Typography>
        <Typography>Use a sua conta da moreto.co</Typography>
      </Stack>

      {/* FORMULÁRIO */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <TextField type="email" label="Email" required />
        <Button variant="link" disableRipple sx={{ mt: 1, mb: 0.5 }}>
          Esqueci meu email
        </Button>
        <Typography variant="body2" color="text.light" sx={{ pt: 4 }}>
          Ainda não é cliente? Abra sua empresa com a gente e tenha acesso à sua
          contabilidade online 24 horas por dia.{" "}
          <Box
            component="a"
            href="#"
            target="_blank"
            sx={{ fontWeight: 700, color: "text.link" }}>
            Saiba mais
          </Box>
          <Box sx={{ display: "flex", mt: 5, justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={() => {
                setEtapa(etapa + 1);
              }}>
              Próximo
            </Button>
          </Box>
        </Typography>
      </Box>
    </>
  );
}

//  ETAPA SENHA
function EtapaSenha(props) {
  const { etapa, setEtapa } = props;

  return (
    <>
      <>
        {/* TITULO */}
        <Box
          sx={{
            height: 21,
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}>
          <Image src={logoMoreto} width="139" />
        </Box>
        <Stack alignItems="center" sx={{ mb: 3 }}>
          <Typography component="h1" variant="h2">
            Usuário
          </Typography>
          <Typography>Para continuar insira sua senha</Typography>
        </Stack>

        {/* FORMULÁRIO */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <TextField type="password" label="Senha" required />
          <Box sx={{ display: "flex", mt: 5, justifyContent: "space-between" }}>
            <Button variant="link" disableRipple>
              Esqueceu sua senha?
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                setEtapa(etapa - 1);
              }}>
              Anterior
            </Button>
          </Box>
        </Box>
      </>
    </>
  );
}

// MOSTRA O COMPONENTE BASEADO NA ETAPA ATIVA
function getStepContent(etapa, setEtapa) {
  switch (etapa) {
    case 0:
      return <EtapaEmail etapa={etapa} setEtapa={setEtapa} />;
    case 1:
      return <EtapaSenha etapa={etapa} setEtapa={setEtapa} />;
  }
}

// CARD lOGIN
export default function FormLogin() {
  const [etapa, setEtapa] = useState(0);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FBDB60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <Card
          sx={{
            width: { xs: "100vw", sm: "425px" },
            minHeight: { xs: "100vh", sm: "520px" },
            pt: [3, 6],
            px: [3, 5],
            pb: 5,
            m: [0, 5],
          }}>
          {/* ETAPAS CARREGADAS DINAMICAMENTE */}
          {getStepContent(etapa, setEtapa)}
        </Card>
      </Box>
    </>
  );
}
