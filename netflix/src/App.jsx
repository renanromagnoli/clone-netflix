import React, {useEffect, useState} from 'react'

import './App.css'

import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeatureMovie from './components/FeatureMovie'
import Header from './components/Header'

export default () => {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)

    useEffect(() => {
      const loadAll = async () => {
        // pegando a lista total
        let list = await Tmdb.getHomeList()
        setMovieList(list)

        // pegando o featured
        let originals = list.filter(i => i.slug === 'originals')
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let chosen = originals[0].items.results[randomChosen]
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
      }

      loadAll()
    }, [])

  return (
    <div className="page">
      <Header />

      {featuredData && 
        <FeatureMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}