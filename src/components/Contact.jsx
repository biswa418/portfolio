import React from 'react'
import { BsDownload, BsGithub, BsLinkedin, BsMailbox2 } from 'react-icons/bs'
import styled from 'styled-components'

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
  return (
    <Section id='contact'>
      <Container className='flex justify-between flex-col md:flex-row'>
        <Left className='items-end justify-center flex-col'>
          <div className='mx-auto flex flex-col justify-center items-center h-2/3 lg:h1/3 w-2/3 lg:w-1/3 '>
            <h2 className='font-semibold text-4xl uppercase mb-5'>CONNECT</h2>
            <ul className='flex flex-col justify-between w-full '>
              <div className='flex justify-evenly items-center mb-4'>
                <li className='text-xl lg:text-3xl lg:py-4 lg:px-4 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-teal-200 ring-2 sm:ring-4 ring-teal-300/30 text-teal-700'>
                  <a href='https://www.github.com/biswa418' target='_blank'>
                    <BsGithub />
                  </a>
                </li>

                <li className='text-xl lg:text-3xl lg:py-4 lg:px-4 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-blue-200 ring-2 sm:ring-4 ring-blue-300/30 text-blue-700'>
                  <a href='https://www.linkedin.com/in/biswajeet-sutar' target='_blank'>
                    <BsLinkedin />
                  </a>
                </li>

                <li className='text-xl lg:text-3xl lg:py-4 lg:px-4 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-rose-200 ring-2 sm:ring-4 ring-rose-300/30 text-rose-700'>
                  <a href='mailto:biswajeetsutar418@gmail.com' target='_blank'>
                    <BsMailbox2 />
                  </a>
                </li>
              </div>

              <li>
                <a href='./public/Biswajeet_cv.pdf' draggable='false' className='text-xl mx-auto lg:text-3xl lg:py-3 lg:px-5 font-medium z-10 px-2 py-1 flex items-center w-max gap-4 justify-center rounded-full bg-fuchsia-200 ring-2 sm:ring-4 ring-fuchsia-300/30 text-fuchsia-700' target="_blank" rel="noopener noreferrer" download>
                  <button className='cursor-pointer font-medium text-xl lg:text-3xl text-fuchsia-700 mr-[-10px]'>
                    <BsDownload />
                  </button>
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <form className='w-10/12 md:w-11/12 max-w-screen-lg max-[768px]:flex max-[768px]:flex-col max-[768px]:h-max max-[768px]:gap-2 max-[768px]:px-4 max-[768px]:py-6 gap-8 px-8 py-16 my-6 mx-auto md:mx-0 text-purple-900 bg-purple-200 md:px-12 lg:px-16 rounded-lg ring-4 ring-purple-200/30' action="" method="post">
            <h2 className='font-semibold text-4xl uppercase mb-4 max-[768px]:m-0'>Contact</h2>

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
              <textarea id='Message' rows={5} className='p-2 rounded-md focus:outline-none focus:shadow-outline resize-none'></textarea>
            </label>

            <button className='bg-purple-700 text-lg font-semibold uppercase tracking-normal sm:ring-4 text-purple-200 rounded-lg w-max p-3 ring-3 ring-purple-700/30 mt-3' action='submit'>
              Send Message
            </button>
          </form>
        </Left>

        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Contact