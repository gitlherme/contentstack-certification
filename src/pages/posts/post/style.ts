import { theme } from "@/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.background};
  min-height: 92.5vh;
`

export const PostWrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  color: ${theme.colors.lightText};
  h1 {
    color: ${theme.colors.error};
  }
`

export const Body = styled.div`
  text-align: justify;
  font-family: ${theme.fonts.primary};
`
export const Category = styled.span`
  display: block;
  padding: 0.5rem;
  background-color: aquamarine;
  width: fit-content;
  border-radius: 8px;
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.background};
`