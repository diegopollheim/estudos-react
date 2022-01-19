import MenuSup from "../components/header/MenuSup";
import Footer from "../components/footer/Footer";
import {
  Box,
  Breadcrumbs,
  Card,
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
                    fontSize: "inherit",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}>
                  Empresa Modelo 123
                </Typography>
              </Link>
              <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
                Meu plano
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Container>
      </Box>

      {/* INTRO */}
      <Container
        sx={{
          maxWidth: { sm: "835px" },
          mb: 5,
          mt: 5,
        }}>
        <Card sx={{ p: 3 }}>
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
              <Typography color="#00a650" fontSize="0.875rem" fontWeight={500}>
                Ativa
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
              <Typography variant="body2" sx={{ fontSize: { sm: "1rem" } }}>
                20.382.489/0001-10
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
