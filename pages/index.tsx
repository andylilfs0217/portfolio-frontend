import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CardContent, Typography, CardHeader, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LinkNext from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800, margin: 'auto' }}>
              <CardHeader title="About this website" />
              <CardContent>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  👋 Welcome to my personal portfolio website! This site was
                  created using Next.js 13 with React and TypeScript. The UI
                  design is powered by Material UI, which provides a sleek and
                  modern look for the site. 🚀
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  💻 The reason why I created this project is to showcase my
                  skills and experience as a full-stack developer, with
                  expertise in both front-end and back-end development. Through
                  this website, I aim to demonstrate my abilities in building
                  responsive, user-friendly web applications that are both
                  aesthetically pleasing and functionally robust. 🌟
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  📝 In addition to providing information about myself, this
                  site also includes a blog section where I share my thoughts
                  and insights on various topics related to many different
                  things. Whether you&apos;re looking to hire a developer or
                  just interested in learning more about the field, I hope you
                  find this site informative and enjoyable to navigate. 🤓
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 2 }}
                >
                  Thank you for visiting my site and please feel free to contact
                  me if you have any questions or would like to discuss
                  potential collaboration opportunities. 🙌
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800, margin: 'auto' }}>
              <CardHeader title="Introduction to each tab" />
              <CardContent>
                <Typography variant="h6" component="h6">
                  Gallery
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  This tab contains a collection of photographs taken by the
                  developer as a hobby. Users can browse through the images and
                  appreciate the developer&apos;s photography skills.
                </Typography>
                <Typography variant="h6" component="h6">
                  Architecture
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Architecture tab provides information about the technical
                  stack and software architecture used in building the portfolio
                  website. This includes details about the frameworks,
                  languages, and tools used, as well as information about the
                  website&apos;s architecture and infrastructure.
                </Typography>
                <Typography variant="h6" component="h6">
                  Blog
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Blog tab contains a collection of blog posts on a variety
                  of topics related to web development, technology, and other
                  areas of interest. Users can read and comment on the blog
                  posts, and engage in discussions with the developer and other
                  readers.
                </Typography>
                <Typography variant="h6" component="h6">
                  About me
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The About Me tab provides personal information about the
                  developer, including their education, background, and
                  professional experience. Users can learn more about the
                  developer and their skills and experience.
                </Typography>
                <Link variant="h6" component={LinkNext} href="/contact">
                  Contact me
                </Link>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Contact Me tab provides users with a way to get in touch
                  with the developer directly. Users can use this tab to send
                  messages, make inquiries, or provide feedback.
                </Typography>
                <Typography variant="h6" component="h6">
                  To-do list
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  This tab contains a list of unfinished features and
                  functionality that the developer plans to implement in the
                  portfolio website. Users can see what new features are coming
                  and provide feedback and suggestions.
                </Typography>
                <Link component={LinkNext} href="/changelog" variant="h6">
                  Change log
                </Link>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Change Log tab provides a record of all changes and
                  updates made to the portfolio website. Users can see what
                  changes have been made and when, and stay up-to-date with the
                  latest updates and improvements.
                </Typography>
                <Typography variant="h6" component="h6">
                  Profile
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Profile tab is a simple page that displays information
                  about the user who is currently signed in. This may include
                  personal information, avatar, etc.
                </Typography>
                <Typography variant="h6" component="h6">
                  Settings
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Settings tab is a page where users can adjust various
                  settings related to the portfolio website. This may include
                  things like color scheme.
                </Typography>
                <Typography variant="h6" component="h6">
                  Sign in/Sign up
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  The Sign In/Sign Up tab provides users with the ability to
                  create an account and sign in to the portfolio website. This
                  may be required to access certain features, such as the
                  Profile or Settings pages.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </>
  )
}
