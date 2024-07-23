import { Button, Card } from "@nextui-org/react"

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
    return(
        <Card className="flex flex-row justify-evenly items-center text-sm w-[90%] p-2">
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
                <Button isIconOnly variant="light">
                    <svg width="14" height="21" viewBox="0 0 14 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10C6.33696 10 5.70107 9.73661 5.23223 9.26777C4.76339 8.79893 4.5 8.16304 4.5 7.5C4.5 6.83696 4.76339 6.20107 5.23223 5.73223C5.70107 5.26339 6.33696 5 7 5C7.66304 5 8.29893 5.26339 8.76777 5.73223C9.23661 6.20107 9.5 6.83696 9.5 7.5C9.5 7.8283 9.43534 8.15339 9.3097 8.45671C9.18406 8.76002 8.99991 9.03562 8.76777 9.26777C8.53562 9.49991 8.26002 9.68406 7.95671 9.8097C7.65339 9.93534 7.3283 10 7 10ZM7 0.5C5.14348 0.5 3.36301 1.2375 2.05025 2.55025C0.737498 3.86301 0 5.64348 0 7.5C0 12.75 7 20.5 7 20.5C7 20.5 14 12.75 14 7.5C14 5.64348 13.2625 3.86301 11.9497 2.55025C10.637 1.2375 8.85652 0.5 7 0.5Z" fill="#222222"/>
                    </svg>
                </Button>
                <Button isIconOnly variant="light">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 21.5V5.5C5 4.95 5.196 4.47933 5.588 4.088C5.98 3.69667 6.45067 3.50067 7 3.5H17C17.55 3.5 18.021 3.696 18.413 4.088C18.805 4.48 19.0007 4.95067 19 5.5V21.5L12 18.5L5 21.5Z" fill="#222222"/>
                    </svg>
                </Button>
                <Button isIconOnly variant="light">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.5L14 5.5V9.5C7 10.5 4 15.5 3 20.5C5.5 17 9 15.4 14 15.4V19.5L21 12.5Z" fill="#222222"/>
                    </svg>
                </Button>
            </div>
        </Card>
    )
}

export default CollegeCard;