import './NewsItem.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import { NavigationBar } from '../../components'

const NewsItem = () => {
  return (
    <div>
        <NavigationBar />
        <Container>
            <section className='the-news-item'>
                <h2>News Item 1</h2>
            </section>
        </Container>
    </div>
  )
}

export default NewsItem