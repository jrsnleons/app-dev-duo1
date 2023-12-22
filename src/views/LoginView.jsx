import {LoginLayout} from "../layouts";
import { StyledButton } from "../components/misc";
import { UserAuth } from "../utils/contexts";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import { FaGoogle } from "react-icons/fa6";

export default function LoginView() {
  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await googleSignIn();
    } catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    if(user !== null){
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <LoginLayout>
      <StyledButton onClick={handleClick}>
        <div className="flex p-2 flex-row gap-3 justify-center items-center">
          <FaGoogle size={25} />
          <span>
            Sign in With <b>Google</b>
          </span>
        </div>
      </StyledButton>
    </LoginLayout>
  )
}
