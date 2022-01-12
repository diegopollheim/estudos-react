import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slide from "@mui/material/Slide";
import * as React from "react";

// ETAPA SENHA
export default function EtapaSenha(props) {
  const { etapa, setEtapa, loading } = props;
  const containerRef = React.useRef(null);

  // ETAPA ENTERIOR
  function BackStep() {
    setEtapa(etapa - 1);
  }

  return (
    <>
      <Slide direction="left" in={etapa === 2} container={containerRef.current}>
        <Box>
          {/* TITULO */}
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
            <Box
              sx={{ display: "flex", mt: 5, justifyContent: "space-between" }}>
              <Button variant="link" disableRipple>
                Esqueceu sua senha?
              </Button>
              <Button color="success" variant="contained" onClick={BackStep}>
                Anterior
              </Button>
            </Box>
          </Box>
        </Box>
      </Slide>
    </>
  );
}
