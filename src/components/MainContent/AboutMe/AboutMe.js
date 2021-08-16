import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 70%;
  margin: 10px auto;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
`;

const AboutMe = (props) => {

  return (
    <Container>
      <h2>About Me</h2>
      <p>	My background is in teaching. I am the type of person who never stops learning.
        For example, I kept learning about math and science while my degree was in history
        education. Eventually I transitioned into substitute teaching because I wanted
        to teach these subjects right away, but did not have a degree in them.
         My continual learning led me to start programming as a hobby.
         However, the more applications I created and the deeper I dove into
         programming the more I loved it. My first major project was a full
         stack python wiki(shown bellow). I still love teaching, but want to follow
          my next passion in life. I feel that I found the perfect fit for me, because
           I can never stop learning! In my free time I enjoy playing video and board games,
           fishing and swing dancing! I have become very passionate about programming
            and web development and I want to make it a career. I do not have a formal
             computer science education, however I am self-taught and eager to learn.
      </p>
    </Container>
  )
}

export default AboutMe;
