import {
  AppBar,
  Button,
  Container,
  IconButton,
  Popover,
  Stack,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PaidIcon from "@mui/icons-material/Paid";
import React from "react";
import SubMenu from "./subMenu/SubMenu";

export default function MenuSup() {
  // MOSTRAR SUBMENU USER
  const [anchorUser, setAnchorUser] = React.useState(null);
  const [anchorHome, setAnchorHome] = React.useState(null);
  const [anchorSettings, setAnchorSettings] = React.useState(null);

  return (
    <>
      <AppBar position="static" color="primary" sx={{boxShadow:"none"}} >
        <Container disableGutters="true" maxWidth="lg">
          <Toolbar sx={{ px: "0 !important" }}>
            <Container sx={{ display: "flex", alignItems: "center" }}>
              {/* LOGO BRANCA */}
              <Box
                component="img"
                src="images/logoBranca.svg"
                width="117px"
                height="16px"></Box>

              {/* MENU DESKTOP */}
              <Stack
                spacing={3}
                direction="row"
                sx={{
                  ml: 5,
                  display: { xs: "none", md: "flex" },
                }}>
                {/* BOTOES ESQUERDA */}
                <Button disableRipple variant="menu" startIcon={<PaidIcon />}>
                  Pagamentos
                </Button>
                <Button
                  disableRipple
                  variant="menu"
                  startIcon={<AssignmentIndIcon />}>
                  Funcionários
                </Button>
                <Button
                  disableRipple
                  variant="menu"
                  startIcon={<MenuBookIcon />}>
                  Contabilidade
                </Button>
              </Stack>

              {/* ICONES DIREITA */}
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                sx={{
                  display: { xs: "none", md: "flex" },
                  ml: "auto",
                }}>
                <IconButton
                  variant="menu"
                  color="white"
                  onClick={(event) => {
                    setAnchorSettings(event.currentTarget);
                  }}>
                  <SettingsIcon />
                </IconButton>
                <IconButton
                  variant="menu"
                  color="white"
                  onClick={(event) => {
                    setAnchorHome(event.currentTarget);
                  }}>
                  <HomeIcon />
                </IconButton>
                <IconButton
                  onClick={(event) => {
                    setAnchorUser(event.currentTarget);
                  }}
                  variant="menu"
                  color="white"
                  sx={{ ml: "16px !important", fontSize: "2.225rem" }}>
                  <AccountCircleIcon fontSize="inherit" />
                </IconButton>
              </Stack>
              {/* FIM MENU DESKTOP */}

              {/* MENU HAMBURGUER */}
              <Box sx={{ ml: "auto", display: { xs: "flex", md: "none" } }}>
                <IconButton color="white">
                  <MenuIcon />
                </IconButton>
              </Box>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
      {/* FIM DO MENU SUPERIOR */}

      {/* SUBMENUS DO MENU PRINCIPAL */}

      {/* SUBMENU SETTINGS */}
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: 225,
        }}
        open={Boolean(anchorSettings)}
        anchorEl={anchorSettings}
        onClose={() => {
          setAnchorSettings(null);
        }}
        PaperProps={{
          variant: "transparent",
        }}>
        <SubMenu width="225px">
          <Button variant="subMenu">Meu Plano</Button>
          <Button variant="subMenu">Dados da Empresa</Button>
          <Button variant="subMenu">Usuários da Empresa</Button>
          <Button variant="subMenu">Registros</Button>
        </SubMenu>
      </Popover>

      {/* SUBMENU HOME */}
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: 260,
        }}
        open={Boolean(anchorHome)}
        anchorEl={anchorHome}
        onClose={() => {
          setAnchorHome(null);
        }}
        PaperProps={{
          variant: "transparent",
        }}>
        <SubMenu width="260px">
          <Button variant="subMenu">Página inicial do contador</Button>
          <Button variant="subMenu">Página inicial da empresa</Button>
        </SubMenu>
      </Popover>

      {/* SUBMENU USER */}
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: 260,
        }}
        open={Boolean(anchorUser)}
        anchorEl={anchorUser}
        onClose={() => {
          setAnchorUser(null);
        }}
        PaperProps={{
          variant: "transparent",
        }}>
        <SubMenu width="260px">
          <Button variant="subMenu">Meu Perfil</Button>
          <Button variant="subMenu">Alterar Empresa</Button>
          <Button variant="subMenu">Sair</Button>
        </SubMenu>
      </Popover>
    </>
  );
}
