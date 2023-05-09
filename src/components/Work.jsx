import React, { useState } from 'react'
import styled from 'styled-components'
import Choices from './Choices'
import Exp from './Exp'
import Edu from './Edu'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Right = styled.div`

`

const Container = styled.div`
  height: 90vh;
`

const Work = () => {
  const [select, setSelect] = useState(0);

  function handleChange(newVal) {
    setSelect(newVal);
  }

  const exp = []

  return (
    <>
      <Section id='experience' >
        <Container className='w-4/5 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
          <Choices className='flex-1 absolute md:relative top-0' onChange={handleChange} />

          <Right className='flex-1 relative flex justify-center'>
            {select == 0 && <Exp />}
            {select == 1 && <Edu />}
          </Right>
        </Container>
      </Section>
    </>
  )
}

export default Work