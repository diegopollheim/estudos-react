import * as React from "react";
import MenuSup from "../components/header/MenuSup";
import Footer from "../components/footer/Footer";
import {
  Box,
  Tabs,
  Tab,
  Card,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

import ilustSemFaturas from "/public/images/Ursinho.svg";
import mastercard from "/public/images/mastercard.png";
import visa from "/public/images/visa.png";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ShowAba = (aba) => {
    switch (aba) {
      case 0:
        return <MeuContrato />;
      case 1:
        return <DadosCobranca />;
      case 2:
        return <MinhasFaturas />
    }
  };

  const MeuContrato = () => {

    // VARIÁVEIS DE USO NESSE ESCOPO
    var metPgto = "boleto"

    const MetPgtoAtivo = (metodo, cartCadast) => {

      if (metodo === "cartao") {
        if (cartCadast) {
          return (
            <>
              {/* COM CARTÃO */}
              <Stack>
                <Box
                  sx={{
                    px: "25px",
                    py: 1.814,
                    borderBottom: "1px solid #E0E0E0",
                    width: "100%",
                  }}>
                  <Box>
                    <Stack direction="row">
                      <Box width={70} height={70} sx={{ mr: 2 }}>
                        <Image src={mastercard}
                          layout="responsive" />
                      </Box>
                      <Stack>
                        <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }} sx={{
                          mb: 1,
                          fontSize: { sm: "1rem" }
                        }}>Terminado em 6505</Typography>
                        <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}>MasterCard</Typography>
                        <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}>Vencimento: 10/2024</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>

                {/* ============== */}

                {/* LINHA 3 */}
                <Box
                  sx={{
                    px: "25px",
                    py: 1.814,
                  }}>
                  <Button variant="btn-link" sx={{ fontSize: { sm: "1rem" } }} disableRipple>
                    Alterar cartão
                  </Button>
                </Box>
                {/* ============== */}
              </Stack>
              {/* ================= */}
            </>
          );
        }
        else {
          return (
            <>

              {/* SEM CARTÃO */}
              <Stack>
                <Box

                  sx={{
                    px: "25px",
                    py: 1.814,
                    borderBottom: "1px solid #E0E0E0",
                    width: "100%",
                  }}>
                  <Box

                    sx={{
                      py: 2,
                    }}>
                    <Typography
                      variant="body2Gold">
                      Nenhum cartão ativo
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    px: "25px",
                    py: 1.814,
                  }}>
                  <Button variant="btn-link" disableRipple>
                    Cadastrar cartão
                  </Button>
                </Box>
              </Stack>
              {/* ============== */}
            </>
          )
        }
      }
      else if (metodo === "boleto") {
        return (<>
          {/* LINHA 1 */}
          <Box
            sx={{
              px: "25px",
              py: 1.814,
              borderBottom: "1px solid #E0E0E0",
              width: "100%",
            }}>
            <Box
              sx={{
                py: [0, 0.5]
              }}>
              <Typography

                sx={{ mb: 3 }}
                variant="body2Gold"
              >
                Os boletos serão enviados para o email cadastrado em "Dados de cobrança"
              </Typography>
              <Typography
                sx={{ fontSize: "0.875rem" }}>
                   Você também poderá visualizar os boletos da sua fatura em Meu plano > Minhas Faturas
              </Typography>
            </Box>
          </Box>
          {/* ============== */}

          {/* LINHA 2 */}
          <Box
            sx={{
              px: "25px",
              py: 1.814,
            }}>
            <Button variant="btn-link" sx={{ fontSize: { sm: "1rem" } }} disableRipple>
              Ver meus dados de cobrança
            </Button>
          </Box>
          {/* ============== */}
        </>)
      }
    }

    return (
      <>
        {/* DADOS DO CONTRATO */}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Dados do contrato
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre os dados do meu contrato
              </Typography>
            </Stack>

            <Card
              sx={{
                border: "1px solid #d6d6d6",
                boxShadow: "none"
              }}>
              {/* LINHA 1 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Nome do plano
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary">
                    MEI - Dia 05
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 2 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Vencimento
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary">
                    5 dia(s) após o término do período
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 3 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Próxima cobrança
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary">
                    05/02/2022
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 4 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    ID do cliente
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    19135076
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 5 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "space-between",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{

                      minWidth: "220px",
                    }}
                    variant="body2">

                    ID da assinatura
                  </Typography>
                  <Typography

                    sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                    variant="body2"
                    color="text.secondary">
                    15676839
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}
            </Card>
          </Box>
        </Box>

        {/* METODOS DE PAGAMENTO */}
        <Stack
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Método de pagamento
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre o meu método de pagamento
              </Typography>
            </Stack>

            {/* CARTAO DE CRÉDITO */}
            <Card

              sx={{
                border: "1px solid #d6d6d6",
                boxShadow: "none"
              }}>

              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack>
                  <Typography
                    variant="body1">
                    {metPgto === "cartao" ? "Cartão de crédito" : "Boleto bancário"}
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {MetPgtoAtivo(metPgto, true)}

            </Card>


          </Box>
        </Stack>
        {/* FATURAS EM ABERTO */}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Faturas em aberto
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre as minhas faturas
              </Typography>
            </Stack>

            {/* FATURAS EM ABERTO */}
            <Card sx={{
              border: "1px solid #d6d6d6",
              boxShadow: "none"
            }}>
              {/* LINHA 1 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Box
                  sx={{
                    py: [0, 0.5]
                  }}>
                  <Typography
                    sx={{ mb: 1 }}
                    variant="body2Gold">
                    Parabéns! Você não possui faturas a pagar.
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.875rem" }}>
                    Você poderá verificar as faturas a pagar e o histórico de
                    pagamentos através da aba 'Minhas Faturas'
                  </Typography>
                </Box>
              </Box>
              {/* ============== */}

              {/* LINHA 2 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                }}>
                <Button variant="btn-link" sx={{ fontSize: { sm: "1rem" } }} disableRipple>
                  Gerenciar faturas
                </Button>
              </Box>
              {/* ============== */}
            </Card>


          </Box>
        </Box>
      </>
    );

  };


  const DadosCobranca = () => {

    var endCadastrado = true

    return (
      <>
        {/* DADOS COBRANÇA */}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Responsável pelo pagamento
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre o responsável pelo pagamento
              </Typography>
            </Stack>

            <Card sx={{
              border: "1px solid #d6d6d6",
              boxShadow: "none"
            }}>
              {/* LINHA 1 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Razão Social
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    Empresa Modelo
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 2 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    CNPJ
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    08290118970
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 3 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    E-mail
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    eng.gcorrea@gmail.com
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 4 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Telefone fixo
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    +55 47 3053-7667
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 5 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  borderBottom: "1px solid #E0E0E0",
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography
                    sx={{ minWidth: "220px" }}
                    variant="body2">
                    Telefone celular
                  </Typography>
                  <Typography

                    variant="body2"
                    color="text.secondary">
                    +55 47 99231-3674
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}

              {/* LINHA 6 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  width: "100%",
                }}>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    alignItems: {
                      xs: "start",
                      sm: "center",
                    },
                    rowGap: {
                      xs: "5px",
                      sm: "0px",
                    },
                  }}>
                  <Typography sx={{ minWidth: "220px" }} variant="body2">
                    Telefone celular
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +55 47 98828-8391
                  </Typography>
                </Stack>
              </Box>
              {/* ============== */}
            </Card>

          </Box>
        </Box>

        {/* ENDEREÇO*/}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Endereço de registro do responsável
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Quero alterar o endereço de registo do responsável
              </Typography>
            </Stack>

            <Card sx={{
              border: "1px solid #d6d6d6",
              boxShadow: "none"
            }}>


              {/* LINHA 1 */}
              <Box
                sx={{
                  px: "25px",
                  py: 2,
                  width: "100%",
                }}>
                {endCadastrado === true ?
                  <Stack>
                    <Typography variant="body2Gold" mb={1}>RUA GERMANO HOSCHPRUNG, 90</Typography>
                    <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }} >GALPAOA</Typography>
                    <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }} >BRUSQUE, SOUZA CRUZ</Typography>
                    <Typography sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }} >SC (88359-030)</Typography>
                  </Stack>
                  :
                  <Box
                    sx={{
                      py: 2,
                    }}>
                    <Typography variant="body1Gold">Nenhum endereço cadastrado</Typography>
                  </Box>
                }
              </Box>
              {/* ============== */}

            </Card>
          </Box>
        </Box>
      </>
    );
  };

  const MinhasFaturas = () => {
    return (
      <>
        {/* DADOS COBRANÇA */}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Responsável pelo pagamento
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre a minhas faturas a pagar
              </Typography>
            </Stack>

            <Card sx={{ border: "1px solid #d6d6d6", boxShadow: "none", p: 3 }}>
              <Stack alignItems="center">
                <Box width={190} height={190}>
                  <Image src={ilustSemFaturas} layout="responsive" />
                </Box>
                <Typography textAlign="center" sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }} sx={{
                  fontSize: {
                    sm: "16px",
                  }
                }}>Obrigado! Você não possui nenhum débito com a Moreto.co</Typography>
              </Stack>
            </Card>

          </Box>
        </Box>

        {/* FATURAS PAGAS*/}
        <Box
          sx={{
            maxWidth: {
              sm: "835px",
            },
            mb: 3,
          }}>
          <Box
            sx={{
              pb: 2,
              width: "100%",
            }}>
            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontSize: {
                    sm: "1.25rem",
                    lineHeight: "1.825rem",
                  },
                }}>
                Faturas pagas
              </Typography>
              <Typography
                color="text.link"
                textAlign="right"
                width="fit-content"
                sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                alignItems="flex-end"
                sx={{
                  display: ["none", "flex"],
                  "&:hover": { cursor: "pointer", textDecoration: "underline" },
                }}>
                Preciso de ajuda sobre as minhas faturas
              </Typography>
            </Stack>

            <Card sx={{ border: "1px solid #d6d6d6", boxShadow: "none" }} >
              {/* LINHA 1 */}
              <Box
                sx={{
                  px: "25px",
                  py: 1.814,
                  width: "100%",
                }}>
                <Box
                  sx={{
                    py: 2,
                  }}>
                  <Typography
                    variant="body2Gold">
                    Sem histórico de faturas pagas
                  </Typography>
                </Box>
              </Box>
              {/* ============== */}

            </Card>
          </Box>
        </Box>
      </>
    );
  };
  // #####################################
  return (
    <>
      {/* MENU E GRADIENTE */}
      <Stack>
        <MenuSup />

        {/* GRADIENTE */}
        <Box
          name="gradiente"
          sx={{
            height: "154px",
            width: "100%",
            zIndex: "-5",
            background: "linear-gradient(#1A73E8, #449AF5)",
          }}
        />
      </Stack>

      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "95px",
        }}>
        {/* INTRO */}
        <Container
          sx={{
            maxWidth: {
              sm: "835px",
            },
          }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 700,
              mb: 2,
              fontSize: {
                sm: "1.5rem",
              },
            }}>
            Meu Contrato
          </Typography>
          <Card
            sx={{
              border: "1px solid #d6d6d6",
              boxShadow: "rgb(170 170 170 / 60%) 1px 1px 8px 0px",
              p: 3,
              mb: 3,
            }}>
            <Stack direction="row" alignItems="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                mr={3}
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#EEEEEE",
                  height: "60px",
                  width: "60px",
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                  display: ["none", "flex"],
                }}>
                EMP
              </Stack>
              <Stack>
                <Typography color="#00a650" fontSize={["0.75rem", "0.875rem"]}>
                  Assinatura Ativa
                </Typography>
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{
                    fontSize: ["1.125rem", "1.25rem"],
                    lineHeight: ["1.938rem", "2.25rem"],
                  }}>
                  Empresa Modelo 123
                </Typography>
                <Typography
                  sx={{ fontSize: "0.875rem", lineHeight: "1.3125rem" }}
                  sx={{
                    fontSize: {
                      sm: "1rem",
                    },
                  }}>
                  20.382.489/0001-10
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Container>

        <Container
          sx={{
            maxWidth: {
              sm: "835px",
            },
          }}>
          <Box
            sx={{
              borderBottom: "1px solid #c7c7c7",
              mb: 3,
            }}>
            {/* ABAS */}
            <Tabs
              centered
              value={value}
              onChange={handleChange}
              variant="scrollable"
              sx={{ fontSize: "1.125rem" }}
              //scrollButtons
              //allowScrollButtonsMobile
              aria-label="scrollable force tabs example">
              <Tab sx={{ fontSize: "1.125rem", textTransform: "capitalize" }} label="Meu contrato" disableRipple />
              <Tab sx={{ fontSize: "1.125rem", textTransform: "capitalize" }} label="Dados de cobrança" disableRipple />
              <Tab sx={{ fontSize: "1.125rem", textTransform: "capitalize" }} label="Minhas Faturas" disableRipple />
            </Tabs>
          </Box>

          {/* MOSTRA CONTEUDO DA ABA SELECIONADA */}
          {ShowAba(value)}
        </Container>

        {/* FOOTER */}
        {/* <Footer /> */}
      </Box>
    </>
  );
}
