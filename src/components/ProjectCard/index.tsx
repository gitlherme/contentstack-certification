import { H3 } from "@/theme/typography"
import { Body, CardWrapper, TextWrapper, Thumbnail } from "./styles"

interface CardProps {
  title: string
  description: string
  thumbnail: string
  link: {
    title: string
    href: string
  }
}


export const ProjectCard = ({ title, description, thumbnail, link}: CardProps) => {
  return (
    <CardWrapper>
      <Thumbnail src={thumbnail} />
      <TextWrapper>
        <H3>{title}</H3>
        <Body dangerouslySetInnerHTML={{ __html: description }} />
        <a href={link.href} target="_blank">{link.title}</a>
      </TextWrapper>
    </CardWrapper>
  )
}