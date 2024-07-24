import { Button, Tab, Tabs, User } from "@nextui-org/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Sidebar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const navList = [
        { path: '/home', label: 'Home' },
        { path: '/profile', label: 'Profile' },
        { path: '/plcmt-info', label: 'Placement info' },
        { path: '/saved', label: 'Saved' },
        { path: '/student-cutoff', label: 'Generate Cutoff' },
    ];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    const onTabSelected = (e) => {
        let pathToGo = navList.find(n => n.label === e)?.path
        navigate(pathToGo)
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-slate-100 side-bar-container max-w-[300px] h-[100vh] flex flex-col justify-evenly items-center">
            <div className="side-bar-app-name-container">
                <span className="text-xl font-bold">EduNavigo</span>
            </div>
            <div className="tab-container">
                <Tabs onSelectionChange={onTabSelected} color="primary" variant="light" isVertical>
                    {navList.map(navItem => (
                        <Tab
                            key={navItem.label}
                            title={navItem.label}
                            onClick={() => console.log(navItem.path)
                            }
                            className="text-left w-100% font-semibold text-base"
                        />
                    ))}
                </Tabs>
            </div>
            <div className="profile-container min-h-18 flex flex-col justify-center items-center">
                <User
                    className="user-profile text-center font-semibold"
                    name={user?.displayName}
                    avatarProps={{ src: user?.photoURL }}
                />
                <Button onClick={handleLogout} variant="light" color="danger" radius="sm">
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
