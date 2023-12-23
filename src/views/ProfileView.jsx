import { Avatar } from "../components/misc";
import { ProfileLayout } from "../layouts";
import { UserAuth } from "../utils/contexts";
import {StyledEditProfileButton} from '../components/misc';

export default function ProfileView() {
  const {user} = UserAuth();
  return (
    <ProfileLayout>
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-5 flex-row">
          <div className="flex flex-col opacity-85">
            <span className="text-2xl font-medium">{user.displayName}</span>
            <span className="text-sm font-thin opacity-20">@{user.uid}</span>
          </div>
          <Avatar src={user.photoURL} size={70} className=""/>
        </div>
        <div className="mt-8">
          Your Bio is shown to the World 🌍
        </div>
        <div className="mt-6">
          <StyledEditProfileButton>
            Edit Profile
          </StyledEditProfileButton>
        </div>
        <hr className="h-px mt-6 mb-4 bg-gray-700 opacity-30 border-0"></hr>
        <div className="">
          <span className="font-bold pl-2 opacity-80">Chirps</span>
        </div>
      </div>
    </ProfileLayout>
  )
}
