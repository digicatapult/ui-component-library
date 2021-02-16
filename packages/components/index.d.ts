declare module '@digicat/components' {

  interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text'
  }

  interface InputProps {
    label: string
    id: string
    error?: string
    type?: string
    monetary?: bool
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
