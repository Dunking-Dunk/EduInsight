import { Select, SelectItem } from "@nextui-org/react"

interface ButtonSelectBoxProps {
    label: string,
    items: string[]
}

const ButtonSelectBox: React.FC<ButtonSelectBoxProps> = ({label, items}) => {
    return(
        <Select label={label} variant="flat" color="primary">
            {
                items.map((value, index) => <SelectItem key={index}>{value}</SelectItem>)
            }
        </Select>
    )
}


export default ButtonSelectBox;