import { H3, H4 } from "@/theme/typography"
import { Card, DateWrapper } from "./styles"

interface CardProps {
  school: string
  course: string
  startDate: string
  endDate: string
  type: string
}


export const EducationCard = ({ school, course, startDate, endDate, type }: CardProps) => {
  return (
    <Card>
      <H3>{school}</H3>
      <H4>{`${type} - ${course}`}</H4>
      <DateWrapper>
        <span>{`${startDate} / ${endDate}`}</span>
      </DateWrapper>
    </Card>
  )
}