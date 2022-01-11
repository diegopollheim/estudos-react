import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 12px;
`;

export const Card = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  padding: 8px 0px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 29px;
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.2));
  }
`;
