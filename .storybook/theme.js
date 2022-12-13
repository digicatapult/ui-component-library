import {create} from '@storybook/theming'
import packageJson from '../package.json'

export default create({
  brandTitle: `
    <div style="display: flex; gap: 4px; align-items: center;">
      <span>Digital Catapult</span><br />
      <span>${packageJson.name}@${packageJson.version}</span>
    </div>
  `
})
