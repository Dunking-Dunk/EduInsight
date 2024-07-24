import { Card } from "@nextui-org/react";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";
import ButtonOne from "../../components/ButtonOne/ButtonOne";

const CutoffPage = () => {
    const [markDetails, setMarkDetails] = useState(
        {
            phy: 0,
            chem: 0,
            math: 0,
            cutoff: 0
        }
    )

    const onMarkEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarkDetails(prev => {
            return {
                ...prev,
                [e.target.name]: parseFloat(e.target.value),
            }
        })
    }

    return(
        <div className="cutoff-page-container min-h-[100vh] flex justify-center items-center">
            <Card className="h-[300px] w-[300px] p-4 flex flex-col justify-evenly items-center">
                <TextInput 
                    name="phy"
                    placeholder="Physics"
                    onChange={onMarkEntered}
                    type="number"
                    isError={false}
                />
                <TextInput 
                    name="chem"
                    placeholder="Chemistry"
                    onChange={onMarkEntered}
                    type="number"
                    isError={false}
                />
                <TextInput
                    name="math"
                    placeholder="Maths"
                    onChange={onMarkEntered}
                    type="number"
                    isError={false}
                />

                <ButtonOne
                    buttonLabel="Calculate Cutoff"
                    isFilled
                    onClick={() => setMarkDetails(d => {return {...d, cutoff: markDetails.chem/2 + markDetails.phy/2 + markDetails.math}})}
                />
                <p className="w-[90%] bg-success-100 p-2 rounded-xl text-success-900">
                    Cutoff: {markDetails.cutoff}
                </p>
            </Card>
        </div>
    )
}


export default CutoffPage;