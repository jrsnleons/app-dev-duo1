import logo from '../../assets/logo.svg'
import StyledSideBarButton from './SideBarButton.styled'
import {FaHouse, FaArrowRightFromBracket} from 'react-icons/fa6';
import {IoPerson} from 'react-icons/io5';
import { UserAuth } from '../../utils/contexts/AuthContext';

export default function SideBar() {
  const {logOut} = UserAuth();

  const handleLogoutClick = () => {
    logOut();
  }

  return (
    <div className="sm:min-w-20 md:min-w-20 lg:min-w-20 h-screen flex flex-col justify-between p-4">
      <div className="pt-2 self-start flex w-full justify-center">
        <StyledSideBarButton>
          <div className="flex flex-row items-center">
            <img src={logo} alt="" height={30} width={30}/>
          </div>
        </StyledSideBarButton>
      </div>

      <div className="flex flex-col justify-center items-center lg:gap-6 md:gap-6 sm:gap-1" >
        <StyledSideBarButton to={"/home"}>
          <FaHouse size={30}/>
        </StyledSideBarButton>
        <StyledSideBarButton to={"/profile"}>
            <IoPerson size={30}/>
        </StyledSideBarButton>
      </div>
      <div className='pb-1 justify-center items-center flex'>
        <StyledSideBarButton onClick={handleLogoutClick}>
            <FaArrowRightFromBracket size={30}/>
        </StyledSideBarButton>
      </div>
    </div>
  )
}