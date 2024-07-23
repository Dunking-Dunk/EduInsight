import { Input } from "@nextui-org/react"
import { ChangeEventHandler } from "react";

interface InputBoxProps {
    placeholder: string,
    type: string,
    isError: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

const TextInput: React.FC<InputBoxProps> = ({placeholder, type, isError, name, onChange}) => {
    return(
        <Input name={name} type={type} label={placeholder} radius="sm" color={isError? 'danger': 'default'} onChange={onChange}/>
    )
}

export default TextInput;