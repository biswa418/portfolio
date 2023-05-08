import React, { Suspense } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Typed from 'typed.js'
import { BsFillArrowDownCircleFill, BsDownload } from 'react-icons/bs'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Color } from 'three'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Container = styled.div`
    height: 90vh;
`

const Left = styled.div`
    gap: 20px;
`

const Right = styled.div`

`

const Img = styled.img`
    animation: wiggle 2s infinite ease alternate;

    @keyframes wiggle {
        to{
            transform: translateY(20px)
        }
    }
`

const Hero = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Developer', 'Software Engineer', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true,
            smartBackspace: true,
            loopCount: Infinity
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <Section id='home' className='relative'>
            <Navbar />
            <Container className='w-4/5 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
                <Left className='flex-[2_2_0%] mt-4 pl-4 flex flex-col justify-center relative'>
                    <span className='text-5xl max-[768px]:text-2xl max-[968px]:text-2xl max-[768px]:mt-4 font-bold'>I'm a </span>

                    <div className='relative'>
                        <div className='absolute text-5xl max-[968px]:text-2xl max-[968px]:h-max max-[768px]:text-2xl h-30 min-w-max z-[1]'>
                            <span className='text-6xl max-[968px]:text-2xl max-[768px]:text-3xl text-fuchsia-500 font-bold' ref={el} />
                        </div>
                    </div>

                    <div className='text-2xl font-light max-[1000px]:text-lg max-[768px]:text-base z-[1] max-[768px]:mt-13 mt-14'>
                        With 2 years of experience in the industry.
                        Enthusiastic team player, a fast learner with good problem-solving skills <span className='max-[1000px]:hidden'>,
                            my professional interests include Web Development,
                            Software Application development, and Research.</span>
                    </div>

                    <a href='./public/Biswajeet_cv.pdf' draggable='false' className='z-[1] px-4 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-fuchsia-200 ring-2 sm:ring-4 ring-fuchsia-300/30 text-fuchsia-700' target="_blank" rel="noopener noreferrer" download>
                        <button className='cursor-pointer text-3xl text-fuchsia-700'>
                            <BsDownload />
                        </button>
                        Resume
                    </a>
                </Left>

                <Right className='flex-[3_0_0%] relative flex justify-center max-[768px]:w-[500px] h-2/3 lg:h-full'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} color={'darkblue'} />
                        <directionalLight position={[1, 2, 1]} color={'red'} intensity={0.2} />
                        <pointLight position={[-4, -5, -10]} color={'red'} intensity={0.2} />
                        <Sphere args={[1, 100, 200]} scale={1.1} >
                            <MeshDistortMaterial
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img className='w-[200px]  md:w-[800px] h-[800px] min-w-[400px] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto' src='./images/bro.png' alt='hero-pic' />
                </Right>

                <button className='absolute flex justify-center items-center cursor-pointer z-10 left-0 right-0 bottom-0 m-auto text-5xl mt-4 animate-bounce text-[#A6176C]' onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '#experience';
                }}>
                    <BsFillArrowDownCircleFill />
                </button>
            </Container>
        </Section >
    )
}

export default Hero