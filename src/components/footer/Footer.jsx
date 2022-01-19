import { Box, Stack } from "@mui/material";
import Image from "next/image";
import logoCinza from "/public/images/logoCinza.svg";


export default function Footer() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" height={300}>
        <Box width={160} height={30}>
          <Image src={logoCinza} layout="responsive" />
        </Box>
      </Stack>
    </>
  );
}
