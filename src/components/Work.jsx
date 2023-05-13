import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Choices from './Choices'
import Exp from './Exp'
import Edu from './Edu'
import Grad from './Grad'
import Workhat from './Workhat'
import { Fade, Slide } from "react-awesome-reveal";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

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
  const right = useRef(null);

  function handleChange(newVal) {
    right.current.style.opacity = 0; //setting this to zero removes the artifact

    setSelect(newVal);

    window.setTimeout(() => {
      right.current.style.opacity = 1;
    }, 200); //show after 200ms
  }

  return (
    <>
      <Section id='experience' className='relative'>
        <Container className='w-4/5 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
          <Choices className='md:flex-1 absolute md:relative top-0 z-10' onChange={handleChange} />

          <Right ref={right} className={`flex-grow mt-10 md:mt-0 md:flex-1 relative flex justify-center`} >
            <div className='absolute flex justify-center items-center -top-40 right-2 max-[1080px]:w-1/4 max-[1080px]:h-1/4  max-[1060px]:-top-10 xl:w-2/3 xl:h-2/3 z-10'>
              {select == 0 &&
                <Canvas camera={{ fov: 25, position: [15, 5, 20] }}>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4.5} />
                  <Stage environment='city' intensity={0.5}>
                    <Workhat />
                  </Stage>
                </Canvas>
              }
              {select == 1 &&
                <Canvas camera={{ fov: 25, position: [-15, 5, 25] }}>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4.5} />
                  <Stage environment='city' intensity={0.5}>
                    <Grad />
                  </Stage>
                </Canvas>
              }
            </div>

            {select == 0 && <Slide direction='right'><Exp /></Slide>}
            {select == 1 && <Slide direction='right'><Edu /></Slide>}
          </Right>

        </Container>
        <button className='absolute flex justify-center items-center cursor-pointer z-10 left-0 right-0 bottom-10 sm:bottom-5 m-auto text-5xl mt-4 animate-bounce text-[#A6176C]' onClick={(e) => {
          e.preventDefault();
          window.location.href = '#projects';
        }}>
          <BsFillArrowDownCircleFill />
        </button>
      </Section >
    </>
  )
}

export default Work