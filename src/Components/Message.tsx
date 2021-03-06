import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Text = styled.span<{ color: string }>`
  color: ${props => props.color};
  font-weight: 600;
`

interface MessageProps {
  text: string
  color: string
}

const Message: React.FC<MessageProps> = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
)

export default Message
