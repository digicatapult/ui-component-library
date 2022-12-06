declare module '@digicatapult/components' {

  interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text'
  }

  interface InputProps {
  }
  
  interface CardProps {
    title: string
    name: string
    date: Date
    description: string
  }

  export const Button: (props: ButtonProps) => <JSXElement>
  export const Input: (props: InputProps) => <JSXElement>
  export const Card: (props: CardProps) => <JSXElement>
}
