import MenuSup from "../components/header/MenuSup";
import Footer from "../components/footer/Footer";
import {
  Box,
  Breadcrumbs,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
          Simples Nacional
        </Typography>
      </Breadcrumbs>
    </Stack>
  </Container>
</Box>

{/* FOOTER */}
<Footer />
    </>
  );
}
