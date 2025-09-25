import RegistrationForm from '../components/RegistrationForm';

const Register: React.FC = () => {
  return (
    <RegistrationForm 
      onSubmit={(data) => {
        console.log('Form data:', data);
      }}
      onError={(error) => {
        console.error('Form error:', error);
      }}
    />
  )
}

export default Register;