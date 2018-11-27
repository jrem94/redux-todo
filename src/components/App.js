import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from 'styled-components'

const AppWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const VerticalSpace = styled.div`
  margin: 25px;
`

const AppBackground = styled.div`
  background-color: seagreen;
  width: 25%;
`

const App = () => (
  <AppWindow>
    <AppBackground>
      <VerticalSpace />
      <AppWindow>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </AppWindow>
      <VerticalSpace />
    </AppBackground>
  </AppWindow>
)

export default App
