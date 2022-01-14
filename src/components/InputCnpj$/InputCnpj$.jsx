import * as React from "react";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { OutlinedInput } from "@mui/material";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00.000.000/0000-00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputCnpj$(props) {
  const [value, setValue] = React.useState("00.000.000/0000-00");

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <FormControl sx={{ my: 1 }} variant="outlined">
        <InputLabel
          sx={{ bgcolor: "white", paddingRight: "10px" }}
          htmlFor="formatted-text-mask-input">
          {props.label}
        </InputLabel>
        <OutlinedInput
          value={value.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          label={props.label}
        />
      </FormControl>
    </>
  );
}
