import { Button } from "@nextui-org/react"

interface ButtonOneProps {
    buttonLabel: string,
    isFilled: boolean
}

const ButtonOne: React.FC<ButtonOneProps> = ({buttonLabel, isFilled}) => {
    return(
        <Button color="secondary" variant={isFilled? 'solid': 'bordered'} radius="sm" className="font-semibold text-xs">
            {buttonLabel}
        </Button>
    )
}


export default ButtonOne;