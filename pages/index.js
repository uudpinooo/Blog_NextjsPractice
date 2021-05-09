import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Layout } from '../layouts/Layout'
import { getPostsData } from '../lib/posts';

export default function Home() {
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
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
          <p>本文</p>
        </main>
      </Layout>
    </>
  )
}

const StyledImg = styled(Image)`
  border-radius: 50%50%;
`;