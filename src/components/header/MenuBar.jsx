import { AppBar, Button, Container, IconButton, Popover, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import logo from "/public/images/logoBranca.svg";
import MenuIcon from "@mui/icons-material/Menu";
import PaidIcon from "@mui/icons-material/Paid";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";

export default function MenuBar() {
  const [anchorUser, setAnchorUser] = React.useState(null);
  const [anchorSettings, setAnchorSettings] = React.useState(null);
  const [anchorHome, setAnchorHome] = React.useState(null);

  return (
    <>
      <AppBar id="app-bar">
        <Container maxWidth="lg">
          <Toolbar id="tool-bar">
            <Box //Logo
              sx={{ display: "flex", alignItems: "center", mr: 5 }}>
              <Image width="117" height="16" src={logo} />
            </Box>

            <Stack // Menu Desktop Opcões
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}>
              <Button variant="menu" startIcon={<PaidIcon />}>
                Pagamentos
              </Button>
              <Button variant="menu" startIcon={<AssignmentIndIcon />}>
                Funcionários
              </Button>
              <Button variant="menu" startIcon={<MenuBookIcon />}>
                Contabilidade
              </Button>
            </Stack>

            <Stack // Menu Desktop Icones Direita
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                ml: "auto",
                display: { xs: "none", md: "flex" },
              }}>
              <IconButton
                variant="menu"
                onClick={(e) => {
                  setAnchorSettings(e.currentTarget);
                }}>
                <SettingsIcon />
              </IconButton>
              <IconButton variant="menu" onClick={(e) => {
                  setAnchorHome(e.currentTarget);
                }}>
                <HomeIcon />
              </IconButton>
              <IconButton
                variant="menu"
                sx={{ ml: "16px !important", fontSize: "2.225rem" }}
                onClick={(e) => {
                  setAnchorUser(e.currentTarget);
                }}>
                <AccountCircleIcon fontSize="inherit" />
              </IconButton>
            </Stack>

            <Box // Menu Hamburger
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                ml: "auto",
              }}>
              <IconButton color="white">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Popover // SubMenu Home
        open={Boolean(anchorHome)}
        anchorEl={anchorHome}
        onClose={() => {
          setAnchorHome(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Stack>
          <Button variant="subMenu">Página inicial da empresa</Button>
          <Button variant="subMenu">Página inicial do contador</Button>
          
        </Stack>
      </Popover>


      <Popover // SubMenu Settings
        open={Boolean(anchorSettings)}
        anchorEl={anchorSettings}
        onClose={() => {
          setAnchorSettings(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Stack>
          <Button variant="subMenu">Meu Plano</Button>
          <Button variant="subMenu">Dados da Empresa</Button>
          <Button variant="subMenu">Usuários da Empresa</Button>
          <Button variant="subMenu">Registros</Button>
        </Stack>
      </Popover>

      <Popover //SubMenu Perfil
        open={Boolean(anchorUser)}
        anchorEl={anchorUser}
        onClose={() => {
          setAnchorUser(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Stack>
          <Button variant="subMenu">Alterar Empresa</Button>
          <Button variant="subMenu">Meu Perfil</Button>
          <Button variant="subMenu">Sair</Button>
        </Stack>
      </Popover>
    </>
  );
}
