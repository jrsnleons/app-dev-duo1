import {LoginLayout} from "../layouts";
import { StyledButton } from "../components/misc";
import { UserAuth } from "../utils/contexts";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

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
    if(user != null){
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <LoginLayout>
      <StyledButton onClick={handleClick}>Login in With Google</StyledButton>
    </LoginLayout>
  )
}
