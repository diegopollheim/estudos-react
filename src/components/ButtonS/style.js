import styled, { useTheme } from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  font-size: 14px;
  padding: 8px 32px;
  border-radius: 5px;
  align-self: flex-end;
  cursor: pointer;

  ${({ variant }) => handleVariant(variant)}
`;

const handleVariant = (data) => {
const theme = useTheme();

    switch (data) {
    case "link":
      return `
        background: none;
        color: ${theme.colors.primary};
        width: fit-content;
        padding: 0;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
        `;

    case "filled":
      return `
        background-color: ${theme.colors.primary};
        color: white;
        
        &:hover {
            background-color: ${theme.colorsHover.primary};
            
        }
        `;
    }
};
