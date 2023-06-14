import { Title } from "@/theme/typography";
import { PostsList, PostsWrapper } from "./style";
import { stack } from "@/config/contentstack";
import { PostCard } from "@/components/PostCard";
import { GetStaticProps } from "next";
import { Container } from "./post/style";

export default function Posts({ posts }: any) {
  return (
    <Container>
      <PostsWrapper>
        <Title>Blog Posts</Title>
        <PostsList>
          {
            posts.map((post: any) => {
              return (
                <PostCard title={post.title} url={post.url} key={post.title} />
              )
            })
          }
        </PostsList>
      </PostsWrapper>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await stack.ContentType('blog_post').Query().toJSON().find()
  return {
    props: { posts: posts[0] },
    revalidate: 60 * 60 * 24 // every 24 hours
  }
}