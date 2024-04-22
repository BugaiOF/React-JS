import { ButtonContainer, buttonVariant } from "./button.styles"

interface ButtonProps {
    variant ?: buttonVariant;
}


export function Button ({ variant = 'primary'}: ButtonProps) {
    return <ButtonContainer variant={variant}>enviar</ButtonContainer>

}