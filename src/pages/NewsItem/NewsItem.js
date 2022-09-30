import './NewsItem.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer, NavigationBar } from '../../components'
import { Link } from 'react-router-dom'

const NewsItem = () => {
  return (
    <div>
        <NavigationBar />
        <section className='news-item the-header'>
        </section>
        <section className='news-item-content'>
          <Container>
            <h1 className='text-center mt-3'>News Item 1</h1>
            <p className='text-center news-item-date'>12 Aug 2022</p>
            <p className='my-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium iaculis dui ac fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, quam vel porttitor varius, nibh sem facilisis tellus, sit amet efficitur erat nibh id ligula. Etiam scelerisque cursus nulla mattis laoreet. Aliquam venenatis, mi molestie fermentum rhoncus, velit neque volutpat odio, non ultricies nulla arcu et turpis. Sed magna tortor, dapibus ac enim sit amet, imperdiet viverra risus. Donec suscipit diam at justo pharetra, a ullamcorper massa faucibus. Curabitur rhoncus mauris vel semper ultricies. Vivamus consectetur semper orci eu ullamcorper. Sed et orci in nunc pretium feugiat.
              <br/><br/>
              Sed venenatis turpis eget semper mollis. Pellentesque scelerisque lorem sit amet orci finibus, non consectetur leo tempus. Nam sagittis magna vel fringilla volutpat. Aliquam vulputate turpis quis nunc ornare vehicula. Mauris lacinia varius sem, vel rutrum nisl sagittis eget. Vestibulum auctor tellus erat, sit amet fringilla nibh efficitur id. Donec efficitur tristique turpis, at lobortis risus. Sed condimentum lacus et ex egestas feugiat in sed est. Donec porta lorem nec massa convallis eleifend. Ut viverra tincidunt facilisis. Nunc et sodales risus, eu interdum lectus. Fusce at mi tellus. 
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium iaculis dui ac fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, quam vel porttitor varius, nibh sem facilisis tellus, sit amet efficitur erat nibh id ligula. Etiam scelerisque cursus nulla mattis laoreet. Aliquam venenatis, mi molestie fermentum rhoncus, velit neque volutpat odio, non ultricies nulla arcu et turpis. Sed magna tortor, dapibus ac enim sit amet, imperdiet viverra risus. Donec suscipit diam at justo pharetra, a ullamcorper massa faucibus. Curabitur rhoncus mauris vel semper ultricies. Vivamus consectetur semper orci eu ullamcorper. Sed et orci in nunc pretium feugiat.
              <br/><br/>
              Sed venenatis turpis eget semper mollis. Pellentesque scelerisque lorem sit amet orci finibus, non consectetur leo tempus. Nam sagittis magna vel fringilla volutpat. Aliquam vulputate turpis quis nunc ornare vehicula. Mauris lacinia varius sem, vel rutrum nisl sagittis eget. Vestibulum auctor tellus erat, sit amet fringilla nibh efficitur id. Donec efficitur tristique turpis, at lobortis risus. Sed condimentum lacus et ex egestas feugiat in sed est. Donec porta lorem nec massa convallis eleifend. Ut viverra tincidunt facilisis. Nunc et sodales risus, eu interdum lectus. Fusce at mi tellus. 
            </p>
            <p className='text-center mt-5'><Link to='/news'>Back To News List</Link></p>
          </Container>
        </section>
        <Footer/>
    </div>
  )
}

export default NewsItem