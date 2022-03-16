import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { getPrismicClient } from '../../services/prismic'


export default function Post() {
  return(
    <h1>trest</h1>
  )
}

export const  getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const sessionActive = await getSession({ req })
  const { slug } = params

  // if (!session)  {
  // }

  const prismic = getPrismicClient(req)

  const response = await prismic.getByID<any>('publication', (slug) , {})
}