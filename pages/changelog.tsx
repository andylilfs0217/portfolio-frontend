import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Card, CardContent, CardHeader, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import moment from 'moment'
import { marked } from 'marked'

export const getStaticProps = async () => {
  const frontendRes = await fetch(
    `${process.env.BACKEND_PATH}/github/frontend/releases`
  )
  const frontendData = await frontendRes.json()
  const backendRes = await fetch(
    `${process.env.BACKEND_PATH}/github/backend/releases`
  )
  const backendData = await backendRes.json()
  return { props: { frontend: frontendData, backend: backendData } }
}

const ChangeLog = ({ frontend, backend }: { frontend: any; backend: any }) => {
  return (
    <>
      <Head>
        <title>Change Log</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        {/* Front end change log */}
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader
                title="Change Log (Front end)"
                subheader="This card shows all releases for this portfolio website (front end). All information is fetched from GitHub API."
              />
              <CardContent>
                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  {frontend.map((release: any) => {
                    return !!release ? (
                      <TimelineItem key={release.id}>
                        <TimelineOppositeContent color="textSecondary">
                          {moment(release.published_at).format('DD MMM YYYY')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Link
                            href={release.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="h6"
                          >
                            🔖 {release.tag_name}
                          </Link>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: marked.parse(release.body),
                            }}
                          />
                        </TimelineContent>
                      </TimelineItem>
                    ) : (
                      <></>
                    )
                  })}
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      20 Feb 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Project started</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
          {/* Back end change log */}
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader
                title="Change Log (Back end)"
                subheader="This card shows all releases for this portfolio website (back end). All information is fetched from GitHub API."
              />
              <CardContent>
                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  {backend.map((release: any) => {
                    return !!release ? (
                      <TimelineItem key={release.id}>
                        <TimelineOppositeContent color="textSecondary">
                          {moment(release.published_at).format('DD MMM YYYY')}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Link
                            href={release.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="h6"
                          >
                            🔖 {release.tag_name}
                          </Link>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: marked.parse(release.body),
                            }}
                          />
                        </TimelineContent>
                      </TimelineItem>
                    ) : (
                      <></>
                    )
                  })}
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      23 Feb 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Project started</TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default ChangeLog
