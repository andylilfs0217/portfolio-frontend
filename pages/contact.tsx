import styles from '@/styles/Home.module.css'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Head from 'next/head'
import Image from 'next/image'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <main className={styles.main}>
        <Card sx={{ maxWidth: 800 }}>
          <CardHeader title="Contact Me" />
          <CardContent>
            <Typography
              variant="body1"
              component="div"
              sx={{ marginBottom: 1 }}
            >
              If you are interested in my portfolio and want to connect with me.
              Please find me in the following social platforms:
            </Typography>
            <Grid container spacing={2} textAlign="center">
              <Grid xs={12}>
                <Typography variant="body1" component="div">
                  <a href="tel:16476840232" target="_blank" rel="noopener">
                    <Image
                      src="/phone_icon.png"
                      alt="Phone Icon"
                      width="70"
                      height="50"
                      style={{ objectFit: 'contain', verticalAlign: 'middle' }}
                    />
                    +1 (647) 684-0232
                  </a>
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Typography variant="body1" component="div">
                  <a
                    href="mailto:andylilfs@gmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <Image
                      src="/mail_icon.png"
                      alt="Email Icon"
                      width="70"
                      height="50"
                      style={{ objectFit: 'contain', verticalAlign: 'middle' }}
                    />
                    andylilfs@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://www.linkedin.com/in/andyli0217/"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/linkedin/linkedin_logo.png"
                    alt="LinkedIn Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://github.com/andylilfs0217"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/github/github_light_mode_logo.png"
                    alt="GitHub Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://api.whatsapp.com/send?phone=16476840232"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/whatsapp/whatsapp_logo.png"
                    alt="WhatsApp Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://www.facebook.com/andylilfs/"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/facebook/facebook_logo.png"
                    alt="Facebook Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://www.instagram.com/andyli_lfs898/"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/instagram/instagram_logo.png"
                    alt="Instagram Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
              <Grid xs={12}>
                <a
                  href="https://www.youtube.com/channel/UC8gxJNWe4Ms5UH-DNZs7SWQ"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/youtube/youtube_logo.png"
                    alt="YouTube Logo"
                    width="200"
                    height="50"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

export default Contact
