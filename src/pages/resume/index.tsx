import { stack } from "@/config/contentstack"
import { EducationList, EducationWrapper, ExperienceList, ExperienceWrapper, ResumeWrapper, SkillsWrapper } from "./styles"
import { EducationCard } from "@/components/EducationCard"
import { ExperienceCard } from "@/components/ExperienceCard"
import { H2, H4, Title } from "@/theme/typography"
import { StarRating } from "@/components/StarRate"
import { Container } from "../posts/post/style"

export default function Resume({ title, educational, professional_experience, skills }: any) {
  return (
    <Container>
      <ResumeWrapper>
        <Title>{title}</Title>
        <EducationWrapper>
          <H2>Education</H2>
          <EducationList>
            {
              educational.map((education: any) => {
                return (
                  <EducationCard
                    school={education.school}
                    course={education.course}
                    startDate={education.start_date}
                    endDate={education.end_date}
                    type={education.type}
                    key={`${education.start_date}-${education.course}-${education.school}`}
                  />
                )
              })
            }
          </EducationList>
        </EducationWrapper>
        <ExperienceWrapper>
          <H2>Professional Experience</H2>
          <ExperienceList>
            {
              professional_experience.map((experience: any) => {
                return (
                  <ExperienceCard
                    jobDescription={experience.jobDescription}
                    company={experience.company}
                    startDate={experience.start_date}
                    endDate={experience.end_date}
                    role={experience.role}
                    key={`${experience.role}-${experience.company}`}
                  />
                )
              })
            }
          </ExperienceList>
        </ExperienceWrapper>
        <SkillsWrapper>
          <H2>Skills</H2>
          {
            skills.map((skill: any) => {
              return (
                <div key={skill.name}>
                  <H4>{skill.name}</H4>
                  <StarRating rating={skill.rating} key={skill.name} />
                </div>
              )
            })
          }
        </SkillsWrapper>
      </ResumeWrapper>
    </Container>
  )
}

export const getStaticProps = async () => {
  const {
    title,
    educational,
    professional_experience,
    skills
  } = await stack.ContentType('resume').Entry('blt7a513cca2f5a1e42').toJSON().fetch()
  return {
    props: {
      title,
      educational,
      professional_experience,
      skills
    }
  }
}