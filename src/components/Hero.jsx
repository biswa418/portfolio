import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Typed from 'typed.js'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

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
`

const Left = styled.div`
  gap: 20px;
`

const Right = styled.div`

`

const Hero = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Developer', 'Software Engineer', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 50,
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
        <Section id='#'>
            <Navbar />
            <Container className='w-4/5 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
                <Left className='flex-[2_0_0%] pl-4 flex flex-col justify-center'>

                    <div className='text-5xl max-[768px]:text-2xl max-[768px]:mt-4'>I'm a &nbsp;
                        <span className='text-6xl max-[768px]:text-3xl text-[#e57ebd]' ref={el} />
                    </div>
                    <div className='text-2xl max-[768px]:text-lg'>
                        With 2 years of experience in the industry.
                        Enthusiastic team player, a fast learner with good problem-solving skills,
                        my professional interests include Web Development,
                        Software Application development, and Research.
                    </div>

                    <button className='absolute bottom-20 right-2/4 text-5xl mt-4 animate-bounce text-right text-[#A6176C]' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '#experience';
                    }}>
                        <BsFillArrowDownCircleFill />
                    </button>
                </Left>

                <Right className='flex-[3_0_0%] relative flex justify-center'>
                    <img className='w-[800px] h-[800px] object-contain' src='./images/bro.png' alt='hero-pic' />
                </Right>
            </Container>
        </Section >
    )
}

export default Hero