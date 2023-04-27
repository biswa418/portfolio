import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Who = () => {
  return (
    <Section id='projects'>
      <ul>
        <li>
          <h3>Employee Review</h3>
          <p>Making review system of any company easier. Authentication is needed to post the review. For both Admin-Employee</p>
        </li>

        <li>
          <h3>Placement Cell</h3>
          <p></p>
        </li>

        <li>
          <h3>retro iPod - clone</h3>
          <p></p>
        </li>

        <li>
          <h3>DevConnect</h3>
          <p></p>
        </li>

        <li>
          <h3>DevConnect - Front End</h3>
          <p></p>
        </li>
      </ul>
    </Section>
  )
}

export default Who