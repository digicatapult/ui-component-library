import styled from 'styled-components'

const viewPortH: number = window.visualViewport?.height || 0

export const Heading = styled('div')`
  color: #4a4a4a;
  font-family: Roboto;
  margin-bottom: 100px;
  max-width: 80%;
  font-size: 30px;
  line-height: 45px;
`

export const Button = styled('div')`
  position: relative;
  margin-left: ${({ isOpen }: any) => (isOpen ? 5 : 20)}px;
  transition: all 0.5s ease-out-in;
  top: 10%;
  left: ${({ width }: any) => width || 300}px;
  cursor: pointer;
`

export const ItemWrapper = styled('fragment')`
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.7;
  }
`

export const Panel = styled('div')`
  position: absolute;
  padding: 5px 25px;
  width: ${({ width }: any) => width || 300}px;
  height: ${viewPortH}px;
  left: ${({ isOpen, width }: any) => (isOpen ? '0px' : `-${width + 50}px`)};
  top: 0px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.7s ease-in-out;
`
