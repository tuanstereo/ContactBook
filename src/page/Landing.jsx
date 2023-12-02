import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { useSelector } from 'react-redux'
const Landing = () => {
  const theme = useSelector(state => state.theme)

  return (
    <div className={theme ? "active-theme main": "main"}>
      <Header />
      <Content />
    </div>
  )
}

export default Landing