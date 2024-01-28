import SocialButton from './SocialButton'; 
import Formulario from './Formulario';
import Alert from './Alert';
const Registro = ({ onAlert, alert }) => {

  return (
    <div className="background-color">
      <div className="registration-container">
        <h2>Crea una cuenta</h2>
        <div>
          <SocialButton type="facebook" />
          <SocialButton type="twitter" />
          <SocialButton type="linkedin" />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario onAlert={ onAlert } />
        {alert.message && (
        <Alert message={alert.message} type={alert.type} /> 
        )}
      </div>
    </div>
  );
};

export default Registro;
