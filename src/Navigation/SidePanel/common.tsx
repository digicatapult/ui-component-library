import styled from 'styled-components'
import { SidePanelProps } from './index.js'

export const Heading = styled('div')`
  color: #4a4a4a;
  font-family: Roboto;
  margin-bottom: 100px;
  max-width: 80%;
  font-size: 30px;
  line-height: 45px;
`

export const Button = styled.div<SidePanelProps>`
  position: absolute;
  top: 10%;
  right: 0px;
  cursor: pointer;
  transform: scaleX(${({ isOpen }) => (isOpen ? '-1' : '1')}) translateX(100%);
  transform-origin: 100%;
  transition: transform 0.7s ease-in-out;
`

export const ItemWrapper = styled('div')`
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.7;
  }
`

export const DefaultPanel = styled.div<SidePanelProps>`
  position: ${({ variant }) => (variant === 'hyproof' ? 'fixed' : 'absolute')};
  box-sizing: border-box;
  width: ${({ width }) => width || '300px'};
  height: 100lvh;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: column;
  gap: 0.2em;

  padding: 5px 25px;
  transform: translateX(
    ${({ isOpen, width }) => (isOpen ? '0px' : `-${width || '300px'}`)}
  );
  transition: transform 0.7s ease-in-out;

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`

export const HiiVariantPanel = styled(DefaultPanel)<SidePanelProps>`
  box-shadow: none;
  background: rgba(255, 255, 255, 90%);
  backdrop-filter: blur(5px);
`
