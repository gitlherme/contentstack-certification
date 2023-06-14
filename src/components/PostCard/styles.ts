import { theme } from "@/theme";
import { styled } from "styled-components";

export const CardWrapper = styled.div`
  width: 400px;
  background-color: ${theme.colors.error};
  color: ${theme.colors.lightText};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 2.5rem;
    font-family: ${theme.fonts.primary};
  }
  a {
    color: ${theme.colors.lightText};
    font-family: ${theme.fonts.primary};
  }
`