import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Layout } from '../layouts/Layout'
import { getAllPostsData } from '../lib/posts';

export default function Home({ postsData }) {
  return (
    <>
      <Head>
        <title>Next Practice</title>
        <meta name="description" content="Next.js練習用のブログです" />
      </Head>
      <Layout>
        <main>
          <StyledImg
            src='/profileIcon.jpg'
            width={200}
            height={200}
          />
          <StyledDiv>
            {postsData.map(data =>
              <StyledPost key={data.id}>
                <Link href={`/posts/${data.id}`} passHref>
                  <StyledLink>{data.title}</StyledLink>
                </Link>
                <p>{data.date}</p>
              </StyledPost>
            )}
          </StyledDiv>
        </main>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  const postsData = getAllPostsData();
  return {
    props: {
      postsData,
    }
  }
}

const StyledDiv = styled.div`
  margin: 2rem auto;
`;

const StyledPost = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const StyledImg = styled(Image)`
  border-radius: 50%;
`;