import { Select, SelectItem } from "@nextui-org/react"

interface SelectBoxProps {
    selectBoxLabel: string,
    selectBoxItems: string[]
}

const SelectBox: React.FC<SelectBoxProps> = ({selectBoxLabel, selectBoxItems}) => {
    return(
        <Select 
            label={selectBoxLabel}
            size="sm"
        >
            {
                selectBoxItems.map((item, index) => <SelectItem key={index}>{item}</SelectItem>)
            }
        </Select>
    )
}

export default SelectBox;