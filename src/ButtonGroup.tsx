import styled from 'styled-components'
import {get} from './constants'
import sx from './sx'
import {ComponentProps} from './utils/types'

const ButtonGroup = styled.div`
  display: inline-flex;
  vertical-align: middle;

  && > * {
    position: relative;
    border-right-width: 0;
    border-radius: 0;

    :first-child {
      border-top-left-radius: ${get('radii.2')};
      border-bottom-left-radius: ${get('radii.2')};
      margin-right: 0;
    }

    :not(:first-child) {
      margin-left: 0;
      margin-right: 0;
    }

    :last-child {
      border-right-width: 1px;
      border-top-right-radius: ${get('radii.2')};
      border-bottom-right-radius: ${get('radii.2')};
    }

    :focus,
    :active,
    :hover {
      border-right-width: 1px;
      + * {
        border-left-width: 0;
      }
    }

    :focus,
    :active {
      z-index: 1;
    }
  }

  ${sx};
`

export type ButtonGroupProps = ComponentProps<typeof ButtonGroup>
export default ButtonGroup
