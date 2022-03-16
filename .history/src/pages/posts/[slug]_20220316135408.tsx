import { GetServerSideProps } from 'next'


export default function Post() {
  return(
    <h1>trest</h1>
  )
}

export const  getServerSideProps: GetServerSideProps = async ({ req }) => {
  
}