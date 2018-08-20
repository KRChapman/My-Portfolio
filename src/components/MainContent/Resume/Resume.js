import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  margin-left: 10px;
`

const Link = styled.a`
 color: #41505a;
`

const Resume = (props) => {

  return (
    <Container>
      <h5><a href="https://www.dropbox.com/sh/k7xzvm83zxke0fi/AAAgxtvF69DHEfpYvDh0_v5_a?dl=0">Download resume from dropbox</a></h5>

      <div>

        <h4>Objective</h4>
        <p>Transition from a self-taught full stack developer
           to working on a team developing software that meets 
           customers needs while solving problems.
        </p>
        <h4>Technical Skills:</h4>

        <ul>
          <li>javaScript</li>
          <li>React</li>
          <li>Node/Express</li>
          <li>SQL</li>
          <li> Html/Css</li>
        </ul>
    
        <h4>Projects:</h4>	
        <ul>
          <li>Portfolio:  It demonstrates what I can do with React by making an 
            interactive single page app. While at the same time showing off my work.
            <br/>
            <Link href="https://kyle-chapman.me/">kyle-chapman.me</Link>
            <br />
            <Link href="https://github.com/KRChapman/My-Portfolio">GitHub</Link>
          </li>
          <li>Voting app:  Full stack vanilla Javascript application. 
            Log in and create polls for other people around the world to vote on and chart the results. 
            <br />
            <Link href="https://protected-fjord-13167.herokuapp.com/home">Voting app</Link>
            <br />
            <Link href="https://github.com/KRChapman/My-Portfolio">GitHub</Link>          
          </li>  
          <li>Conway's Game of Life:  React application using Sass that is a visual representation of my algorithm to display Conway's Game of Life.
            <br />
            <Link href="https://krchapman.github.io/GameOfLife/">GameOfLife</Link>
            <br />
            <Link href="https://github.com/KRChapman/GameOfLife">GitHub</Link>
          </li>  
        
        </ul>	    
        <h4>Work Experience:</h4>
        <p>Teacher for Marysville, WA School District  <strong>2011 – present</strong></p>
        <ul>
          <li>Developed excellent rapport with staff and students </li>
          <li>Fostered a classroom environment conducive to learning and promoting 
            excellent student engagement
          </li>
          <li>Taught math, science, social studies and special education </li>
          <li>Find new and productive ways of teaching students</li>  
        </ul>  
        <h4>Education:</h4>
        <ul>
          <li>Bachelor's Degree in Education
              Eastern Washington University
          </li>
          <li>
            Teaching Certificate
            State of Washington Office of Superintendent of Public Instruction

          </li>
        </ul>   
        <h4>Qualities:</h4>
        <ul>
          <li>Discipline to complete a task and not falter when it is not
             going as planned or motivation is low
            </li>
          <li>Work well with others. </li>
          <li>Fast at learning new skills.  Being a self-taught programmer showed me the
            importance of being able to persevere and learn.
            </li>
        </ul>  
      </div>
    </Container>
  )
}

export default Resume;