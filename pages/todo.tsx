import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material'
import React from 'react'
import moment from 'moment'

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_PATH}/todo`, {})
  const data = res.ok ? await res.json() : []
  const todoList = data.data
  return { props: { todoList } }
}

const Todo = ({ todoList }: { todoList: any[] }) => {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      <Head>
        <title>To-do list</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Grid container spacing={2} alignItems="center" direction="column">
          <Grid xs={12}>
            <Card sx={{ maxWidth: 800 }}>
              <CardHeader
                title="To do list"
                subheader="This page list out all features that are completed and will be completed in the future in this portfolio."
              />
              <CardContent>
                <FormGroup>
                  {todoList.map((todo) => {
                    return (
                      <FormControlLabel
                        key={todo.id}
                        control={
                          <Checkbox
                            checked={!!todo.checked_at}
                            sx={{
                              '&.Mui-checked': {
                                '& + .MuiFormControlLabel-label': {
                                  color: 'lightgrey',
                                  textDecoration: 'line-through',
                                },
                              },
                            }}
                          />
                        }
                        label={`${todo.title.toString()}${
                          !!todo.checked_at
                            ? ` [${moment(todo.checked_at).format(
                                'YYYY-MMM-DD'
                              )}]`
                            : ''
                        }`}
                      />
                    )
                  })}
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default Todo
