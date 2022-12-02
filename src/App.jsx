// import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [countries, initCountry] = useState([])
  const [country, setCountry] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }

  async function fetchCountry(a, b) {
    console.log(a, b)
    const country = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${a},${b}`,
    )

    if (!country.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return country.json()
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        initCountry(res)
      })
      .catch((error) => {
        console.log(error.message)
      })

    fetchCountry('PT', 'ES')
      .then((countries) => {
        setCountry(countries)
        console.log('fetch country A B', country)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  // console.log('fetch', fetchData())

  // console.log(countries)
  console.log('countries 2', country)

  setTimeout(() => {
    const one = country[0]
    const two = country[1]
    console.log('TESTESTESTESTEs', one.flag, two.flag)
  }, 2000)

  console.log('countries', countries),
    console.log(
      'acabouuuuuuuuuuuacabouuuuuuuuuuuacabouuuuuuuuuuuacabouuuuuuuuuuu',
    )

  // async function initProducts() {
  //   await fetch('https://restcountries.com/v3.1/all')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setProducts(response)
  //       console.log('response', response.result)
  //     })
  //     .catch((err) => console.error(err))
  // }

  // async function getCountry(prefix = 'PT') {
  //   await fetch(`https://restcountries.com/v3.1/alpha/${prefix}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setProducts(response)
  //       console.log('response', response.result)
  //     })
  //     .catch((err) => console.error(err))
  // }

  // useEffect(() => {
  //   getCountry('PT')
  // })

  // initProducts()
  // getCountry('PT')

  // console.log('initProducts', products)

  // const getCountries = async (countrie) => {
  //   const response = await fetch(
  //     `https://restcountries.com/v2/${countrie}`,
  //   ).then((response) => response.json())

  //   // update the state
  //   setCountries(response)
  // }

  // useEffect(() => {
  //   getCountries('all')
  // }, [])

  // console.log('countries', countries)

  // const getCountry = (prefix) => countries.alpha2Code === prefix

  // console.log(getCountry('pt'))

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>World Cup Vite React</h1>
      {/*
      <div className="app">
        {countries &&
          countries.map((country) => (
            <div className="item-container">
              Id:{country.name}{' '}
              <div className="title">Title:{country.region}</div>
            </div>
          ))}
      </div> */}

      <div className="card">//CARD</div>
    </div>
  )
}

export default App
