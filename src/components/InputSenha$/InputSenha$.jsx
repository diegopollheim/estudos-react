import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function InputSenha$(props) {
  const [showPw, setShowPw] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl sx={{ my: 1 }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{ bbColor: "white" }}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          id="password"
          value={props.value}
          type={showPw ? "text" : "password"}
          onChange={(e) => {
            props.setPw(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setShowPw(!showPw);
                }}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPw ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={props.label}
        />
      </FormControl>
    </>
  );
}
