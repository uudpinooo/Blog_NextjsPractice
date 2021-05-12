import Image from "next/image";
import Link from 'next/link'
import styled from "styled-components";
import { Layout } from "../../layouts/Layout";
import { getPaths, getPostData } from "../../lib/posts";

const Post = ({ data, content }) => {
  return (
    <Layout>
      <StyledTitle>{data.title}</StyledTitle>
      <p>{data.date}</p>
      <Image src={data.image} width={1200} height={400} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link href='/' passHref>
        <StyledLink>もどる</StyledLink>
      </Link>
    </Layout>
  );
};

export const getStaticPaths = () => {
  const paths = getPaths();
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const post = await getPostData(id);
  return {
    props: {
      data: post.data,
      content: post.content,
    }
  }
}

const StyledTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
`;

const StyledLink = styled.a`
  color: #555;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;

export default Post;