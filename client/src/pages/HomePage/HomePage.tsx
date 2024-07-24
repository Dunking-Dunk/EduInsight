import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "../../components/Sidebar/Sidebar";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Input, SharedSelection } from "@nextui-org/react";
import ButtonOne from "../../components/ButtonOne/ButtonOne";
import ButtonSelectBox from "../../components/ButtonSelectBox/ButtonSelectBox";
import CollegeCard from "../../components/CollegeCard/CollegeCard";

const HomePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user)
            navigate('/login');
    })

    var communityList = [
        {
            value: 'OC',
            text: 'Open Competition'
        },
        {
            value: 'BC',
            text: 'Backward Class'
        },
        {
            value: 'BCM',
            text: 'Backward Class Muslim'
        },
        {
            value: 'MBC',
            text: 'Most Backward Class and Denotified Caste'
        },
        {
            value: 'SC',
            text: 'Scheduled Caste'
        },
        {
            value: 'SCA',
            text: 'Scheduled Caste A'
        },
        {
            value: 'ST',
            text: 'Scheduled Tribe'
        },
    ]

    const districts = [
        {
            "value": '100',
            "text": "All Districts"
        },    
        {
            "value": '1',
            "text": "Ariyalur"
        },
        {
            "value": '2',
            "text": "Chengalpattu"
        },
        {
            "value": '3',
            "text": "Chennai"
        },
        {
            "value": '4',
            "text": "Coimbatore"
        },
        {
            "value": '5',
            "text": "Cuddalore"
        },
        {
            "value": '6',
            "text": "Dharmapuri"
        },
        {
            "value": '7',
            "text": "Dindigul"
        },
        {
            "value": '8',
            "text": "Erode"
        },
        {
            "value": '9',
            "text": "Kallakurichi"
        },
        {
            "value": '10',
            "text": "Kancheepuram"
        },
        {
            "value": '11',
            "text": "Kanyakumari"
        },
        {
            "value": '12',
            "text": "Karur"
        },
        {
            "value": '13',
            "text": "Krishnagiri"
        },
        {
            "value": '14',
            "text": "Madurai"
        },
        {
            "value": '39',
            "text": "Mayiladuthurai"
        },
        {
            "value": '15',
            "text": "Nagapattinam"
        },
        {
            "value": '16',
            "text": "Namakkal"
        },
        {
            "value": '17',
            "text": "Perambalur"
        },
        {
            "value": '18',
            "text": "Pudukkottai"
        },
        {
            "value": '19',
            "text": "Ramanathapuram"
        },
        {
            "value": '20',
            "text": "Ranipet"
        },
        {
            "value": '21',
            "text": "Salem"
        },
        {
            "value": '22',
            "text": "Sivaganga"
        },
        {
            "value": '23',
            "text": "Tenkasi"
        },
        {
            "value": '24',
            "text": "Thanjavur"
        },
        {
            "value": '25',
            "text": "The Nilgiris"
        },
        {
            "value": '26',
            "text": "Theni"
        },
        {
            "value": '27',
            "text": "Thirupattur"
        },
        {
            "value": '28',
            "text": "Thoothukudi"
        },
        {
            "value": '29',
            "text": "Tiruchirappalli"
        },
        {
            "value": '30',
            "text": "Tirunelveli"
        },
        {
            "value": '31',
            "text": "Tiruppur"
        },
        {
            "value": '32',
            "text": "Thiruvallur"
        },
        {
            "value": '33',
            "text": "Thiruvannamalai"
        },
        {
            "value": '34',
            "text": "Thiruvarur"
        },
        {
            "value": '35',
            "text": "Vellore"
        },
        {
            "value": '36',
            "text": "Viluppuram"
        },
        {
            "value": '37',
            "text": "Virudhunagar"
        },
        {
            "value": '38',
            "text": "Others"
        }
    ]

    const branches = [
        {
            "value": "ZZ",
            "text": "All Branches"
        },
        {
            "value": "AE",
            "text": "Aeronautical Engineering"
        },
        {
            "value": "AG",
            "text": "Agricultural Engineering"
        },
        {
            "value": "AI",
            "text": "Agricultural and Irrigation Engineering (SS)"
        },
        {
            "value": "AD",
            "text": "Artificial Intelligence and Data Science"
        },
        {
            "value": "AT",
            "text": "Artificial Intelligence and Data Science (SS)"
        },
        {
            "value": "AL",
            "text": "Artificial Intelligence and Machine Learning"
        },
        {
            "value": "AO",
            "text": "Aerospace Engineering"
        },
        {
            "value": "AP",
            "text": "Apparel Technology (SS)"
        },
        {
            "value": "AR",
            "text": "Architecture"
        },
        {
            "value": "AS",
            "text": "Automobile Engineering (SS)"
        },
        {
            "value": "AU",
            "text": "Automobile Engineering"
        },
        {
            "value": "BC",
            "text": "Bio Technology and Bio Chemical Engineering"
        },
        {
            "value": "BM",
            "text": "Bio-Medical Engineering"
        },
        {
            "value": "BY",
            "text": "Bio-Medical Engineering (SS)"
        },
        {
            "value": "BS",
            "text": "Bio Technology (SS)"
        },
        {
            "value": "BT",
            "text": "Bio Technology"
        },
        {
            "value": "BP",
            "text": "B.Plan"
        },
        {
            "value": "CR",
            "text": "Ceramic Technology (SS)"
        },
        {
            "value": "CE",
            "text": "Civil Engineering"
        },
        {
            "value": "CN",
            "text": "Civil Engineering (SS)"
        },
        {
            "value": "XC",
            "text": "Civil Engineering (Tamil Medium)"
        },
        {
            "value": "CP",
            "text": "Civil Engineering and Planning"
        },
        {
            "value": "CZ",
            "text": "Civil and Structural Engineering"
        },
        {
            "value": "CC",
            "text": "Chemical and Electro Chemical Engineering (SS)"
        },
        {
            "value": "CH",
            "text": "Chemical Engineering"
        },
        {
            "value": "CL",
            "text": "Chemical Engineering (SS)"
        },
        {
            "value": "CO",
            "text": "Computer and Communication Engineering"
        },
        {
            "value": "CB",
            "text": "Computer Science and Business System"
        },
        {
            "value": "CW",
            "text": "Computer Science and Business System (SS)"
        },
        {
            "value": "CD",
            "text": "Computer Science and Design"
        },
        {
            "value": "CS",
            "text": "Computer Science and Engineering"
        },
        {
            "value": "CM",
            "text": "Computer Science and Engineering (SS)"
        },
        {
            "value": "XS",
            "text": "Computer Science and Engineering (Tamil Medium)"
        },
        {
            "value": "AM",
            "text": "Computer Science and Engineering (Artificial Intelligence and Machine Learning)"
        },
        {
            "value": "CG",
            "text": "Computer Science and Engineering (Artificial Intelligence and Machine Learning) (SS)"
        },
        {
            "value": "SC",
            "text": "Computer Science and Engineering (Cyber Security)"
        },
        {
            "value": "CF",
            "text": "Computer Science and Engineering (Data Science)"
        },
        {
            "value": "CI",
            "text": "Computer Science and Engineering (Internet of Things)"
        },
        {
            "value": "SB",
            "text": "Computer Science and Engineering (Internet of Things and Cyber Security including Block Chain Technology)"
        },
        {
            "value": "TS",
            "text": "Computer Science and Technology"
        },
        {
            "value": "CT",
            "text": "Computer Technology"
        },
        {
            "value": "CY",
            "text": "Cyber Security"
        },
        {
            "value": "EE",
            "text": "Electrical and Electronics Engineering"
        },
        {
            "value": "EY",
            "text": "Electrical And Electronics Engineering (SS)"
        },
        {
            "value": "ES",
            "text": "Electrical and Electronics (Sandwich) (SS)"
        },
        {
            "value": "EM",
            "text": "Electronics and Communication Engg. (SS)"
        },
        {
            "value": "EC",
            "text": "Electronics and Communication Engineering"
        },
        {
            "value": "ET",
            "text": "Electronics and Telecommunication Engg."
        },
        {
            "value": "EI",
            "text": "Electronics and Instrumentation Engineering"
        },
        {
            "value": "EX",
            "text": "Electronics and Instrumentation Engg. (SS)"
        },
        {
            "value": "EN",
            "text": "Environmental Engineering"
        },
        {
            "value": "FD",
            "text": "Food Technology"
        },
        {
            "value": "FS",
            "text": "Food Technology (SS)"
        },
        {
            "value": "FT",
            "text": "Fashion Technology"
        },
        {
            "value": "FY",
            "text": "Fashion Technology (SS)"
        },
        {
            "value": "GI",
            "text": "Geo-Informatics"
        },
        {
            "value": "HT",
            "text": "Handloom and Textile Technology"
        },
        {
            "value": "IB",
            "text": "Industrial Bio-Technology"
        },
        {
            "value": "IC",
            "text": "Instrumentation and Control Engineering"
        },
        {
            "value": "IE",
            "text": "Industrial Engineering"
        },
        {
            "value": "IT",
            "text": "Information Technology"
        },
        {
            "value": "IM",
            "text": "Information Technology (SS)"
        },
        {
            "value": "SE",
            "text": "Information Science and Engineering"
        },
        {
            "value": "IN",
            "text": "Industrial Engineering and Management"
        },
        {
            "value": "IS",
            "text": "Industrial Bio-Tech. (SS)"
        },
        {
            "value": "IY",
            "text": "Instrumentation and Control Engineering (SS)"
        },
        {
            "value": "LE",
            "text": "Leather Technology"
        },
        {
            "value": "MA",
            "text": "Material Science and Engineering (SS)"
        },
        {
            "value": "MC",
            "text": "Mechatronics"
        },
        {
            "value": "MG",
            "text": "Mechatronics (SS)"
        },
        {
            "value": "MZ",
            "text": "Mechatronics Engineering"
        },
        {
            "value": "MD",
            "text": "Medical Electronics Engg."
        },
        {
            "value": "ME",
            "text": "Mechanical Engineering"
        },
        {
            "value": "MF",
            "text": "Mechanical Engineering (SS)"
        },
        {
            "value": "MH",
            "text": "Mechanical Engineering (Sandwich)"
        },
        {
            "value": "MS",
            "text": "Mechanical Engineering (Sandwich) (SS)"
        },
        {
            "value": "XM",
            "text": "Mechanical Engineering (Tamil Medium)"
        },
        {
            "value": "MM",
            "text": "Mechanical Engineering (Manufacturing)"
        },
        {
            "value": "MO",
            "text": "Mechanical and Mechatronics Engineering (Additive Manufacturing)"
        },
        {
            "value": "MI",
            "text": "Mining Engineering"
        },
        {
            "value": "MN",
            "text": "Manufacturing Engineering"
        },
        {
            "value": "MR",
            "text": "Marine Engineering"
        },
        {
            "value": "MT",
            "text": "Metallurgical Engineering"
        },
        {
            "value": "MY",
            "text": "Metallurgical Engg. (SS)"
        },
        {
            "value": "MU",
            "text": "Mechanical and Automation Engineering"
        },
        {
            "value": "CJ",
            "text": "M.Tech Computer Science and Engineering (Integrated 5 Years)"
        },
        {
            "value": "NS",
            "text": "Nano Science and Technology"
        },
        {
            "value": "PA",
            "text": "Plastic Technology"
        },
        {
            "value": "PC",
            "text": "Petro Chemical Technology"
        },
        {
            "value": "PD",
            "text": "Petrochemical Engineering"
        },
        {
            "value": "PE",
            "text": "Petroleum Engineering"
        },
        {
            "value": "PP",
            "text": "Petroleum Engineering and Technology (SS)"
        },
        {
            "value": "PH",
            "text": "Pharmaceutical Technology"
        },
        {
            "value": "PM",
            "text": "Pharmaceutical Technology (SS)"
        },
        {
            "value": "PL",
            "text": "Polymer Technology"
        },
        {
            "value": "PN",
            "text": "Production Engineering (SS)"
        },
        {
            "value": "PR",
            "text": "Production Engineering"
        },
        {
            "value": "PS",
            "text": "Production Engineering (Sandwich) (SS)"
        },
        {
            "value": "PT",
            "text": "Printing Technology"
        },
        {
            "value": "RA",
            "text": "Robotics and Automation (SS)"
        },
        {
            "value": "RM",
            "text": "Robotics and Automation"
        },
        {
            "value": "RP",
            "text": "Rubber and Plastic Tech."
        },
        {
            "value": "SF",
            "text": "Safety and Fire Engineering"
        },
        {
            "value": "TC",
            "text": "Textile Chemistry"
        },
        {
            "value": "TT",
            "text": "Textile Technology (SS)"
        },
        {
            "value": "TX",
            "text": "Textile Technology"
        }
    ]
    
    

    const onFilterSelected = (selection: SharedSelection) => {
        console.log(selection);
        
    }
    if(loading)
        return <LoadingPage />

    return(
        <div className="home-page-containe min-h-[100vh] p-4">
            <div className="top-bar-container w-[70%] mx-auto my-auto">
                <div className="search-bar-container flex justify-evenly items-center">
                    <Input 
                        type="text"
                        placeholder="Search Colleges"
                        labelPlacement="inside"
                        startContent={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        }
                        className="mx-1"
                        radius="sm"
                    />
                    <ButtonOne
                        isFilled
                        buttonLabel="Search"
                        onClick={() => console.log('Search Clicked')}
                    />
                </div>
                <div className="filter-container flex justify-evenly items-center p-2">
                    <ButtonSelectBox 
                        label="Community"
                        items={communityList}
                        onSelectionChanged={onFilterSelected}
                    />
                    <ButtonSelectBox 
                        label="Location"
                        items={districts}
                        onSelectionChanged={onFilterSelected}
                    />
                    <ButtonSelectBox 
                        label="Branch"
                        items={branches}
                        onSelectionChanged={onFilterSelected}
                    />
                </div>
            </div>
            <div className="college-card-container gap-4 w-[70%] mx-auto my-4 flex flex-col items-center">
                <CollegeCard
                    collegeRank={1}
                    collegeName="Rajalakshmi Engineering College"
                    collegeCommunity="OC"
                    collegeDept="CSE"
                    collegeLocation="Chennai"
                    collegeMaxCutoff={0}
                    collegeMinCutoff={0}
                />
                <CollegeCard
                    collegeRank={1}
                    collegeName="Rajalakshmi Engineering College"
                    collegeCommunity="OC"
                    collegeDept="CSE"
                    collegeLocation="Chennai"
                    collegeMaxCutoff={0}
                    collegeMinCutoff={0}
                />
                <CollegeCard
                    collegeRank={1}
                    collegeName="Rajalakshmi Engineering College"
                    collegeCommunity="OC"
                    collegeDept="CSE"
                    collegeLocation="Chennai"
                    collegeMaxCutoff={0}
                    collegeMinCutoff={0}
                />
            </div>
        </div>
    )
}

export default HomePage;