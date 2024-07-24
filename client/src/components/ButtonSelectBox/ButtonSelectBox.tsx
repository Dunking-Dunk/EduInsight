import { Select, SelectItem, SharedSelection } from "@nextui-org/react"

interface boxItem {
    value: string,
    text: string
}

interface ButtonSelectBoxProps {
    label: string,
    items: boxItem[],
    onSelectionChanged: (value: SharedSelection) => void
}

const ButtonSelectBox: React.FC<ButtonSelectBoxProps> = ({label, items, onSelectionChanged}) => {
    return(
        <Select className="mx-1" label={label} variant="flat" color="primary" onSelectionChange={onSelectionChanged}>
            {
                items.map((item, index) => <SelectItem key={item.value}>{item.text}</SelectItem>)
            }
        </Select>
    )
}


export default ButtonSelectBox;