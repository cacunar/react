import './NoPage.css';

const NoPage = () => {
  return (
    <div className="no-page">
      <h1 className='text-error'>404 - Ha ocurrido un error</h1>
      <div className="image-container">
        <img className='img-error' src="../pokemon-error.webp" alt="error" />
      </div>
    </div>
  );
};

export default NoPage;
