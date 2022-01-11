import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import MenuSup from "../components/header/MenuSup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";

export default function Page() {
  return (
    <>
      <MenuSup />

      {/* BREADCUMBS */}

      <Box
        sx={{
          backgroundColor: "#fff",
          height: "38px",
          display: "flex",
          alignItems: "center",
          boxShadow: "rgb(170 170 170 / 60%) 2px 2px 4px 0px",
        }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Breadcrumbs separator=">" sx={{ fontSize: "14px" }}>
              <Link color="text.secondary" underline="hover">
                Empresa Modelo
              </Link>
              <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
                Relatório de impostos
              </Typography>
              <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
                Simples Nacional
              </Typography>
            </Breadcrumbs>
            <IconButton size="auto" disableRipple>
              <MoreVertIcon fontSize="inherit" sx={{ color: "black" }} />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      {/* CONTEÚDO DA PÁGINA */}

      <Container
        sx={{
          maxWidth: { sm: "835px" },
        }}>
        {/* CARD INTRO INFO IMPOSTO */}
        <Card sx={{ position: "relative", p: "25px", mt: 6 }}>
          <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
            Simples Nacional
          </Typography>
          <Typography
            component="h1"
            variant="body1"
            color="#9ea0b9"
            sx={{ fontWeight: "700", mb: 2 }}>
            (Parcelamento)
          </Typography>

          {/* VALOR ATÉ TELA SM */}
          <Stack
            direction="row"
            alignItems="flex-end"
            sx={{
              mb: 2,
              fontWeight: "400",
              display: { xs: "flex", sm: "none" },
            }}>
            {" "}
            <Typography
              color="text.light"
              component="h1"
              variant="h3"
              sx={{ fontWeight: "400" }}>
              R$
            </Typography>
            {/* PROBLEMA EM MANTER O TEXTO ALINHADO NO BOTTOM USANDO VARIANT H1 */}
            <Typography sx={{ fontSize: "24px", fontWeight: "700", ml: "5px" }}>
              1.589
            </Typography>
            <Typography variant="body2" color="text.light" sx={{ ml: "4px" }}>
              38
            </Typography>
          </Stack>

          {/* VALOR A PARTIR DA TELA SM */}
          <Stack
            direction="row"
            alignItems=""
            justifyContent="end"
            sx={{
              backgroundColor: "#ff0080",
              mb: 2,
              fontWeight: "400",
              position: "absolute",
              top: "41px",
              right: "25px",
              display: { xs: "none", sm: "flex" },
            }}>
            {" "}
            <Typography
              color="text.light"
              component="h1"
              variant="h3"
              sx={{ fontWeight: "400" }}>
              R$
            </Typography>
            {/* PROBLEMA EM MANTER O TEXTO ALINHADO NO BOTTOM USANDO VARIANT H1 */}
            <Typography sx={{ fontSize: "24px", fontWeight: "700", ml: "5px" }}>
              21.348
            </Typography>
            <Typography variant="body2" color="text.light" sx={{ ml: "4px" }}>
              38
            </Typography>
          </Stack>

          <Stack>
            <Stack direction="row">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", mr: "4px" }}>
                Competência:
              </Typography>
              <Typography variant="body2">Dezembro/2021</Typography>
            </Stack>
            <Stack direction="row">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", mr: "4px" }}>
                Vencimento:
              </Typography>
              <Typography variant="body2">13/01/2022</Typography>
            </Stack>
          </Stack>
        </Card>

        {/* BOTOES DE AÇÃO */}

        <Stack
          justifyContent="spaceBetween"
          sx={{
            columnGap: "15px",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-around" },
            alignItems: { xs: "none", sm: "center" },
          }}>
          <Button
            maxWidth="sm"
            variant="contained"
            color="success"
            sx={{ mb: 2, mt: 2, width: "100%" }}>
            INFORMAR PAGAMENTO
          </Button>
          <Button maxWidth="sm" variant="contained" sx={{ width: "100%" }}>
            VISUALIZAR BOLETO
          </Button>
          <Button
            variant="contained"
            sx={{ minWidth: "125px", display: { xs: "none", sm: "flex" } }}
            endIcon={<DownloadIcon />}>
            ARQUIVOS
          </Button>
        </Stack>
      </Container>

      {/* XXXXXXXXXXXXXXXXXXX */}
      <Container maxWidth="lg">
        <Box>
        <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
          Informações adicionais
        </Typography>
        <Card sx={{ position: "relative", p: "25px" }}>
          <Stack direction="row">
           <Box>
           <IconButton size="auto" disableRipple variant="balloon">
              <CommentSharpIcon fontSize="inherit" sx={{ color: "balloon", mr:1}} />
            </IconButton>
           </Box>
            <Box>
              <Typography
                component="h5"
                variant="h5"
                sx={{ lineHeight: "30px" }}>
                Diego Pollheim
              </Typography>
              <Typography variant="body2">Sem observações adicionais</Typography>
            </Box>
          </Stack>
        </Card>
        </Box>
      </Container>
      {/* XXXXXXXXXXXXXXXXXXX */}
    </>
  );
}
