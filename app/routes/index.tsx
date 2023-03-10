import { auth as clientAuth, provider } from "~/firebase.client";
import {  signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
//import { FooterWaves } from "../components/waves-footer";
import { useOptionalUser } from "~/utils";

export default function Index() {

    const navigate = useNavigate();

    const signInWithGoogle = async (): Promise<void> => {
        try {
            const result = await signInWithPopup(clientAuth, provider);
            console.log(result);
            // This go you directly to the home page after the user log in
            navigate("/home");
        } catch (error) {
            console.error(error);
        }
    };

    const user = useOptionalUser();
    return (

        <div className="h-screen grid lg:grid-cols-2 grid-rows-2 md:grid-cols-1 lg:pt-20 bg-[#f2f2f2]">
            <div
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 flex flex-col 
            justify-center items-left align-middle p-10 "
            >
                <h1 className="font-bold text-blue-500 text-5xl leading-none pb-5">
                    LightLines
                </h1>
                <h2 className="text-black text-3xl leading-none">
                    Connect with others who are seeking progress and purpose.
                </h2>
            </div>
            <div
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 flex flex-col 
            justify-center items-center p-5"
            >
                <div className="flex flex-col items-center bg-white rounded-lg p-6 pt-4 shadow-md">
                    <p className="flex flex-col font-bold text-lg p-6">
                        Sign in with Google to continue
                    </p>
                    <button
                        className="bg-blue-400 text-white text-2xl font-bold py-2 px-4 rounded-lg 
                    border-none cursor-pointer transition duration-200 ease-in-out shadow text-shadow hover:bg-blue-600"
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    )
}
