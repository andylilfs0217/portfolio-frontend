import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CardContent, Typography, CardHeader, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LinkNext from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const homeRes = await fetch(`${process.env.REACT_APP_BACKEND_PATH}/home`)
  let homeData = homeRes.ok ? await homeRes.json() : []
  const temp = new Map<string, any[]>()
  homeData.data.forEach((entry: any) => {
    const existing = temp.get(entry.session) ?? []
    existing.push(entry)
    temp.set(entry.session, existing)
  })
  homeData.data = Object.fromEntries(temp)
  return { props: { homeData } }
}

export default function Home({ homeData }: { homeData: any }) {
  return (
    <>
      <Head>
        <title>Andy Portfolio Home</title>
        <meta
          name="description"
          content="This is a personal website created by Andy Li."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Grid container spacing={2}>
          {Object.values(homeData.data).map((session: any, key: number) => {
            return (
              <Grid xs={12} key={key}>
                <Card sx={{ maxWidth: 800, margin: 'auto' }}>
                  <CardHeader title={session[0].session} />
                  <CardContent>
                    {session.map((description: any) => {
                      return (
                        <>
                          {!description.href ? (
                            <Typography variant="h6" component="div">
                              {description.header1}
                            </Typography>
                          ) : (
                            <Link
                              href={description.href}
                              variant="h6"
                              component={LinkNext}
                            >
                              {description.header1}
                            </Link>
                          )}
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{ marginBottom: 1 }}
                          >
                            {description.description}
                          </Typography>
                        </>
                      )
                    })}
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </main>
    </>
  )
}
