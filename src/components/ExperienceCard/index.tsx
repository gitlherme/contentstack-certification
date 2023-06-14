import { H3, H4, Paragraph } from "@/theme/typography"
import { Card, DateWrapper } from "./styles"

interface CardProps {
  company: string
  role: string
  jobDescription: string
  startDate: string
  endDate: string
}



export const ExperienceCard = ({ company, role, jobDescription, startDate, endDate }: CardProps) => {
  return (
    <Card>
      <H3>{company}</H3>
      <H4>{role}</H4>
      <Paragraph>{jobDescription}</Paragraph>
      <DateWrapper>
        <span>{`${startDate} / ${endDate == null ? 'today' : endDate}`}</span>
      </DateWrapper>
    </Card>
  )
}