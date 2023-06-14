import { theme } from "@/theme";
import { styled } from "styled-components";

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 2rem 0;
  color: ${theme.colors.lightText};
`

export const PostsList = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`