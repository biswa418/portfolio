import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Typed from 'typed.js'

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

const Left = styled.div`

`

const Right = styled.div`

`

const Hero = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Developer', 'Web Developer'],
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
        <Section>
            <Navbar />
            <Container className='w-3/4 flex justify-between max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
                Hero
                <Left >
                    I'm a <span className='text-yellow-400' ref={el} />
                </Left>
                <Right />
            </Container>
        </Section>
    )
}

export default Hero