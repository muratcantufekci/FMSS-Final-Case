import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/Searchbar'
import Ships from '../../components/Ships'

const Home = () => {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      <SearchBar />
      <Ships />
    </div>
  )
}

export default Home