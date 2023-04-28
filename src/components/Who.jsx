import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
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
`

const Left = styled.div`
    flex: 1;
    gap: 25px;
`

const Right = styled.div`
    flex: 1;
`

const ListItem = styled.li`
  -webkit-text-stroke: 1px white;
  position: relative;
  white-space: nowrap;

  ::after{
    content: '${(props) => props.name}';
    height: 120%;
    position: absolute;
    top: -2px;
    left: 5px;
    width: 0;
    overflow: hidden;
    color: rgb(236 72 153);
    white-space: nowrap;
  }


  &:hover{
    ::after{
      animation: reveal 0.5s linear both;

      @keyframes reveal {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Who = () => {

  const name = ['Employee Review', 'Placement Cell', 'retro iPod Clone', 'DevConnect', 'DevConnect UI']
  const desc = ['Making review system of any company easier. Authentication is needed to post the review. For both Admin-Employee'
    , 'Keeps all the records of the college placements. For employee use only. Schedules interview for students'
    , 'Feeling old yet? Experience the retro iPod UI made using React. With all gesture support and pre-loaded songs.'
    , 'A social media app, connect with your friends. Post your thoughts, update your profile, comment on the post and chat with your friends.'
    , 'The UI part of the social media. Connects with the backend using APIs.'
  ]


  let i = 0;

  return (
    <Section id='projects' className='relative'>
      <h2 className='text-5xl max-[968px]:text-3xl uppercase font-black tracking-wider'>Projects</h2>
      <Container className='w-4/5 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
        <Left className='flex items-center'>
          <ul className='flex flex-col gap-5'>
            {name.map((n) => {
              return (
                <ListItem key={n} name={n} className='text-7xl max-[968px]:text-4xl font-sans font-extrabold cursor-pointer text-transparent stroke'>
                  {n}
                </ListItem>
              )
            })}
          </ul>
        </Left>

        <Right>
          {/* <p>{desc[i++]}</p> */}
        </Right>
      </Container>

      <button className='absolute cursor-pointer z-10 left-0 right-0 bottom-[2vh] m-auto text-5xl mt-4 animate-bounce text-[#A6176C]' onClick={(e) => {
        e.preventDefault();
        window.location.href = '#contact';
      }}>
        <BsFillArrowDownCircleFill />
      </button>
    </Section>
  )
}

export default Who