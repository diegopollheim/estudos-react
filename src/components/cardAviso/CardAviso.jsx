import { Card } from "@mui/material";

export default function CardAviso(props) {
  return (
    <>
      <Card sx={{backgroundColor:"#FFF6B2", p:2, my:3}} >{props.children}</Card>
    </>
  );
}
