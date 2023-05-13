import React from 'react'
import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'

const Pyramid = styled.div`
    position: relative;
    left: 0;
    right: 0;
    top: 0%;
    width: 300px;
    height: 300px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
`

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <Pyramid className='pyramid-loader'>
                <div class="wrapper">
                    <span class="side side1"></span>
                    <span class="side side2"></span>
                    <span class="side side3"></span>
                    <span class="side side4"></span>
                    <span class="shadow"></span>
                </div>
            </Pyramid>
            <Slide>
                <p>Loading...</p>
            </Slide>
        </div>
    )
}

export default Loader