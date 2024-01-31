import styled from 'styled-components'

import { SidePanelProps } from '.'

export const Heading = styled('div')`
  color: #4a4a4a;
  font-family: Roboto;
  margin-bottom: 59px;
  max-width: 80%;
  font-size: 24px;
  line-height: 45px;
`

export const Panel = styled('div')`
  position: absolute;
  padding: 20px;
  padding-top: 50px
  width: ${(props: any) => props.width || 300}px; 
  max-width: ${(props: any) => props.width || 300}px;
  height: ${window.visualViewport?.height}px;
  animation: ${(props: any) => props.orientation || 'right'} 1s ease-out infinite;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);

  @keyframes right {
    0% { transform: translate(${(window.visualViewport?.width || 0) + 300}px, 0px); }
    100% { transform: translate(${(window.visualViewport?.width || 0) - 300}px, 0px); position: relative; }
  }

  @keyframes left {
    0% { transform: translate(-300px, 0px); }
    100% { transform: translate(0px, 0px); position: relative; }
  }
`
