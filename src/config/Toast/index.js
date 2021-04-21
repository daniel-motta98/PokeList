import {showMessage} from 'react-native-flash-message';

export const show = ({
  message,
  type = 'default',
  position = 'top',
  description,
}) => {
  showMessage({
    message,
    description,
    type,
    position,
  });
};
