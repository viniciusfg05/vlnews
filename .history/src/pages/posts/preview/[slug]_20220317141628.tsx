import { GetServerSideProps, GetStaticProps } from 'next'
import { getSession } from 'next-auth/react'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../../services/prismic'
import styles from '../post.module.scss'


interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  return(
    <main className={styles.container}> 
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}/>
      </article>
    </main>
  )
}


export const getStaticPaths = () => {
  return {
    paths: []
  }
}

export const  getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient()

  const response = await prismic.getByUID<any>('posts', String(slug), {})


  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post,
    }
  }
}