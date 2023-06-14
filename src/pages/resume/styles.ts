import { theme } from "@/theme";
import { styled } from "styled-components";

export const ResumeWrapper = styled.div`
  max-width: 1080px;
  min-width: 800px;
  color: ${theme.colors.lightText};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const EducationList = styled.div`
  display: flex;
  gap: 1rem;
`
export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ExperienceList = styled.div`
  display: flex;
  gap: 1rem;
`
export const SkillsWrapper = styled.div`
  
`