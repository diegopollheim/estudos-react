import { Button, Slide, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export default function EtapaEmail(props) {
  const { etapa, setEtapa, setLoad } = props;
  const containerRef = React.useRef(null);

  // PRÓXIMA ETAPA
  function NextStep() {
    setLoad(() => setLoad((prev) => !prev));

    setTimeout(function () {
      setEtapa(etapa + 1);
      setLoad(false);
    }, 1500);
  }

  return (
    <>
      <Slide
        direction="right"
        in={etapa === 1}
        container={containerRef.current}
        sx={{
          position: "absolute",
          width: { xs: "calc(100% - 48px)", sm: "calc(100% - 80px)" },
        }}>
        <Box>
          {/* TITULO */}
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
              Ainda não é cliente? Abra sua empresa com a gente e tenha acesso à
              sua contabilidade online 24 horas por dia.{" "}
              <Box
                component="a"
                href="#"
                target="_blank"
                sx={{ fontWeight: 700, color: "text.link" }}>
                Saiba mais
              </Box>
              <Box sx={{ display: "flex", mt: 5, justifyContent: "end" }}>
                <Button variant="contained" onClick={NextStep}>
                  Próximo
                </Button>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Slide>
    </>
  );
}
