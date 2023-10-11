import {ErrorLayout} from '../layouts';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../components/misc';

export default function ErrorView() {
  const navigate = useNavigate();
  return (
    <ErrorLayout>
      <div className="text-6xl">ERROR 404</div>
      <div className="text-2xl">Page not Found</div>
      <StyledButton onClick={() => {navigate('/login')}}>
        Go to Login
      </StyledButton>
    </ErrorLayout>
  )
}
