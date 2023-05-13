import { useEffect, useState } from 'react'
import './components'
import { Contact, Hero, Who, Work, Loader } from './components'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: linear-gradient(-50deg, rgba(2,0,36,1) 0%, rgba(74,9,89,1) 49%, rgba(22,12,135,1) 100%);
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {
  const [count, setCount] = useState(0)
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      isLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {
        !loading &&
        <>
          <Hero />
          <Work />
          <Who />
          <Contact />
        </>
      }
    </Container>
  )
}

export default App
