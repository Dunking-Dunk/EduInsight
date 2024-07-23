import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from "./firebase";

const updateUserDetails = async (uid: string, personalDetails: Record<string, string>) => {
    try {
        await setDoc(doc(db, "users", uid), personalDetails);
        console.log("User details saved successfully");
    } catch (error) {
        console.error("Error saving user details: ", error);
    }
};

const checkuserDetails = async (uid: string): Promise<Boolean> => {
    try {
        const userDoc = doc(db, 'users', uid);
        const docSnap = await getDoc(userDoc);

        if(docSnap.exists()){
            const data = docSnap.data();
            return Boolean(data.name && data.fatherName && data.phoneNumber && data.address);
        }
        return false;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export {
    updateUserDetails,
    checkuserDetails
}