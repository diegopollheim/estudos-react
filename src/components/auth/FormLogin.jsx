import * as React from "react";
import Box from "@mui/material/Box";
import { Card, LinearProgress } from "@mui/material";
import logoMoreto from "/public/images/logo.svg";
import Image from "next/image";
import EtapaSenha from "./02Senha.jsx";
import EtapaEmail from "./01Email.jsx";

export default function FormLogin() {
  const [etapa, setEtapa] = React.useState(1);
  const [load, setLoad] = React.useState(false);

  // LOADING PROGRESS LOGIN
  function Loading(ativo) {
    if (ativo === true) {
      return (
        <>
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}>
            <LinearProgress />
          </Box>
        </>
      );
    }
  }

  // RETORNA O COMPONENTE BASEADO NA ETAPA
  function renderStep(etapa, setEtapa) {
    switch (etapa) {
      case 1:
        return (
          <EtapaEmail
            load={load}
            setLoad={setLoad}
            etapa={etapa}
            setEtapa={setEtapa}
          />
        );
      case 2:
        return (
          <EtapaSenha etapa={etapa} setEtapa={setEtapa} loading={Loading} />
        );
        default:
          return <h3>Mostrar próximo componente</h3>;
        
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: "#FBDB60",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}>
      <Card
        // ref={containerRef}
        sx={{
          width: { xs: "100vw", sm: "425px" },
          minHeight: { xs: "100vh", sm: "520px" },
          position: "relative",
          pt: [3, 6],
          px: [3, 5],
          pb: 5,
          m: [0, 5],
        }}>
        {/* PROGRESS BAR */}
        {Loading(load)}

        {/*LOGO */}
        <Box
          sx={{
            height: 21,
            display: "flex",
            justifyContent: "center",
            mb: 4,
          }}>
          <Image src={logoMoreto} width="139" />
        </Box>

        {/* MOSTRA O COMPONENTE QUE RETORNA DA FUNCAO */}
        {renderStep(etapa, setEtapa)}
      </Card>
    </Box>
  );
}
