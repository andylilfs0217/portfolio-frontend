import { Page, Pageable } from '@/modules/Pageable'
import { Post } from '@/modules/Post'
import styles from '@/styles/Home.module.css'
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Pagination,
  Typography,
} from '@mui/material'
import Head from 'next/head'
import { marked } from 'marked'
import { useRouter } from 'next/router'
import moment from 'moment'

export const getServerSideProps = async ({ params }: any) => {
  const page = params.page - 1
  const pageRes = await fetch(
    `${process.env.REACT_APP_BLOG_PATH}/posts?page=${page}&size=10`
  )
  const postPage = pageRes.ok ? await pageRes.json() : new Page<Post>()
  return { props: { postPage } }
}

type Props = {
  postPage: Page<Post>
}

const Blog = ({ postPage }: Props) => {
  const router = useRouter()
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/blogs/${value}`)
  }

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Grid container spacing={2} alignItems="center" direction="column">
          {postPage.content?.map((post: Post) => {
            return (
              <Grid key={post.id} item={true} xs={12}>
                <Card sx={{ maxWidth: 800 }}>
                  <CardHeader
                    title={post.title}
                    subheader={`Last updated at: ${moment(
                      post.updatedAt
                    ).format('YYYY-MM-DD hh:mm:ss')}`}
                  />
                  <CardContent>
                    <Typography variant="body1" component="div">
                      <div
                        style={{ wordBreak: 'break-word' }}
                        dangerouslySetInnerHTML={{
                          __html: marked.parse(post.content ?? ''),
                        }}
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Pagination
          style={{ marginTop: 30 }}
          count={postPage.totalPages}
          onChange={handleChange}
        />
      </main>
    </>
  )
}

export default Blog
