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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
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
        <h3>To Do:</h3>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </AppWindow>
      <VerticalSpace />
    </AppBackground>
  </AppWindow>
)

export default App
