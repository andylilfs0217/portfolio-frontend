import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Grid from '@mui/material/Unstable_Grid2'
import {
  CardHeader,
  CardContent,
  Card,
  Typography,
  Link,
  Chip,
} from '@mui/material'
import {
  Timeline,
  timelineOppositeContentClasses,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab'

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Grid container spacing={2} alignItems="center" direction="column">
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Introduction" />
              <CardContent>
                <Typography variant="body1" component="div">
                  Hi, I&apos;m Andy Li, a software engineer based in Toronto,
                  Ontario. I&apos;m a full-stack developer with experience in
                  both front-end (React, Vue, Angular) and back-end technologies
                  (Nest.js, Express.js, Java Spring, and Go). I&apos;ve worked
                  in the logistic and e-commerce industries, where I&apos;ve
                  contributed to various projects and taken on different
                  responsibilities. My expertise in different programming
                  languages, frameworks, and tools enables me to come up with
                  efficient and effective solutions for various targets and
                  goals. You can find more about me on my website, LinkedIn, and
                  GitHub profiles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Downloads" />
              <CardContent sx={{ textAlign: 'center' }}>
                <Link href="/public/Resume.pdf" component="a" download>
                  My Resume (PDF)
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Work Experience" />
              <CardContent>
                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="div">
                        Lalamove - International logistic company
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Full Stack Software Engineer
                      </Typography>
                      <ul>
                        <li>
                          Programmed a backend service with Go, MySQL, and Kafka
                          which receives 30k+ HTTP requests from clients to
                          create quotations and orders each week
                        </li>
                        <li>
                          Integrated Redis in an existing API service which
                          reduced response time by 10 times for 100k+ incoming
                          HTTP requests daily across 20+ countries
                        </li>
                        <li>
                          Designed a corporate management backend service
                          leveraging Java Spring and Event Sourcing techniques
                        </li>
                        <li>
                          Wrote unit test cases for an order placing service and
                          enhanced the test coverage by 100%
                        </li>
                        <li>
                          Discussed with other teams about feature demands and
                          proposed a tech solution to my team
                        </li>
                        <li>
                          Troubleshoot issues in the production environment by
                          utilizing Elasticsearch and setting up alerts in
                          OpenSearch
                        </li>
                        <li>
                          Analyzed, designed, and documented solutions for
                          supporting external platforms
                        </li>
                        <li>
                          Wrote documents regarding the changes and coordinated
                          with involved teams
                        </li>
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="div">
                        Vizualize Limited - Regional e-commerce platform
                        provider
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Software Developer
                      </Typography>
                      <ul>
                        <li>
                          Developed a multi-platform e-commerce mobile
                          application with Flutter and Nest.js
                        </li>
                        <li>
                          Implemented different payment methods, such as Stripe
                          and Alipay, in an e-commerce platform
                        </li>
                        <li>
                          Architected an order processing service using Angular,
                          Nest.js, TypeORM, and MySQL
                        </li>
                        <li>
                          Communicated with clients to deliver a satisfying
                          product
                        </li>
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="div">
                        Aigniter Holdings - Local payment service provider and
                        e-commerce platform
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Software Engineer
                      </Typography>
                      <ul>
                        <li>
                          Established a multi-platform mobile application using
                          Flutter with 10k+ downloads on the Play Store
                        </li>
                        <li>
                          Constructed an internal dashboard with Vue and
                          Express.js to show real-time statistics on revenue and
                          business performance
                        </li>
                        <li>
                          Created and presented demos for the product team to
                          show what the team achieved
                        </li>
                      </ul>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Certification" />
              <CardContent sx={{ textAlign: 'center' }}>
                <Link
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/9395E6DMTJUZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Data Analytics Specialization - Coursera
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Projects" />
              <CardContent sx={{ textAlign: 'center' }}>
                <div style={{ marginBottom: 5 }}>
                  <Link
                    href="https://www.andylilfs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Self Portfolio
                  </Link>{' '}
                  (
                  <Link
                    href="https://github.com/andylilfs0217/portfolio-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front-end
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://github.com/andylilfs0217/portfolio-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back-end
                  </Link>
                  )
                </div>
                <div style={{ marginBottom: 5 }}>
                  <Link
                    href="https://github.com/andylilfs0217/delivery_order_simulation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Delivery Order Microservice Simulation
                  </Link>
                </div>
                <div style={{ marginBottom: 5 }}>
                  <Link
                    href="https://github.com/andylilfs0217/epidemic_simulation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Epidemic Simulation
                  </Link>
                </div>
                <div style={{ marginBottom: 5 }}>
                  <Link
                    href="https://github.com/andylilfs0217/fyp-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Home Workout Detector
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Skills" />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                  Programming languages
                </Typography>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <Chip sx={{ margin: 1 }} label="Python" />
                  <Chip sx={{ margin: 1 }} label="TypeScript" />
                  <Chip sx={{ margin: 1 }} label="JavaScript" />
                  <Chip sx={{ margin: 1 }} label="Dart" />
                  <Chip sx={{ margin: 1 }} label="Go" />
                  <Chip sx={{ margin: 1 }} label="Java" />
                  <Chip sx={{ margin: 1 }} label="PHP" />
                </div>
                <Typography variant="h6" component="div">
                  Framework and tools
                </Typography>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <Chip sx={{ margin: 1 }} label="Flutter" />
                  <Chip sx={{ margin: 1 }} label="Vue" />
                  <Chip sx={{ margin: 1 }} label="Angular" />
                  <Chip sx={{ margin: 1 }} label="React" />
                  <Chip sx={{ margin: 1 }} label="Next.js" />
                  <Chip sx={{ margin: 1 }} label="Node.js" />
                  <Chip sx={{ margin: 1 }} label="Nest.js" />
                  <Chip sx={{ margin: 1 }} label="Express.js" />
                  <Chip sx={{ margin: 1 }} label="Java Spring" />
                  <Chip sx={{ margin: 1 }} label="MySQL" />
                  <Chip sx={{ margin: 1 }} label="Kafka" />
                  <Chip sx={{ margin: 1 }} label="Redis" />
                  <Chip sx={{ margin: 1 }} label="GitHub" />
                  <Chip sx={{ margin: 1 }} label="Docker" />
                  <Chip sx={{ margin: 1 }} label="OpenSearch" />
                  <Chip sx={{ margin: 1 }} label="JIRA" />
                  <Chip sx={{ margin: 1 }} label="Git" />
                  <Chip sx={{ margin: 1 }} label="SQL" />
                  <Chip sx={{ margin: 1 }} label="Agile (Scrum)" />
                  <Chip sx={{ margin: 1 }} label="Linux" />
                </div>

                <Typography variant="h6" component="div">
                  Spoken languages
                </Typography>
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                  <Chip sx={{ margin: 1 }} label="English" />
                  <Chip sx={{ margin: 1 }} label="Mandarin" />
                  <Chip sx={{ margin: 1 }} label="Cantonese" />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader title="Education" />
              <CardContent>
                <Timeline
                  sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                      flex: 0.2,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      2017 - 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="div">
                        The Chinese University of Hong Kong, Hong Kong
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Bachelor of Science - BS, Computer Science (Verified by{' '}
                        <Link
                          href="https://www.credly.com/badges/2d9980b9-fcf6-4d15-bac4-463a87bfa497?source=linked_in_profile"
                          component="a"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          World Education Services
                        </Link>
                        )
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                      2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" component="div">
                        McGill University, Canada
                      </Typography>
                      <Typography variant="subtitle1" component="div">
                        Exchange Program
                      </Typography>
                    </TimelineContent>
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

export default AboutMe
