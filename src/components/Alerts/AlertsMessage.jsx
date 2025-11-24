import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faInfoCircle, 
  faExclamationTriangle, 
  faTimesCircle 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  success: faCheckCircle, 
  info: faInfoCircle,
  warning: faExclamationTriangle,
  danger: faTimesCircle,
};

function AlertsMessage({ message, variant }) { 
const iconObject = iconMap[variant];

  if (!message) {
    return null; 
  }
  
  return (
    <Alert variant={variant} dismissible> 
      {iconObject && (
        <FontAwesomeIcon 
          icon={iconObject} 
          className="me-2" 
        />
      )}{message} 
    </Alert>
  );
}

export default AlertsMessage;