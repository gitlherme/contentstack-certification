import { H3 } from "@/theme/typography"
import { CardWrapper } from "./styles"

interface CardProps {
  title: string
  url: string
}


export const PostCard = ({ title, url}: CardProps) => {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <a href={`/posts/${url}`}>Read more</a>
    </CardWrapper>
  )
}