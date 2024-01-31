import styled from 'styled-components'

import { SidePanelProps } from '.'

export const Heading = styled('div')`
  color: #4A4A4A;
  font-family: Roboto;
  font-size: 24px;
  line-height: 45px; 
`

export const Panel = styled('div')`
  position: absolute;
  width: ${((props: SidePanelProps) => props.width || 300)}px; 
  max-width: ${((props: SidePanelProps) => props.width || 300)}px;
  height: ${window.visualViewport?.height}px;
  animation: ${((props: SidePanelProps) => props.orientation || 'left')} 1s ease-out infinite;
  border-right: solid 1px black;
  padding: 20px;
  padding-top: 50px

  @keyframes left {
    0% {
      transform: translate(-300px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
      position: relative;
    }
  }

  @keyframes right {
    0% { transform: translate(${(window.visualViewport?.width || 0) + 300}px, 0px); }
    100% {
      transform: translate(${(window.visualViewport?.width || 0) - 300}px, 0px);
      position: relative;
    }
  }
`
  
export const Label = styled('div')`
  text-align: center;
`
