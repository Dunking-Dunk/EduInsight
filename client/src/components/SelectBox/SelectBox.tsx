import { Select, SelectItem, SharedSelection } from "@nextui-org/react"

interface item {
    value: string,
    text: string
}

interface SelectBoxProps {
    selectBoxLabel: string,
    selectBoxItems: item[],
    onSelectionChanged: (value: SharedSelection) => void,
}

const SelectBox: React.FC<SelectBoxProps> = ({selectBoxLabel, selectBoxItems, onSelectionChanged}) => {
    return(
        <Select 
            label={selectBoxLabel}
            size="sm"
            onSelectionChange={onSelectionChanged}
        >
            {
                selectBoxItems.map((item, index) => <SelectItem key={item.value}>{item.text}</SelectItem>)
            }
        </Select>
    )
}

export default SelectBox;