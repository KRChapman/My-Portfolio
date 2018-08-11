import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  margin-left: 10px;
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
        <p>javaScript                                 	 
          React					       
          Node/Express</p>	
          <p> SQL MongoDb   Html/Css</p>
        <h4>Projects</h4>	
        <ul>
          <li>Projects:  It demonstrates what I can do with React by making an 
            interactive single page app. While at the same time showing off my work.
             Https:\\LINK
          </li>
          <li>Voting app:  Full stack vanilla Javascript application. 
            Log in and create polls for other people around the world to vote on and chart the results. 
            <a href="https://protected-fjord-13167.herokuapp.com/home">Link</a>
            
          </li>  
        
        </ul>	    
        <h4>Work Experience:</h4>
        <p>Teacher for Marysville, WA School district  <strong>2011 – present</strong></p>
        <ul>
          <li>Developed excellent rapport with staff and students. </li>
          <li>Fostered a classroom environment conducive to learning and promoting 
            excellent student engagement.
          </li>
          <li>Taught math, science, social studies, and special education. </li>
          <li>Find new and productive ways of teaching students, that will help them learn.</li>  
        </ul>  
        <h4>Education:</h4>
        <ul>
          <li>Bachelor's degree in Social Studies Education
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
          <li>Fast at Learning new skills.  Being a self-taught programmer showed me the
            importance of being able to persevere and learn continue to learn.
            </li>
        </ul>  
      </div>
    </Container>
  )
}

export default Resume;