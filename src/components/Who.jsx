import React, { useEffect, useRef, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { BsFillArrowDownCircleFill, BsGithub, BsLink45Deg, BsYoutube } from 'react-icons/bs'
import styled from 'styled-components'
import project from '../../public/content';

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

  @media screen and (max-width: 640px) {
    ::after{
      top: 0px;
      left: 0px;
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

const Link = styled.div`
  &:hover{

  }
`

const Who = () => {
  // which one is selected
  const [select, setSelect] = useState(0);

  // when hover over link show message
  const [isOn, setOn] = useState(false);

  // reference of Right element
  const des = useRef(null);

  const name = project.name;
  const desc = project.desc;
  const source = project.source;
  const link = project.link;
  const host = project.host;
  const video = project.video;

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

        <Right ref={des} className='flex flex-grow md:justify-center justify-evenly items-center md:flex-col'>
          <div className='flex justify-center relative w-1/2 min-[769px]:w-full'>
            <Img src={source[select]} alt={name[select]} className='aspect-square w-2/3 min-[769px]:w-2/3 flex-none border-4 border-pink-600' />

            {/* source code */}
            <ul className='absolute gap-1 flex lg:right-28 sm:top-3 sm:right-20 -top-20 right-5 z-10'>
              <li>
                <a href={link[select]} target='_blank'>
                  <div className=' cursor-pointer text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-teal-200 ring-2 sm:ring-4 ring-teal-300/30 text-teal-700'>
                    <BsGithub />
                  </div>
                </a>
              </li>

              {/* youtube */}
              <li>
                {
                  (select == 0 || select == 1 || select == 3) &&
                  <a href={video[select]} target='_blank'>
                    <div className=' cursor-pointer text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-red-200 ring-2 sm:ring-4 ring-red-300/30 text-red-700'>
                      <BsYoutube />
                    </div>
                  </a>
                }
              </li>

              {/* hosted */}
              <li>
                {
                  (select == 0 || select == 1 || select == 2) &&
                  <a href={host[select]} target='_blank' onMouseOver={() => setOn(true)} onMouseOut={() => setOn(false)}>
                    <Link className='cursor-pointer text-xl md:text-2xl mr-2 md:py-3 md:px-3 font-medium z-10 px-2 py-2 flex items-center w-max gap-4 justify-center rounded-full bg-purple-200 ring-2 sm:ring-4 ring-purple-300/30 text-purple-700'>
                      <BsLink45Deg />
                    </Link>
                    {isOn &&
                      <p className='absolute -right-5 -top-24 text-right z-20 md:text-sm text-xs mt-2 text-slate-800 bg-slate-200 px-5 py-2 w-[150%] rounded-xl ring-2 sm:ring-4 ring-slate-300/30'>
                        Hosted on onRender, might take 10-15 seconds time to load.
                      </p>}
                  </a>
                }
              </li>
            </ul>
          </div>

          <Fade className='w-2/5 md:w-10/12 md:px-8 text-sm md:text-base text-left bg-pink-200 rounded-lg py-2 text-pink-900 md:mt-8 px-4 ring-4 ring-pink-300/30'>
            <p className=''>
              {desc[select]}
            </p>
          </Fade>
        </Right>
      </Container>

      <button className='absolute flex justify-center items-center cursor-pointer z-10 left-0 right-0 bottom-10 sm:bottom-5 m-auto text-5xl mt-4 animate-bounce text-[#A6176C]' onClick={(e) => {
        e.preventDefault();
        window.location.href = '#contact';
      }}>
        <BsFillArrowDownCircleFill />
      </button>
    </Section>
  )
}

export default Who