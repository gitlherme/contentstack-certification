import { theme } from "@/theme";
import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  height: 92.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`
export const TextWrapper = styled.div`
  width: 800px;
  text-align: justify;
  color: ${theme.colors.lightText};
`