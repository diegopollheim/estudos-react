import {StyledButton} from "./style";

export default function ButtonS (props) {
    
    // console.log(props);
  const { children, variant } = props;
  return(
      <StyledButton variant={variant}>{children}</StyledButton>
  )
}
