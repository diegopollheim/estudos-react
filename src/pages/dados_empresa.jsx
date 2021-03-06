import MenuSup from "../components/header/MenuSup";
import Footer from "../components/footer/Footer";
import {
  Box,
  Breadcrumbs,
  Card,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import logoEmpresa from "/public/images/logoDadosEmpresa.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* MENU SUPERIOR */}
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
                
              <Link href="/imposto">
                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize:"inherit",
                    "&:hover": {
                      cursor:"pointer",
                      textDecoration: "underline",
                    },
                  }}>
                  Dados da empresa
                </Typography>
              </Link>

              <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
                Dados da empresa
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Container>
      </Box>
      {/* FIM BREADCRUMBS */}

      {/* INTRO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 5,
          mt: 5,
        }}>
        <Card sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center">
            <Box mr={3}>
              <Image src={logoEmpresa} layout="fixed" width={55} height={55} />{" "}
            </Box>
            <Stack>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                  lineHeight: ["1.938rem", "2.25rem"],
                }}>
                Empresa Modelo 123
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { sm: "1rem" } }}>
                20.382.489/0001-10
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Container>

     
      {/* INFO B??SICAS */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Box sx={{ pb: 2 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ fontSize: { sm: "1.5rem", lineHeight: "1.825rem" } }}>
            Informa????es b??sicas
          </Typography>
          <Typography
            component="p"
            variant="body2"
            mb={2}
            sx={{ fontSize: { sm: "1rem" } }}>
            Principais dados e informa????es da empresa
          </Typography>
          <Card variant="s-none" sx={{ position: "relative" }}>
            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Raz??o social
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  Empresa Modelo 123
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Telefone
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  (47) 32517667
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ px: "25px", py: 1.814, width: "100%" }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  E-mail
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  eng.gcorrea@gmail.com
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Container>
    

      {/* SIT CADASTRAL */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Box sx={{ pb: 2 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ fontSize: { sm: "1.5rem", lineHeight: "1.825rem" } }}>
            Situa????o Cadastral
          </Typography>
          <Typography
            component="p"
            variant="body2"
            mb={2}
            sx={{ fontSize: { sm: "1rem" } }}>
            Principais documentos da sua empresa
          </Typography>
          <Card variant="s-none" sx={{ position: "relative" }}>
            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Regime de tributa????o
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  Simples Nacional
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  CNPJ
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  20.382.489/0001-10
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Inscri????o estadual
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  65456
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ px: "25px", py: 1.814, width: "100%" }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Cart??o CNPJ
                </Typography>
                <Button
                  variant="btn-link"
                  sx={{
                    height: "20px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  disableRipple>
                  Clique para ver o cart??o CNPJ
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Container>

      {/* SINDICATO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 3,
        }}>
        <Box sx={{ pb: 2 }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ fontSize: { sm: "1.5rem", lineHeight: "1.825rem" } }}>
            Sindicato
          </Typography>
          <Typography
            component="p"
            variant="body2"
            mb={2}
            sx={{ fontSize: { sm: "1rem" } }}>
            Este ?? o seu sindicato, para mais informa????es acesse a p??gina do
            sindicato
          </Typography>
          <Card variant="s-none" sx={{ position: "relative" }}>
            <Box
              sx={{
                px: "25px",
                py: 1.814,
                borderBottom: "1px solid #E0E0E0",
                width: "100%",
              }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Typography
                  sx={{
                    fontSize: { sm: "16px" },

                    minWidth: "220px",
                  }}
                  variant="body2">
                  Nome do sindicato
                </Typography>
                <Typography
                  sx={{ fontSize: { sm: "16px" }, width: "fit-content" }}
                  variant="body2"
                  color="text.secondary">
                  Sindicato dos Trabalhadores nas Ind??strias do Vestu??rio de
                  Brusque e Regi??o
                </Typography>
              </Stack>
            </Box>

            <Box sx={{ px: "25px", py: 1.814, width: "100%" }}>
              <Stack
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "start", sm: "center" },
                  rowGap: { xs: "5px", sm: "0px" },
                }}>
                <Button
                  variant="btn-link"
                  sx={{
                    height: "20px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                  disableRipple>
                  Ir para p??gina do sindicato
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Container>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
