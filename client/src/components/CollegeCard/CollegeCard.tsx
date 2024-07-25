import { Button, Card } from "@nextui-org/react"
import { useState } from "react"

import './CollegeCard.css'
import { useNavigate } from "react-router-dom";

interface CollegeCardProps {
    collegeRank: number,
    collegeName: string,
    collegeLocation: string,
    collegeDept: string,
    collegeMinCutoff: number,
    collegeMaxCutoff: number,
    collegeCommunity: string,
}

const CollegeCard: React.FC<CollegeCardProps> = ({collegeRank, collegeName, collegeLocation, collegeDept, collegeCommunity, collegeMaxCutoff, collegeMinCutoff}) => {
    const [isSaved, setIsSaved] = useState(false);
    const navigate = useNavigate()

    const onSaveButtonClicked:React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsSaved(prev => !prev); 
    }

    const onCollegeCardClicked = () => {
        navigate('/college-detail')
    }

    return(
        <Card onPress={onCollegeCardClicked} isPressable className="ring-0 college-card flex flex-row justify-evenly items-center text-sm w-[90%] p-2 shadow hover:shadow-xl hover:cursor-pointer">
            <div className="rank-container bg-[#BEBEBE] text-center font-bold p-3 rounded-[15px] text-xs">
                <p>RANK</p>
                <p>{collegeRank}</p>
            </div>
            <div className="college-detail-container text-xs pl-4">
                <div className="college-name-container font-semibold ">
                    <p className="college-name">{collegeName}</p>
                    <p className="college-location">{collegeLocation}</p>
                </div>
                <hr />
                <div className="college-dept-container">
                    <span className="college-dept">{collegeDept}</span>
                </div>
            </div>
            <div className="college-cutoff-container flex flex-row w-36 text-center font-semibold text-xs">
                <div className="min-cutoff p-1">
                    <p>Min Cutoff</p>
                    <p>{collegeMinCutoff}</p>
                </div>
                <div className="man-cutoff p-1">
                    <p>Max Cutoff</p>
                    <p>{collegeMaxCutoff}</p>
                </div>
            </div>
            <div className="community-container">
                <span className="community-cont font-semibold w-9 h-9 border-2 p-2 rounded-lg border-primary-400">
                    {collegeCommunity}
                </span>
            </div>
            <div className="college-card-button-container">
                <Button isIconOnly variant="light" color="success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3" fill="#fff" stroke="#fff"/>
                    </svg>
                </Button>
                <Button isIconOnly variant="light" className={`${isSaved? 'text-red-500': ''}`} onClick={onSaveButtonClicked}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark">
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                    </svg>
                </Button>
                <Button isIconOnly variant="light" color="secondary" className="text-secondary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                    </svg>
                </Button>
            </div>
        </Card>
    )
}

export default CollegeCard;