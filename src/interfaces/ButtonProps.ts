interface ButtonProps {
    type: "button" | "submit" | "reset"
    msg: string
    onClick?: () => void
  }