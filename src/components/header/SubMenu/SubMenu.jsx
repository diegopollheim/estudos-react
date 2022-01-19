import { Card, Wrapper } from "./style";

export default function SubMenu(props) {

    const {children, width } = props;
    console.log(props)

  return (
    <>
      <Wrapper>
        <Card width={width}>{children}</Card>
      </Wrapper>
    </>
  );
}
