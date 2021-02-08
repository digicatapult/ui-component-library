import { Carousel } from '../../packages/components'

import first from './assets/carousel-media/1.jpg'
import second from './assets/carousel-media/2.jpg'
import third from './assets/carousel-media/3.jpg'
import fourth from './assets/carousel-media/4.jpg'

const images = [
  {
    src: first,
    alt: 'first-slide'
  },
  {
    src: second,
    alt: 'second-slide'
  },
  {
    src: third,
    alt: 'third-slide'
  },
  {
    src: fourth,
    alt: 'fourth-slide'
  }
]

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    width: {
      name: 'width',
      description:
        'Defines the width of the whole carousel, if the property is defined in % the carousel will widen according to its parents width. If the property is defined in vw, the carousel will widen according to the viewport width.'
    },
    height: {
      name: 'height',
      description:
        'Defines the height of the whole carousel, if the property is defined in % the carousel will have height according to its parents width. If the property is defined in vw, the carousel will have a hight according to the viewport height.'
    },
    onClick: { action: 'navigated' }
  }
}

const Template = args => <Carousel images={images} {...args} />

export const ImageCarousel = Template.bind({})
ImageCarousel.args = { width: '60vw', height: '90vh' }
