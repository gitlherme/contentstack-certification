import { Paragraph, Title } from "@/theme/typography";
import { HomeWrapper, TextWrapper } from "./styles";

export default function Home() {
  return (
    <HomeWrapper>
      <TextWrapper>
        <Title>Hello! 🤙</Title>
        <Paragraph>
          I'm Guilherme Vieira, 21. Software Engineer based in Brazil. 🌍
          Currently I work with Drupal and React at CI&T. In my free time, I try to help the tech community
          being co-coordinator at @perifaCode - a tech community focused on help suburb people to improve their
          skills and rise in tech career.
        </Paragraph>
      </TextWrapper>
    </HomeWrapper>
  )
}