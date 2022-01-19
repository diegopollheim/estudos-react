import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkNext from "next/link";
import MenuBar from "../header/MenuSup";

export const getServerSideProps = async (ctx) => {
  // Busca os impostos na BD da Bubble
  const impostoResponse = await fetch(
    "https://app.moreto.co/version-test/api/1.1/obj/Fiscal_Impostos?api_token=363a943238598eafa371df6307981a18&constraints=%5B%7B%22key%22%3A%22_Empresa%22%2C%22constraint_type%22%3A%22equals%22%2C%22value%22%3A%221553531033388x991704854024945700%22%7D%2C%7B%22key%22%3A%22Pagamento_Data_de_Pagamento%22%2C%22constraint_type%22%3A%22is_empty%22%7D%2C%7B%22key%22%3A%22Rec%C3%A1lculo_GuiaRecalculada%22%2C%22constraint_type%22%3A%22equals%22%2C%22value%22%3A%22false%22%7D%5D",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const impostoResponseJson = await impostoResponse.json();

  return {
    props: { imposto: impostoResponseJson.response.results },
  };
};

export default function TableRegistroImposto$({ imposto }) {
  return (
    <>
      {/* TABELA */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: "740px" }} aria-label="simple table">
          <TableHead
            sx={{ backgroundColor: "#F5F5F5", color: "text.secondary" }}>
            <TableRow>
              <TableCell sx={{ pl: 3, fontSize:"14px" }}>USUÁRIO</TableCell>
              <TableCell align="center" sx={{fontSize:"14px"}}>DATA</TableCell>
              <TableCell sx={{ p: 0, fontSize:"14px" }}>DESCRIÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {imposto.map((imposto) => (
              <TableRow
                key={imposto._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  height: "40px",
                  pl: 3,
                }}>
                <TableCell sx={{ width: "170px", p: 0, pl: 3 }}>
                  Diego Pollheim
                </TableCell>
                <TableCell align="center" sx={{ width: "170px", p: 0 }}>
                  18-01-2022
                </TableCell>
                <TableCell sx={{ p: 0 }}>Informou o Pagamento</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
