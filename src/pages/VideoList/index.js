import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import youtube from '../../services/youtubeApi'
import context from '../../contexts/searchCtx'
import Modal from '../../components/Modal'
import VideoPlayer from '../../components/VideoPlayer'
import './styles.css'
import button from '../../assets/back.png'

function VideoList () {
  
  const [videos, setVideos] = useState({})
  const [responseOk, setResponseOk] = useState(false)
  const termToSearch = useContext(context)
  const history = useHistory()
  
  useEffect(() => {
    getApiData()
  }, [termToSearch.q])

  const getApiData = async () =>  {
    const response = await youtube.get(`/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&eventType=live&q=${termToSearch.q}&maxResults=20`)
    setVideos(response.data)
    setResponseOk(true)
  }

  const handleClickButton = () => {
    history.push('/')
  }
 
  return (
    <>
      {
        responseOk ?
        <div className='video-grid'>
          <VideoPlayer data={videos} />
            <img
              src={button}
              alt="Botão para voltar retornar à tela inicial"
              width='60px'
              onClick={handleClickButton}
            />
        </div>
        :
        <Modal />
      }
    </>
  )
}

export default VideoList
