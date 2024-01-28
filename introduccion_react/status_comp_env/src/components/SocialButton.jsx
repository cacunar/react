import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ type }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'facebook':
        return faFacebook;
      case 'twitter':
        return faTwitter;
      case 'linkedin':
        return faLinkedin;
      default:
        return null;
    }
  };

  const icon = getIcon(type);

  return (
    <button className="social-button">
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
};

export default SocialButton;
