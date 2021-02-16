declare module '@digicat/components' {

  interface ButtonProps {
   outlined?: boolean
   text?: boolean
  }

  export const Button: (props: ButtonProps) => <JSXElement>
}
