import React from 'react'
import { TaskList } from './TaskList'
import { Task } from './Task'

export const StartPage = () => {
  return (
    <>
    <section className="container">
      <Task />
    <TaskList />
    </section>
    </>
  )
}
