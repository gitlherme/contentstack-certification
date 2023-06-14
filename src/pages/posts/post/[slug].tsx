import { stack } from "@/config/contentstack"
import { GetStaticPaths, GetStaticProps } from "next"
import { Body, Category, Container, PostWrapper } from "./style"
import { H4, Title } from "@/theme/typography"
import { Utils as cs } from "contentstack"
import { renderOption } from "@/utils/entryOptions"

export default function Post({ title, body, category }: any) {
  return (
    <Container>
      <PostWrapper>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Body dangerouslySetInnerHTML={{ __html: body }} />
      </PostWrapper>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = await stack.ContentType('blog_post').
    Query()
    .where("url", `/post/${params?.slug}`)
    .toJSON()
    .find()

  cs.jsonToHTML({
    entry: query,
    paths: ["body"],
    renderOption
  })

  const post = query[0][0]
  const postCategory = await stack.ContentType('post_category').Entry(post.category[0].uid).toJSON().fetch()

  return {
    props: {
      title: post.title,
      category: postCategory.title,
      body: post.body
    },
    revalidate: 60 * 60 * 24 // every 24 hours
  }
}