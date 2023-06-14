import { theme } from "@/theme";
import { styled } from "styled-components";

export const Card = styled.div`
  background-color: ${theme.colors.warning};
  color: ${theme.colors.background};
  padding: 1rem;
  border-radius: 8px;
  width: 500px;
  span {
    font-family: ${theme.fonts.primary};
  }
`
export const DateWrapper = styled.div``