import { Box, Breadcrumbs, Button, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuSup from "../components/header/MenuSup";

export default function Page() {
  return (
    <>
      <MenuSup />
      
      {/* BREADCRUMBS */}
      <Box sx={{ backgroundColor: "#fff", height: "38px", display: "flex", alignItems: "center", boxShadow: "rgb(170 170 170 / 60%) 2px 2px 4px 0px",}}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Breadcrumbs separator=">" sx={{fontSize:"14px"}}>
            <Link color="text.secondary" underline="hover">Empresa Modelo</Link>
            <Typography color="text.primary" sx={{fontSize:"inherit"}}>Guia de Impostos</Typography>
          </Breadcrumbs>
          <IconButton size="auto" disableRipple >
          <MoreVertIcon fontSize="inherit" sx={{color:"black"}}/>
          </IconButton>
          </Stack>
        </Container>
      </Box>


{/* CONTEÚDO INICIAL */}
<Container maxWidth={false} sx={{mt:4, maxWidth:"1020px"}}>
<Box sx={{display:"flex", justifyContent:"space-between"}}>
  <Typography component="h1" variant="h2">
    Guia de Pagamentos
  </Typography>
  <Button variant="outlined">Ver relatório de impostos</Button>
</Box>
</Container>
    </>
  );
}
