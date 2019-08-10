import React from 'react'
import { Link } from 'react-router-dom'

import MemoryList from './memory/MemoryList'
import Header from './Header'
import Fab from './buttons/FloatingActionButton'

class Home extends React.Component {

  render() {

    return (
      <nav >
        <Header />
        <main>
          <MemoryList />
          <Link to="/memory/add">
            <Fab />
          </Link>
        </main>
      </nav>
    );
  }
}

export default Home;
