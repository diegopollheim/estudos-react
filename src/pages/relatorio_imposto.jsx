import MenuSup from "../components/header/MenuSup";
import {
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Page() {
  return (
    <>
      <MenuSup />
      {/* BREADCRUMBS */}
      <Stack
        justifyContent="center"
        bgcolor="#fff"
        sx={{
          boxShadow: "rgb(170 170 170 / 60%) 2px 2px 4px 0px",
          height: "38px",
        }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Breadcrumbs separator=">" sx={{ fontSize: "14px" }}>
            <Link color="text.light" underline="none">
              Empresa Modelo
            </Link>
            <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
              Relatório de impostos
            </Typography>
          </Breadcrumbs>

          <IconButton size="auto" disableRipple>
            <MoreVertIcon fontSize="inherit" sx={{ color: "black" }} />
          </IconButton>
        </Container>
      </Stack>
      {/* FIM DO BREADCRUMPS */}

      {/* CONTEUDO INICIAL */}
      <Container
        bgcolor="#ff00000"
        maxWidth={false}
        sx={{
          mt: 4,
          maxWidth: "1020px",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Typography component="h1" variant="h2">
          Relatório de impostos
        </Typography>
        <Button variant="outlined">Ver guia de pagamentos</Button>
      </Container>
    </>
  );
}
