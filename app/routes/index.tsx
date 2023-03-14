import { auth as clientAuth, provider } from "~/firebase.client";
import { signInWithPopup } from "firebase/auth";
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
      console.error("error in the login");
    }
  };

  const user = useOptionalUser();
  return (
    <div className="grid h-screen grid-rows-2 bg-[#f2f2f2] md:grid-cols-1 lg:grid-cols-2 lg:pt-20">
      <div
        className="items-left flex flex-col justify-center p-10 align-middle
            lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 "
      >
        <h1 className="pb-5 text-5xl font-bold leading-none text-blue-500">
          LightLines
        </h1>
        <h2 className="text-3xl leading-none text-black">
          Connect with others who are seeking progress and purpose.
        </h2>
      </div>
      <div
        className="flex flex-col items-center justify-center p-5 lg:col-start-2
            lg:col-end-3 lg:row-start-1 lg:row-end-2"
      >
        <div className="flex flex-col items-center rounded-lg bg-white p-6 pt-4 shadow-md">
          <p className="flex flex-col p-6 text-lg font-bold">
            Sign in with Google to continue
          </p>
          <button
            className="text-shadow cursor-pointer rounded-lg border-none bg-blue-400 py-2 px-4
                    text-2xl font-bold text-white shadow transition duration-200 ease-in-out hover:bg-blue-600"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
