import { theme } from "@/theme";
import { styled } from "styled-components";

export const CardWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  a {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.error};
    font-weight: bold;
  }
  background-color: #EDEDED;
  margin: 0.8rem 0;
  border-radius: 8px;
`
export const Thumbnail = styled.img`
  max-width: 600px;
  padding: 1rem;
`

export const Body = styled.div`
  font-family: ${theme.fonts.primary};
`

export const TextWrapper = styled.div`
  padding: 1rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 8px;
`