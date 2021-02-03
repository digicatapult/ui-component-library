declare module '@digicat/components' {

  interface ButtonProps {
    children?: string
    background?: string
    size?: 'small' | 'medium' | 'large'
    variant?: 'primary' | 'secondary' | 'outlined'
  }

  interface CarouselProps {
    images: string[]
      images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired,
  height: PropTypes.string,
  width: PropTypes.string
  }

  export const Button: (props: ButtonProps) => <JSXElement>
  export const Carousel: (props: CarouselProps) => <JSXElement>
}
