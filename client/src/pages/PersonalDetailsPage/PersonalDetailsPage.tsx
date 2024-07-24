import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, SharedSelection } from "@nextui-org/react";
import TextInput from "../../components/TextInput/TextInput";
import ButtonOne from "../../components/ButtonOne/ButtonOne";
import { updateUserDetails } from "../../firebase/firestore";
import SelectBox from "../../components/SelectBox/SelectBox";
import LoadingPage from "../LoadingPage/LoadingPage";

interface PersonalDetails {
    name: string;
    fatherName: string;
    phoneNumber: string;
    address: string;
    interestedBranch?: string; // Make it optional
}

const PersonalDetailsPage = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [isMissingField, setIsMissingField] = useState(false);

    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
        {
            name: '',
            fatherName: '',
            phoneNumber: '',
            address: '',
            interestedBranch: ''
        }
    )

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalDetails(prev => {
            return {
                ...prev,
                [e?.target?.name]: e?.target?.value
            }
        })
    }

    const onInterestedBrachChoosed = (selection: SharedSelection) => {
        setPersonalDetails(prev => {
            return {
                ...prev,
                interestedBranch: selection.currentKey
            }
        })
    }

    const onNextClicked = async () => {
        if(personalDetails.name.trim() === '' || personalDetails.fatherName.trim() === '' || personalDetails.phoneNumber.trim() === '' || personalDetails.address.trim() === '' || personalDetails?.interestedBranch?.trim() === '') {
            setIsMissingField(true);
        }else{
            setIsMissingField(false);
            try{
                if(user?.uid){
                    if(personalDetails.interestedBranch){
                        const pd: Record<string, string> = {
                            name: personalDetails.name,
                            fatherName: personalDetails.fatherName,
                            phoneNumber: personalDetails.phoneNumber,
                            address: personalDetails.address,
                            interestedBranch: personalDetails.interestedBranch
                        }
                        await updateUserDetails(user?.uid, pd).then(() => navigate('/'));
                    }
                }
            } catch(e) {
                console.error(e);
                alert('Failed');
            }
        }
    }

    const options = [
        { value: "aero", text: "AERONAUTICAL ENGINEERING" },
        { value: "aids", text: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE" },
        { value: "aiml", text: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING" },
        { value: "auto", text: "AUTOMOBILE ENGINEERING" },
        { value: "bme", text: "BIOMEDICAL ENGINEERING" },
        { value: "biotech", text: "BIOTECHNOLOGY" },
        { value: "chem", text: "CHEMICAL ENGINEERING" },
        { value: "civil", text: "CIVIL ENGINEERING" },
        { value: "csd", text: "COMPUTER SCIENCE AND DESIGN" },
        { value: "cse", text: "COMPUTER SCIENCE AND ENGINEERING" },
        { value: "csecs", text: "COMPUTER SCIENCE AND ENGINEERING (CYBER SECURITY)" },
        { value: "csbs", text: "COMPUTER SCIENCE AND BUSINESS SYSTEMS" },
        { value: "eee", text: "ELECTRICAL AND ELECTRONICS ENGINEERING" },
        { value: "ece", text: "ELECTRONICS AND COMMUNICATION ENGINEERING" },
        { value: "ft", text: "FOOD TECHNOLOGY" },
        { value: "it", text: "INFORMATION TECHNOLOGY" },
        { value: "mech", text: "MECHANICAL ENGINEERING" },
        { value: "mct", text: "MECHATRONICS" },
        { value: "ra", text: "ROBOTICS AND AUTOMATION" }
    ];

    if(loading)
        return <LoadingPage />

    return(
        <div className="personal-detial-page-container flex flex-col justify-center items-center min-h-[100vh] p-4">
            <div className="text-center font-semibold">
                <h1>Hello 👋, {user?.displayName}</h1>
                <h3>Personal Details</h3>
                <Card className="p-3 flex flex-col justify-evenly items-center w-[90%] min-h-[400px] min-w-[300px] max-w-[500px]">
                    <TextInput onChange={onValueChange} name="name" isError={false} type="text" placeholder="Name" />
                    <TextInput onChange={onValueChange} name="fatherName" isError={false} type="text" placeholder="Father's Name" />
                    <TextInput onChange={onValueChange} name="phoneNumber" isError={false} type="number" placeholder="Phone Number" />
                    <TextInput onChange={onValueChange} name="address" isError={false} type="text" placeholder="Address" />
                    <SelectBox
                        onSelectionChanged={onInterestedBrachChoosed}
                        selectBoxLabel="Interested Branch"
                        selectBoxItems={options}
                    />
                    {isMissingField && <p className="text-xs font-semibold text-danger-500 bg-danger-100 p-3 rounded-md">Missing details, kindly fill all</p>}
                </Card>
                <div className="box-container my-10">
                    <ButtonOne onClick={onNextClicked} buttonLabel="Next" isFilled={true} />
                </div>
                <div className="box-skip my-10">
                    <Link to={'/home'} className="flex flex-row justify-center items-center font-semibold p-1 text-sm h-10" >
                        <span>Skip for now</span>
                        <span className="flex justify-center items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PersonalDetailsPage;