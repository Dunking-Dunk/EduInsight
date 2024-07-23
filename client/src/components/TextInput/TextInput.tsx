import { Input } from "@nextui-org/react"

interface InputBoxProps {
    placeholder: string
}

const TextInput: React.FC<InputBoxProps> = ({placeholder}) => {
    return(
        <Input placeholder={placeholder}/>
    )
}

export default TextInput;