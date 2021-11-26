import * as C from './styles';


const Input = ({ label, name, ...rest}) => {
    return (
       <C.Container>
           {label && <label htmlFor={name}>{name}</label>}
           <C.BaseInput 
                id={name}
                name={name}
                {...rest}
           />
       </C.Container>
    );
}

export default Input;