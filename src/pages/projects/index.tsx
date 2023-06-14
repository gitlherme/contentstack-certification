import { ProjectCard } from "@/components/ProjectCard"
import { stack } from "@/config/contentstack"
import { H2, Title } from "@/theme/typography"
import { Container } from "../posts/post/style"
import { GithubProjectsWrapper, LiveProjectsWrapper, ProjectsWrapper } from "./styles"

export default function Projects({ title, liveProjects, githubProjects }: any) {
  return (
    <Container>
      <ProjectsWrapper>
        <Title>{title}</Title>
        <GithubProjectsWrapper>
          <H2>Github Projects</H2>
          {
            githubProjects.map((project: any) => {
              const { title, link_to_github, description, thumbnail } = project.github_project
              return (
                <ProjectCard
                  description={description}
                  link={link_to_github}
                  thumbnail={thumbnail.url}
                  title={title}
                  key={`${title}+${link_to_github}`}
                />
              )
            })
          }
        </GithubProjectsWrapper>
        <LiveProjectsWrapper>
          <H2>Live Projects</H2>
          {
            liveProjects.map((project: any) => {
              const { title, link_to_demo, description, thumbnail } = project.live_demo
              return (
                <ProjectCard
                  description={description}
                  link={link_to_demo}
                  thumbnail={thumbnail.url}
                  title={title}
                  key={`${title}+${link_to_demo}`}
                />
              )
            })
          }
        </LiveProjectsWrapper>
      </ProjectsWrapper>
    </Container>
  )
}

export const getStaticProps = async () => {
  const {
    title,
    project_type
  } = await stack.ContentType('projects').Entry('blt90bb1469603cab50').toJSON().fetch()

  const liveProjects = project_type.filter((project: any) => project.live_demo)
  const githubProjects = project_type.filter((project: any) => project.github_project)

  return {
    props: {
      title,
      liveProjects,
      githubProjects
    }
  }
}