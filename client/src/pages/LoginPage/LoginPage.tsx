import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { auth, googleProvider } from "../../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { checkuserDetails } from "../../firebase/firestore";


const GoogleLoginCard = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            if(user) {
                const isAlreadyPresent = await checkuserDetails(user.uid);
                if(isAlreadyPresent)
                    navigate('/');
                else
                    navigate('/personal-details');
            }
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <Button onClick={signInWithGoogle} variant="solid" color="primary">
            Sign-in With Google
        </Button>
    )
}


const LoginPage = () => {
    const [user, loading, error] = useAuthState(auth);

    return(
        <div className="login-page flex justify-center items-center h-[100vh]">
            <Card>
                <CardHeader>
                    <p className="text-lg font-medium">Hello user, Welcome back 👋!</p>
                    
                </CardHeader>
                <CardBody>
                    <GoogleLoginCard />
                    {
                        error && <p className="text-danger-500">Authentication Failed</p>
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginPage;