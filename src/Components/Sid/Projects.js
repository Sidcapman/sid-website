import React from 'react'
import { data } from './ProjectsList'
import styled from 'styled-components'
import Tilt from 'react-vanilla-tilt'
import { FaFirefoxBrowser } from 'react-icons/fa'

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  z-index: 0;
`
const Info = styled.div`
  position: absolute;
  top: 21.5rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 10;
  padding: 3rem;
  overflow: hidden;
  @media (max-width: 270px) {
    padding: 5px !important;
  }
  @media (max-width: 400) {
    top: 26.5rem !important;
  } ;
`

const Title = styled.div`
  color: black;
  margin-bottom: 1rem;
  font: 2rem;
  font-weight: 800;
`

const Descri = styled.div`
  font: 1rem;
`

//
const Projects = () => {
  return (
    <div id="project">
      <div className="container ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}>
              <Tilt
                style={{ width: '23rem', position: 'relative' }}
                className="card"
                key={item.id}>
                <Image src={item.image} alt={item.head} />
                <Info>
                  <Title className="title">{item.head}</Title>
                  <Descri className="descri">{item.description}</Descri>
                </Info>
              </Tilt>
              <div className="link">
                <a href={item.demo}>
                  <span>
                    <i class="fab fa-firefox-browser fa-3x"></i>
                  </span>
                </a>
                <a href={item.source}>
                  <i class="fab fa-github fa-3x"></i>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
