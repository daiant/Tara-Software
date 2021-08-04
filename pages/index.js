import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import { getServerSideProps } from '../lib/movies'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import { useSession, signIn, signOut } from 'next-auth/client'


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/movies')
    const data = await res.json()
    return {
        props: {
            initialMovies: data
        }
    };
}



export default function Home({ initialMovies }) {
  const [ session, loading ] = useSession()
  if(!session) {
    return (
      <div>
        <p>Not Signed In</p>
        <button onClick={()=> signIn()}>Sign In</button>
      </div>
    )
  }
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
          {initialMovies.map(({ id, title, director, genre, location }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={location}><a>{title}</a></Link>
              <br />
              {director}
              <br />
              {genre}
              <br />
              nada mas la verdad
            </li>
          ))}
        </ul>
    </section>
    </Layout>
  )
}
