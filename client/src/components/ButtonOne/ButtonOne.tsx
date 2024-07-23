import { Button } from "@nextui-org/react"

interface ButtonOneProps {
    buttonLabel: string,
    isFilled: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonOne: React.FC<ButtonOneProps> = ({buttonLabel, isFilled, onClick}) => {
    return(
        <Button onClick={onClick} color="secondary" variant={isFilled? 'solid': 'bordered'} radius="sm" className="font-semibold text-xs">
            {buttonLabel}
        </Button>
    )
}


export default ButtonOne;