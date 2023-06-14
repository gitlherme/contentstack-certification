import { theme } from "@/theme";
import { styled } from "styled-components";

export const ProjectsWrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  h1 {
    padding: 1rem 0;
    color: ${theme.colors.lightText};
  }
  h2 {
    color: ${theme.colors.lightText};
  }
`

export const GithubProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding-bottom: 1rem;
  }
`

export const LiveProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    padding: 1rem 0;
  }
`