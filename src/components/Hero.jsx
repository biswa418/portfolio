import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container className='w-3/4 flex justify-between max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
                Hero
            </Container>
        </Section>
    )
}

export default Hero