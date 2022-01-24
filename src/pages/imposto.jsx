import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  IconButton,
  Input,
  Link,
  Stack,
  Typography,
  InputBase,
  TableContainer,
  Popover,
} from "@mui/material";
import MenuSup from "../components/header/MenuSup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CarimboPago from "/public/images/carimbo-pago.png";
import CarimboVencido from "/public/images/carimbo-vencido.png";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import CardAviso from "../components/cardAviso/CardAviso";
import ReplyIcon from "@mui/icons-material/Reply";
import TableRegistroImposto$ from "../components/tableRegistoImposto$/TableRegistroImposto$";
import Grafico from "../components/grafico/Grafico";
import Footer from "../components/footer/Footer";
import SubMenu from "../components/header/subMenu/SubMenu";

export default function Page() {
  const [pago, setPago] = React.useState(true);
  const [anchorArq, setAnchorArq] = React.useState(true);
  const searchInput = useRef(null);

  // DAR FOCUS NO FILE UPLOADER
  function handleFocus() {
    searchInput.current.click();
  }

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
            <Breadcrumbs
              bgcolor="#ff0"
              maxItems
              itemsBeforeCollapse={1}
              itemsAfterCollapse={1}
              separator=">"
              sx={{
                fontSize: "14px",
              }}>
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
          maxWidth: { sm: "835px", position: "relative" },
        }}>
        {/* CARIMBOS IMPOSTO */}
        <Box
          sx={{
            position: "absolute",
            top: "-24px",
            right: "0px",
            zIndex: "5",
          }}>
          <Box name="carimbo-pago" display={pago ? "flex" : "none"}>
            <Image src={CarimboPago} width={116} height={116} />
          </Box>
          <Box name="carimbo-vencido" display={!pago ? "flex" : "none"}>
            <Image src={CarimboVencido} width={170} height={116} />
          </Box>
        </Box>
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
          <Box sx={{
            mb: 2,
            fontWeight: "400",
            position: "absolute",
            top: "41px",
            right: "25px",
            display: { xs: "none", sm: "flex" },
          }}>
            <Stack
              direction="row"
              alignItems="baseline"
              
            >
              {" "}
              <Typography
                color="text.light"
                component="h1"
                variant="h3"
                sx={{ fontWeight: "400" }}>
                R$
              </Typography>
              {/* PROBLEMA EM MANTER O TEXTO ALINHADO NO BOTTOM USANDO VARIANT H1 */}
              <Typography component="h1" variant="h1" sx={{ lineHeight:"100%", fontSize: "2.25rem", fontWeight: "700", ml: "5px" }}>
                21.348
              </Typography>

            </Stack>
            <Typography variant="body2" color="text.light" sx={{ ml: "4px" }}>
              38
            </Typography>

          </Box>

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
            mb: [2, 0],
          }}>
          <Button
            maxWidth="sm"
            variant="contained"
            color={pago ? "error" : "success"}
            sx={{ mb: 2, mt: 2, width: "100%", minWidth: "198px" }}
            onClick={() => {
              setPago(!pago);
            }}>
            {pago ? "CANCELAR PAGAMENTO" : "INFORMAR PAGAMENTO"}
          </Button>
          <Button maxWidth="sm" variant="contained" sx={{ width: "100%" }}>
            VISUALIZAR BOLETO
          </Button>
          <Button
            onClick={(event) => {
              setAnchorArq(event.currentTarget);
            }}
            variant="contained"
            sx={{ minWidth: "125px", display: { xs: "none", sm: "flex" } }}
            endIcon={<DownloadIcon />}>
            ARQUIVOS
          </Button>
        </Stack>
      </Container>

      {/* CARD AVISO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 2,
        }}>
        <CardAviso>
          <Typography sx={{ fontSize: ["0.875rem", "1rem"], textAlign: "center" }}>
            Esse imposto foi recalculado. Clique aqui para ver os dados da nova
            guia do imposto.
          </Typography>
        </CardAviso>
      </Container>
      {/* INFORMAÇÕES DO PAGAMENTO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Box sx={{ pb: 2 }}>
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Informações do pagamento
          </Typography>
          <Card variant="s-none" sx={{ position: "relative" }}>
            <Box
              sx={{
                px: "25px",
                py: 2,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { sm: "row" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },
                    mb: "5px",
                    minWidth: "220px",
                  }}
                  variant="body2">
                  Situação do pagamento
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  Pagamento informado
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                px: "25px",
                py: 2,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { sm: "row" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },
                    mb: "5px",
                    minWidth: "220px",
                  }}
                  variant="body2">
                  Data do pagamento
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  30/12/2021
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ px: "25px", py: 2, width: "100%" }}>
              <Stack
                sx={{
                  flexDirection: { sm: "row" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },
                    mb: "5px",
                    minWidth: "220px",
                  }}
                  variant="body2">
                  Pagamento informado por
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  Diego Pollheim
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Box>

        {/* CARD SEM ANEXO PGTO */}
        <Card
          onClick={handleFocus}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
            height: "100%",
            width: "100%",
            p: 2,
          }}>
          <Stack alignItems="strech" direction="row" sx={{ width: "100%" }}>
            <IconButton size="large" color="primary" disableRipple>
              <AddCircleIcon sx={{ width: "40px", height: "40px" }} />
            </IconButton>
            <Stack justifyContent="space-between" sx={{ ml: 3, py: 1 }}>
              <Typography
                variant="body2"
                sx={{ fontSize: { sm: "16px" }, fontWeight: "500" }}>
                Anexar recibo de pagamento
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { sm: "16px" } }}>
                Clique para anexar o comprovante
              </Typography>
            </Stack>
          </Stack>
          <InputBase
            id="comprovante-pgto"
            inputRef={searchInput}
            type="file"
            sx={{ display: "none" }}
          />
        </Card>
        {/* CARD COM ANEXO PGTO */}
        <Card
          variant="s-none"
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            height: "100%",
            width: "100%",
            p: 2,
          }}>
          <Stack
            alignItems="strech"
            sx={{ flexDirection: { xs: "column", sm: "row" }, width: "100%" }}>
            <Stack direction="row" name="direita">
              <IconButton
                size="large"
                color="primary"
                sx={{ cursor: "default", transform: "rotateY(180deg)" }}
                disableRipple>
                <ReplyIcon sx={{ width: "40px", height: "40px" }} />
              </IconButton>

              <Stack justifyContent="space-between" sx={{ ml: 3, py: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { sm: "16px" }, fontWeight: "500" }}>
                  Comprovante de pagamento
                </Typography>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: "auto", fontSize: { sm: "16px" } }}>
                    Arquivo:
                  </Typography>
                  <Button
                    variant="link"
                    sx={{
                      ml: 1,
                      lineHeight: "auto",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    disableRipple>
                    DAS01-23-01-2022.jpg
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Box
              name="esquerda"
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "35px",
                ml: ["0px", "auto"],
                my: ["0px", "auto"],
              }}>
              <Button variant="btn-link" disableRipple>
                Excluir arquivo
              </Button>
            </Box>
          </Stack>
        </Card>
        {/* CARD IMPOSTO NAO PAGO */}
        <Card
          variant="s-none"
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            px: 3,
            pt: 2,
          }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: { sm: "16px" }, fontWeight: "500", mb: "5px" }}>
              Comprovante de pagamento
            </Typography>

            <Typography
              variant="body2"
              sx={{ lineHeight: "auto", fontSize: { sm: "16px" } }}>
              Já realizou este pagamento? Informe o pagamento clicando no botão
              abaixo para manter sua plataforma sempre em dia
            </Typography>
          </Box>
          <Stack
            justifyContent="center"
            sx={{
              position: "relative",
              mx: -3,
              mt: 2,
              px: 3,
              height: "50px",
              borderTop: "1px solid #E0E0E0",
            }}>
            <Button variant="btn-link" disableRipple>
              Informar Pagamento
            </Button>
          </Stack>
        </Card>
      </Container>
      {/* FIM INFORMAÇÕES DO PAGAMENTO */}

      {/* INFORMAÇÕES ADICIONAIS */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Box>
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Informações adicionais
          </Typography>
          <Card variant="s-none" sx={{ position: "relative", p: "25px" }}>
            <Stack direction="row">
              <Box>
                <IconButton size="auto" disableRipple variant="balloon">
                  <CommentSharpIcon
                    fontSize="inherit"
                    sx={{ color: "balloon", mr: 1 }}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{ lineHeight: "30px" }}>
                  Diego Pollheim
                </Typography>
                <Typography variant="body2">
                  Sem observações adicionais
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Box>
      </Container>
      {/* FIM INFORMAÇÕES ADICIONAIS */}

      {/* GRÁFICO IMPOSTO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
          Histórico desse imposto
        </Typography>
        <Grafico />
        <Stack
          alignItems="center"
          sx={{
            display: ["none", "flex"],
          }}>
          <Box sx={{ maxWidth: "585px" }}>
            <CardAviso>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Passe o mouse sobre o gráfico acima para ver os valores dos
                impostos de cada mês
              </Typography>
            </CardAviso>
          </Box>
        </Stack>
      </Container>

      {/* REGISTRO DESSE IMPOSTO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
        }}>
        <Box>
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Registro deste imposto
          </Typography>
          <TableRegistroImposto$ imposto={[1, 2, 3, 4, 5]} />
        </Box>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
