import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import Button from '../Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
`

const ImagesWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  transform: translate(
    -${({ activeIndex, numberOfImages }) => (activeIndex * 100) / numberOfImages}%
  );
  transition: transform 0.5s;
`

const Image = styled.img`
  object-fit: cover;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const StyledButton = styled(Button)`
  z-index: 1;
  :disabled {
    background-color: inherit;
    color: #808080;
  }
`

const Images = ({ height, width, activeIndex, images }) => (
  <ImagesWrapper
    numberOfImages={images.length}
    width={width}
    activeIndex={activeIndex}
  >
    {images.map((image, idx) => (
      <div key={idx}>
        <Image height={height} width={width} alt={image.alt} src={image.src} />
      </div>
    ))}
  </ImagesWrapper>
)

const Carousel = ({ images, height, width, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNavigation = e => {
    const leftKeyCode = 37
    const rightKeyCode = 39

    if (e.target.name === 'previous' || e.keyCode === leftKeyCode) {
      setActiveIndex(Math.max(activeIndex - 1, 0))
    } else if (e.target.name === 'next' || e.keyCode === rightKeyCode) {
      setActiveIndex(Math.min(activeIndex + 1, images.length - 1))
    }
  }

  return (
    <Wrapper
      height={height}
      width={width}
      onKeyDown={handleNavigation}
      tabIndex="0"
      {...rest}
    >
      <StyledButton
        left
        name="previous"
        disabled={activeIndex === 0}
        onClick={handleNavigation}
        type="button"
        background="linear-gradient(to left, #00000000, #00000080)"
      >
        prev
      </StyledButton>
      <Images
        height={height}
        width={width}
        images={images}
        activeIndex={activeIndex}
      />
      <StyledButton
        right
        name="next"
        disabled={activeIndex === images.length - 1}
        onClick={handleNavigation}
        type="button"
        background="linear-gradient(to right, #00000000, #00000080)"
      >
        next
      </StyledButton>
    </Wrapper>
  )
}

Images.defaultProps = {
  activeIndex: 0,
  ...Carousel.defaultProps
}

Images.propTypes = {
  activeIndex: PropTypes.number,
  ...Carousel.propTypes
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired,
  height: PropTypes.string,
  width: PropTypes.string
}

Carousel.defaultProps = {
  height: '90vh',
  width: '90vw'
}

export default Carousel
