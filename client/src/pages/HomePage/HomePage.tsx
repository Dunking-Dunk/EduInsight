import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import SearchBarContainer from "../../components/SearchBarContainer/SearchBarContainer";

const HomePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user)
            navigate('/login');
    })

    if(loading)
        return <LoadingPage />

    return(
        <div className="home-page-container min-h-[100vh] p-4">
            <SearchBarContainer />
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