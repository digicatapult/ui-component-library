import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { black } = colors

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

  border: 1px solid ${black};
  box-sizing: border-box;

  width: 240px;
  height: 240px;
  cursor: pointer;
`

const Card = ({ data, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <Title>{data.title}</Title>
      <Text>by {data.editors && data.editors[0].firstName}</Text>
      <Text>
        on <strong>{new Date(data.start).toLocaleDateString()}</strong>
      </Text>
      <Description>{data.description?.slice(0, 100).trim()}...</Description>
    </Container>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    editors: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string.isRequired
      })
    ),
    start: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }),
  handleClick: PropTypes.func.isRequired
}

export default Card
