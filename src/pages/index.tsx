import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButtton } from '../components/subscribeButtton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | vl.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News abount the <span>React</span> World</h1>
          <p>
            Get access to all the publication <br />
            <span>For {product.amount} month</span>
          </p>

          <SubscribeButtton priceId={product.priceId}/>
        </section>

        <img src="/avatar.svg" alt="Girl coding" />
      </main> 
    </>
  )
}

//carregamento ada API primeiro que a pagina em si
export const getServerSideProps: GetServerSideProps = async () => {
  //
  const price = await stripe.prices.retrieve('price_1KaNxwF0aa4KZVxj1gsjE5Ya') /*, { //'retrieve - buscar uma só'
    expand: ['product'] //para buscar todas as informações do produto
  })*/

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)  // o valor vem em centavos entao vamos dividir por 100
  }

  return {
    props: {
      product,
    }
  }
}
