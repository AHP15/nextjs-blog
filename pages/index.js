import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsdata } from '../lib/posts';
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps(){
  const allPosts = getSortedPostsdata();

  return {
    props: {
      allPosts,
    }
  };
}

export default function Home({allPosts}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>I'm Abdessittir Harkati, I'm a web developer looking for a full-time job</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
