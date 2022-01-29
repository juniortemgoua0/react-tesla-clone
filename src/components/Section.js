import React, { memo} from "react"
import styled from "styled-components";

const Section = memo(({title, description, backgroundImg, leftBtnText, rigthBtnText , arrow ,section}) => {
    return <Wrap backgroundImg={backgroundImg} id={section}>
        <Box/>

    </Wrap>
})

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/${props => props.backgroundImg}");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`
const Box = styled.div`

`

const DownArrow = styled.img`
  height: 40px;
  margin-bottom: 10px;
  overflow: hidden;
  animation: animateDown infinite 1.5s;
`

export default Section