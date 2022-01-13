import * as React from "react";
import Box from "@mui/material/Box";
import {
  Card,
  LinearProgress,
  Slide,
  Stack,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";
import logoMoreto from "/public/images/logo.svg";
import logoEmail from "./images/gmail.png";
import logoAccess from "./images/access.png";
import Capa from "./images/Capa.jpg";
import Image from "next/image";


export default function FormLogin() {
  const [etapa, setEtapa] = React.useState(8);
  const [load, setLoad] = React.useState(false);
  const containerRef = React.useRef(null);

  // PRÓXIMA ETAPA
  function NextStep() {
    setLoad(true);

    setTimeout(() => {
      setEtapa(etapa + 1);
      setLoad(false);
    }, 1500);
  }

  // ETAPA ENTERIOR
  const BackStep = () => {
    setEtapa(etapa - 1);
  };

  // LOADING PROGRESS LOGIN
  const Loading = (ativo) => {
    if (ativo === true) {
      return (
        <>
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}>
            <Box sx={{}}>
              <LinearProgress />
            </Box>
            <Box
              sx={{
                height: "100%",
                backgroundColor: "#fff",
                opacity: "0.5",
                zIndex: "10",
              }}></Box>
          </Stack>
        </>
      );
    }
  };

  // RETORNA O COMPONENTE BASEADO NA ETAPA
  const renderStep = (etapa) => {
    switch (etapa) {
      case 1:
        return <EtapaEmail />; // Etapa Inicial
      case 2:
        return <EtapaSenha />; // Senha
      case 3:
        return <SelectEmpresa />; // Selecionar empresa || Quando mais que uma
      case 4:
        return <RecoverPassword />; // Recuperar senha
      case 5:
        return <RecoverPasswordSuccess />; // Email de Recuperação enviado
      case 6:
        return <NoPermission />; // Sem permissão de acesso
      case 7:
        return <PwTemp />; // Sem permissão de acesso
      case 8:
        return <RecoverMail />; // Escqueci meu e-mail
    }
  };

  // ETP EMAIL 1
  const EtapaEmail = () => {
    return (
      <>
        <Slide
          direction="right"
          in={true}
          container={containerRef.current}
          appear={false}>
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
                px: [3, 5],
              }}>
              <TextField type="email" label="Email" required />
              <Button variant="link" disableRipple sx={{ mt: 1, mb: 0.5 }}>
                Esqueci meu email
              </Button>
              <Typography variant="body2" color="text.light" sx={{ pt: 4 }}>
                Ainda não é cliente? Abra sua empresa com a gente e tenha acesso
                à sua contabilidade online 24 horas por dia.{" "}
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
                    color="primary"
                    onClick={NextStep}>
                    Próximo
                  </Button>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Slide>
      </>
    );
  };

  // ETP SENHA 2
  const EtapaSenha = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 2}
          container={containerRef.current}>
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
                px: [3, 5],
              }}>
              <TextField type="password" label="Senha" required />
              <Box
                sx={{
                  display: "flex",
                  mt: 5,
                  justifyContent: "space-between",
                }}>
                <Button
                  variant="link"
                  onClick={() => {
                    setLoad(true);

                    setTimeout(() => {
                      setEtapa(4);
                      setLoad(false);
                    }, 800);
                  }}
                  disableRipple>
                  Esqueceu sua senha?
                </Button>
                <Button variant="contained" color="primary" onClick={NextStep}>
                  Próximo
                </Button>
              </Box>
            </Box>
          </Box>
        </Slide>
      </>
    );
  };

  // ETP SELECIONAR EMPRESA 3
  const SelectEmpresa = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 3}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ mb: 3 }}>
              <Typography component="h1" variant="h2">
                Escolha uma Empresa
              </Typography>
              <Typography>Selecione a empresa para iniciar</Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Stack component="form">
              {/* LINE EMPRESA 1*/}
              <Stack
                onClick={() => setEtapa(6)}
                direction="row"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  px: 5,
                  height: "60px",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}>
                <Box>
                  <Stack
                    sx={{
                      border: "1px solid #6B6C6F",
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        width: "fit-content",
                        lineHeight: "100%",
                        justifyContent: "center",
                      }}>
                      E
                    </Typography>
                  </Stack>
                </Box>
                <Typography
                  variant="body"
                  sx={{
                    marginLeft: "20px",
                    width: "fit-content",
                    lineHeight: "100%",
                    justifyContent: "center",
                  }}>
                  Empresa Modelo 123
                </Typography>
              </Stack>

              {/* LINE EMPRESA 2*/}
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  px: 5,
                  height: "60px",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}>
                <Box>
                  <Stack
                    sx={{
                      border: "1px solid #6B6C6F",
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        width: "fit-content",
                        lineHeight: "100%",
                        justifyContent: "center",
                      }}>
                      M
                    </Typography>
                  </Stack>
                </Box>
                <Typography
                  variant="body"
                  sx={{
                    marginLeft: "20px",
                    width: "fit-content",
                    lineHeight: "100%",
                    justifyContent: "center",
                  }}>
                  Moreto Contabilidade Ltda
                </Typography>
              </Stack>

              {/* BTN SAIR */}
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  justifyContent: "end",
                  px: [3, 5],
                }}>
                <Button variant="contained" color="primary" onClick={BackStep}>
                  Sair
                </Button>
              </Box>
            </Stack>
          </Box>
        </Slide>
      </>
    );
  };

  // RECOVER PASSWORD 4
  const RecoverPassword = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 4}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ px: [3, 5], mb: 3 }}>
              <Typography component="h1" variant="h2">
                Redefinir a senha
              </Typography>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "center" }}>
                Receba um email em com as instruções para redefinir a sua senha.
              </Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Stack component="form">
              {/* IMAGEM */}
              <Stack alignItems="center" sx={{ height: "112px" }}>
                <Image
                  src={logoEmail}
                  layout="fixed"
                  width={150}
                  height={112}
                />
              </Stack>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "center" }}>
                O e-mail será enviado para
              </Typography>
              <Typography sx={{ fontWeight: "500", textAlign: "center" }}>
                diego@moreto.co
              </Typography>

              {/* BOTOES */}
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  justifyContent: "space-between",
                  px: [3, 5],
                }}>
                <Button
                  variant="link"
                  color="primary"
                  onClick={() => {
                    setEtapa(2);
                  }}>
                  Voltar
                </Button>
                <Button variant="contained" color="primary" onClick={NextStep}>
                  Enviar e-mail
                </Button>
              </Box>
            </Stack>
          </Box>
        </Slide>
      </>
    );
  };

  // RECOVER PASSWORD 5
  const RecoverPasswordSuccess = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 5}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ px: [3, 5], mb: 3 }}>
              <Typography
                component="h1"
                variant="h2"
                sx={{ textAlign: "center" }}>
                E-mail enviado com sucesso
              </Typography>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "center" }}>
                Verifique sua caixa de entrada
              </Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Stack component="form">
              {/* IMAGEM */}
              <Stack alignItems="center" sx={{ height: "112px" }}>
                <Image
                  src={logoEmail}
                  layout="fixed"
                  width={150}
                  height={112}
                />
              </Stack>
              <Typography
                variant="body1"
                sx={{ pt: 2, textAlign: "center", px: [3, 5] }}>
                Caso não encontre o e-mail, verifique também sua caixa de SPAM
              </Typography>

              {/* BTN ENVIAR EMAIL */}
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  justifyContent: "end",
                  px: [3, 5],
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setEtapa(2);
                  }}>
                  Voltar
                </Button>
              </Box>
            </Stack>
          </Box>
        </Slide>
      </>
    );
  };

  // SEM PERMISSAO DE ACESSO 6
  const NoPermission = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 6}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ px: [3, 5], mb: 3 }}>
              <Typography
                component="h1"
                variant="h2"
                sx={{ textAlign: "center" }}>
                Você não tem permissão
              </Typography>
              <Typography variant="body1" sx={{ pt: 2, textAlign: "center" }}>
                No momento, você não tem permisssão para acessar nenhuma
                empresa.
              </Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Stack component="form">
              {/* IMAGEM */}
              <Stack alignItems="center" sx={{ height: "130px" }}>
                <Image
                  src={logoAccess}
                  layout="fixed"
                  width={130}
                  height={130}
                />
              </Stack>
              <Typography
                variant="body1"
                sx={{ pt: 2, textAlign: "center", px: [3, 5] }}>
                Caso isto seja um erro, entre em contato com o administrador da
                sua empresa ou direto com a Moreto.co.
              </Typography>

              {/* BTN ENVIAR EMAIL */}
              <Box
                sx={{
                  display: "flex",
                  mt: 4,
                  justifyContent: "end",
                  px: [3, 5],
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setEtapa(1);
                  }}>
                  Sair
                </Button>
              </Box>
            </Stack>
          </Box>
        </Slide>
      </>
    );
  };

  // ETP SENHA TEMP 7
  const PwTemp = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 7}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ mb: 3 }}>
              <Typography component="h1" variant="h2">
                Sua senha é temporária
              </Typography>
              <Typography>É necessário cadastrar uma nova senha</Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                px: [3, 5],
              }}>
              <TextField
                type="password"
                label="Insira a nova senha"
                sx={{ mb: 2 }}
                required
              />
              <TextField type="password" label="Repita a senha" required />
              <Box
                sx={{
                  display: "flex",
                  mt: 5,
                  justifyContent: "end",
                }}>
                <Button variant="contained" color="primary" onClick={NextStep}>
                  Próximo
                </Button>
              </Box>
            </Box>
          </Box>
        </Slide>
      </>
    );
  };

  // RECUPERAR EMAIL 8
  const RecoverMail = () => {
    return (
      <>
        <Slide
          appear={!load}
          direction="left"
          in={etapa === 8}
          container={containerRef.current}>
          <Box>
            {/* TITULO */}
            <Stack alignItems="center" sx={{ px: [3, 5], mb: 3 }}>
              <Typography component="h1" variant="h2">
                Localizar e-mail
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                Insira o CNPJ de uma empresa que você tenha acesso
              </Typography>
            </Stack>

            {/* FORMULÁRIO */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                px: [3, 5],
              }}>
              <TextField type="text" label="Insira o CNPJ" required />
              <Box
                sx={{
                  display: "flex",
                  mt: 5,
                  justifyContent: "space-between",
                }}>
                <Button
                  variant="link"
                  onClick={() => {
                    setLoad(true);

                    setTimeout(() => {
                      setEtapa(4);
                      setLoad(false);
                    }, 800);
                  }}
                  disableRipple>
                  Esqueceu sua senha?
                </Button>
                <Button variant="contained" color="primary" onClick={NextStep}>
                  Próximo
                </Button>
              </Box>
            </Box>
          </Box>
        </Slide>
      </>
    );
  };

  // INICIO DO FORM LOGIN
  return (
    <Box
      sx={{
        // backgroundColor: "#FBDB60",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}>
      <Image
        src={Capa}
        layout="fill"
        objectFit="cover"
      />
      <Card
        // ref={containerRef}
        sx={{
          width: { xs: "100vw", sm: "425px" },
          minHeight: { xs: "100vh", sm: "520px" },
          position: "relative",
          pt: [3, 6],
          // px: [3, 5],
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

        {/* BOTOES DE DESENVOLVIMENTO */}
        {/* ========================= */}
        <Stack
          direction="row"
          sx={{
            // display:"none",
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <ButtonGroup size="small" aria-label="small button group">
            <Button onClick={() => setEtapa(1)}>1</Button>
            <Button onClick={() => setEtapa(2)}>2</Button>
            <Button onClick={() => setEtapa(3)}>3</Button>
            <Button onClick={() => setEtapa(4)}>4</Button>
            <Button onClick={() => setEtapa(5)}>5</Button>
            <Button onClick={() => setEtapa(6)}>6</Button>
            <Button onClick={() => setEtapa(7)}>7</Button>
            <Button onClick={() => setEtapa(8)}>8</Button>
          </ButtonGroup>
        </Stack>
      </Card>
    </Box>
  );
}
