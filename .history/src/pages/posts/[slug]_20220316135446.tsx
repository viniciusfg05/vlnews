import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'


export default function Post() {
  return(
    <h1>trest</h1>
  )
}

export const  getServerSideProps: GetServerSideProps = async ({ req }) => {
  const sessionActive = await getSession({ req })
}