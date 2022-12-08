import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { black, grey } = colors

const Text = styled.div`
  font-size: 14px;
`

const Title = styled.h2`
  font-size: 16px;
  margin: 0 0 15px 0;
`

const Description = styled.div`
  font-size: 14px;
  padding-top: 1rem;

  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;

  margin: 2rem;
  &:hover {
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  }

  padding: 10px;
  margin-bottom: 1rem;

  border: 2px solid ${grey};
  border-radius: 5px;
  box-sizing: border-box;

  width: 240px;
  height: 240px;
  cursor: pointer;
`

const Card = ({ title, name, date, description, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Text>by {name}</Text>
      <Text>
        on <strong>{new Date(date).toLocaleDateString()}</strong>
      </Text>
      <Description>{description?.slice(0, 100).trim()}...</Description>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
