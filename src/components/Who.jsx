import React, { useEffect, useRef, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
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

  &:active{
    ::after{
          width: 100%;
    }
  }
`

const Img = styled.img`
  object-fit: scale-down;
  background-color: #05141c;
  border-radius: 20px;
  box-shadow:
  10px 10px 0px rgba(119, 20, 99, 0.563),
  22px 20px 0px rgba(119, 20, 99, 0.403)
;
`

const Who = () => {

  const [select, setSelect] = useState(0);
  const des = useRef(null);

  const name = ['Employee Review', 'Placement Cell', 'retro iPod Clone', 'DevConnect', 'DevConnect UI']
  const desc = ['Making review system of any company easier. Authentication is needed to post the review. For both Admin-Employee'
    , 'Keeps all the records of the college placements. For employee use only. Schedules interview for students'
    , 'Feeling old yet? Experience the retro iPod UI made using React. With all gesture support and pre-loaded songs.'
    , 'A social media app, connect with your friends. Post your thoughts, update your profile, comment on the post and chat with your friends.'
    , 'The UI part of the social media. Connects with the backend using APIs.'
  ]
  const source = ['./images/projects/placement.gif', './images/projects/placement1.gif', './images/projects/inAction.gif', './images/projects/dev.gif', './images/projects/currentState.png'];

  function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
    }, 20);
  }

  function active(e) {
    e.target.style.color = 'rgb(236 72 153)';
    let pTag = des.current.lastChild.lastChild;

    unfade(pTag);
    setSelect(e.target.value);

    window.setTimeout(() => {
      e.target.style.color = 'transparent';
    }, 2000);
  }

  useEffect(() => {
    if (select == 2) {
      des.current.firstChild.style.objectFit = 'cover';
    } else {
      des.current.firstChild.style.objectFit = 'scale-down';
    }
  }, [select]);

  return (
    <Section id='projects' className='relative'>
      <h2 className='text-4xl max-[968px]:text-3xl absolute top-10 text-[#c9c9c9] uppercase font-bold'>Projects</h2>
      <Container className='w-4/5 mt-20 md:mt-0 flex justify-between relative items-center max-[768px]:px-5 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center'>
        <Left className='flex items-center'>
          <ul className='flex flex-col gap-3 md:gap-5'>
            {name.map((n) => {
              return (
                <ListItem onClick={active} value={name.indexOf(n)} key={n} name={n} className='md:text-4xl 2xl:text-7xl text-3xl font-sans font-extrabold cursor-pointer text-transparent stroke'>
                  {n}
                </ListItem>
              )
            })}
          </ul>
        </Left>

        <Right ref={des} className='flex md:justify-center justify-evenly items-center md:flex-col overflow-hidden'>
          <Img src={source[select]} alt={name[select]} className='aspect-square w-1/3 min-[769px]:w-2/3 flex-none border-4 border-pink-600' />
          <Fade className='w-2/5 md:w-10/12 md:px-8 text-sm md:text-base text-left bg-pink-200 rounded-lg py-2 text-pink-900 md:mt-8 px-4 ring-4 ring-pink-300/30'>
            <p>
              {desc[select]}
            </p>
          </Fade>
        </Right>
      </Container>

      <button className='absolute flex justify-center items-center cursor-pointer z-10 left-0 right-0 bottom-5 m-auto text-5xl mt-4 animate-bounce text-[#A6176C]' onClick={(e) => {
        e.preventDefault();
        window.location.href = '#contact';
      }}>
        <BsFillArrowDownCircleFill />
      </button>
    </Section>
  )
}

export default Who