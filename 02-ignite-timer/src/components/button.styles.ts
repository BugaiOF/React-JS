import styled , {css} from 'styled-components';

export type buttonVariant = "primary" | "secondary" | "danger" | "sucess";

interface ButtonContainerProps {
    variant: buttonVariant;
}

const buttonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    sucess: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
    width: 100px;
    height: 40px;
    border: 0;
    border-radius: 8px;
    margin: 8px;


    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
/*     ${props => {
        return css`
         background-color: ${buttonVariants[props.variant]};
        `
    }}    
 */
`