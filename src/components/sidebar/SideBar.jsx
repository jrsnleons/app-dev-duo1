import logo from '../../assets/logo.svg'
import StyledSideBarButton from './SideBarButton.styled'
import {FaHouse, FaMagnifyingGlass, FaPenToSquare, FaHeart, FaBars} from 'react-icons/fa6';
import {IoPerson} from 'react-icons/io5';
import { UserAuth } from '../../utils/contexts/AuthContext';

export default function SideBar() {
  const {logOut, user} = UserAuth();

  const handleHomeClick = () => {
    logOut();
  }

  const handleSearchClick = () => {
    console.log(user);
  }

  return (
    <div className="sm:w-20 md:w-20 lg:w-20 h-screen flex flex-col justify-between p-4 lg:mr-40">
      <div className="pt-2 self-start flex w-full justify-center">
        <StyledSideBarButton>
          <div className="flex flex-row items-center">
            <img src={logo} alt="" height={30} width={30}/>
          </div>
        </StyledSideBarButton>
      </div>

      <div className="flex flex-col justify-center items-center lg:gap-6 md:gap-6 sm:gap-1" >
        <StyledSideBarButton onClick={handleHomeClick}>
          <FaHouse size={30}/>
        </StyledSideBarButton>
        <StyledSideBarButton onClick={handleSearchClick}>
            <FaMagnifyingGlass size={30}/>
        </StyledSideBarButton>
        <StyledSideBarButton>
            <FaPenToSquare size={30}/>
        </StyledSideBarButton>
        <StyledSideBarButton>
            <FaHeart size={30}/>
        </StyledSideBarButton>
        <StyledSideBarButton>
            <IoPerson size={30}/>
        </StyledSideBarButton>
      </div>
      <div className='pb-1 justify-center items-center flex'>
        <StyledSideBarButton>
            <FaBars size={30}/>
        </StyledSideBarButton>
      </div>
    </div>
  )
}