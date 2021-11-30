import * as C from "./styles"


const Button = ({ children, ...rest}) => {

    return (
        <C.BaseButton {...rest}>
        {children}
    </C.BaseButton>
    );
}

export default Button;