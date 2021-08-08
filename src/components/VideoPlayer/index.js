import React from 'react'
import ReactPlayer from 'react-player'
import './styles.css'

function VideoPlayer ({ data }) {
  return (
    <>
      {
        data.items.map((data, index) => {
          
          const { title } = data.snippet
          const { description } = data.snippet
          const { publishedAt } = data.snippet
          const { videoId } = data.id
          const date = new Date(publishedAt).toLocaleString()

          return ( 
            <div
              key={index}
              className='video-player'
            >

              <ReactPlayer
                width='100%'
                height='300px'
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls={true}
              />
              <hr />
                <h1> { title } </h1>
              <hr />
              <p>
                <span>Descrição: </span>{ description ? description : 'Sem descrição' }
              </p>
              <p>
                  <span>Data de publicação: </span>{ date }
              </p>

            </div>
          )
        })
      }
    </>
  )
}

export default VideoPlayer
