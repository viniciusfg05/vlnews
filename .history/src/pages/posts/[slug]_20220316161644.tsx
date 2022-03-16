import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../services/prismic'


interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostProps) {
  return(
    <>
      <article>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div>
          {post.content}  
        </div>
      </article>
    </>
  )
}


export const  getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const sessionActive = await getSession({ req })
  const { slug } = params;

  // if (!session)  {
  // }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID<any>('publication', String(slug), {})

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