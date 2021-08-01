import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedMoviesData } from '../lib/movies'
import Link from 'next/link'


export async function getStaticProps() {
  const allMoviesData = getSortedMoviesData()
  return {
    props: {
      allMoviesData
    }
  }
}

export default function Home({ allMoviesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Discover movies and more. Free!</p>
      </section>

      {/* In this section we will be listing all movies in the filesystem. */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Movies</h2>
        <ul className={utilStyles.list}>
          {allMoviesData.map(({ id, extension }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={'/movies/'+id}><a>{id}</a></Link>
              <br />
              {extension}
              <br />
              nada mas la verdad
            </li>
          ))}
        </ul>
    </section>
    </Layout>
  )
}
