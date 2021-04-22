import NetInfo from '@react-native-community/netinfo';

export const checkedConnected = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};
