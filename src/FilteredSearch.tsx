import styled from 'styled-components'
import {get} from './constants'
import sx, {SxProp} from './sx'
import {ComponentProps} from './utils/types'

const FilteredSearch = styled.div<SxProp>`
  display: flex;
  align-items: stretch;

  summary,
  > button {
    border-radius: 0;
    border-top-left-radius: ${get('radii.2')};
    border-bottom-left-radius: ${get('radii.2')};
    border-right: 0;
  }
  .TextInput-wrapper {
    border-radius: 0;
    border-top-right-radius: ${get('radii.2')};
    border-bottom-right-radius: ${get('radii.2')};
  }

  ${sx}
`

export type FilteredSearchProps = ComponentProps<typeof FilteredSearch>
export default FilteredSearch
