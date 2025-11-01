import Alert from 'react-bootstrap/Alert';

function AlertsMessage({ message, variant }) { 
  
  if (!message) {
    return null; 
  }
  
  return (
    <Alert variant={variant} dismissible> 
      {message} 
    </Alert>
  );
}

export default AlertsMessage;