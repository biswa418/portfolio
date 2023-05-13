import React, { useRef, useState } from 'react'
import { BsDownload, BsFillArrowUpCircleFill, BsGithub, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    height: 95vh;
    width: 100%;
    gap: 50px;
`

const Left = styled.div`
    flex:1;
    display: flex;
    gap: 20px;
`

const Right = styled.div`
    flex:1;

`

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [send, setSend] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);

    emailjs.sendForm('service_j24iegk', 'template_a4zgqik', ref.current, 'YIuVvcE40QuuNdjfq')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setSend(false);
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
        setSend(false);
      });

    for (let i = 0; i < 3; i++) {
      ref.current[i].value = '';
    }
  }

  return (
    <Section id='contact'>
      <Container className='flex justify-between flex-col md:flex-row relative'>
        <Left className='items-center md:items-end justify-center flex-col z-10'>
          <div className='mx-auto flex flex-2 flex-col justify-center items-center h-1/3 lg:h1/3 w-2/3 lg:w-1/3 '>
            <h2 className='font-semibold text-4xl uppercase mb-5 mt-12 md:mt-5'>CONNECT</h2>

            <ul className='flex flex-col justify-between w-full '>
              <div className='flex justify-evenly items-center mb-4'>
                <li className='text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-teal-200 ring-2 sm:ring-4 ring-teal-300/30 text-teal-700'>
                  <a href='https://www.github.com/biswa418' target='_blank'>
                    <BsGithub />
                  </a>
                </li>

                <li className='text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-blue-200 ring-2 sm:ring-4 ring-blue-300/30 text-blue-700'>
                  <a href='https://www.linkedin.com/in/biswajeet-sutar' target='_blank'>
                    <BsLinkedin />
                  </a>
                </li>

                <li className='text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-rose-200 ring-2 sm:ring-4 ring-rose-300/30 text-rose-700'>
                  <a href='mailto:biswajeetsutar418@gmail.com' target='_blank'>
                    <BsMailbox2 />
                  </a>
                </li>
              </div>

              <li>
                <a href='./Biswajeet_cv.pdf' draggable='false' className='text-xl mx-auto xl:text-2xl lg:text-xl lg:py-3 lg:px-5 font-medium z-10 px-2 py-1 md:my-3 flex items-center w-max gap-4 justify-center rounded-full bg-fuchsia-200 ring-2 sm:ring-4 ring-fuchsia-300/30 text-fuchsia-700' target="_blank" rel="noopener noreferrer" download>
                  <button className='cursor-pointer font-medium text-xl xl:text-2xl lg:text-xl text-fuchsia-700 mr-[-10px]'>
                    <BsDownload />
                  </button>
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <form ref={ref} onSubmit={handleSubmit} className='flex-3 w-10/12 md:w-10/12 md:mr-6 min-w-[270px] max-w-screen-lg flex flex-col justify-center max-[768px]:h-max  max-[768px]:px-4 max-[768px]:py-6 gap-1 px-2 py-5 mb-4 md:mx-0 text-purple-900 bg-purple-200 md:px-10 lg:px-14 rounded-lg ring-4 ring-purple-200/30' action="" method="post">
            <h2 className='font-semibold text-2xl xl:text-3xl uppercase mb-4 max-[768px]:m-0'>Contact</h2>

            <label className='flex flex-col mb-2 max-[768px]:m-0'>
              NAME
              <input className='p-2 rounded-md focus:outline-none focus:shadow-outline' type='text' id='name' name='name' required></input>
            </label>

            <label className='flex flex-col mb-2 max-[768px]:m-0'>
              EMAIL
              <input className='p-2 rounded-md focus:outline-none focus:shadow-outline' type='email' id='email' name='email' required></input>
            </label>

            <label className='flex flex-col mb-2 max-[768px]:m-0 '>
              MESSAGE
              <textarea id='Message' name='message' rows={2} className='p-2 rounded-md focus:outline-none focus:shadow-outline resize-none'></textarea>
            </label>

            <button className='bg-purple-700 text-sm font-semibold uppercase tracking-normal sm:text-base sm:p-4 sm:ring-4 text-purple-200 rounded-lg w-max p-2 ring-3 ring-purple-700/30'
              type='submit'>
              {!send && 'Send Message'}
              {send && 'Sending...'}
            </button>
            {success &&
              "Your message has been sent. We'll get back to you. Thanks."
            }
          </form>
        </Left>

        <Right>
          <Map />
        </Right>

        <button className='absolute cursor-pointer z-10 right-4 bottom-4 text-5xl mt-4 text-[#A6176C]' onClick={(e) => {
          e.preventDefault();
          window.location.href = '#home';
        }}>
          <BsFillArrowUpCircleFill />
        </button>
      </Container>

      <p className='w-full absolute bottom-1 capitalize flex justify-center items-center py-1 flex-col text-xs md:text-lg opacity-60'>
        Designed and made by Biswajeet Sutar
      </p>
    </Section>
  )
}

export default Contact