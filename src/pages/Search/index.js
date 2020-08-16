import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import searchCtx from '../../contexts/searchCtx'
import './styles.css'

function Search () {
  const context = useContext(searchCtx)
  const history = useHistory()
  const [ inputValue, setInputValue ] = useState('')
  
  const searchLives = () => {
    history.push('/videolist')
    context.q = inputValue
  }

  return (
    <div className='interface'>
      <header className='header'>
        <h1>
          <span className='title1'>Live</span>
          <span className='title2'>Tube</span>
        </h1>
        <p>Assista suas lives favoritas</p>
      </header>

      <main className='main'>
        <input
          value={inputValue}
          placeholder='Insira um termo'
          type="text"
          onChange={ (e) => { setInputValue(e.target.value) } } />
        
          <button onClick={searchLives}>
            Procurar
          </button>
        
      </main>

      <footer className='footer'>
        <p> 
          Desenvolvido por
          <a href="https://github.com/kaetaen">
            <span className='name1'>
              &nbsp;Rubens 
            </span>
            <span className='name2'>
              &nbsp;dos Santos
            </span>
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Search
