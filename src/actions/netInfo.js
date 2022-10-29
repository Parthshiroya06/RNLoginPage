export const netinfo = status => {
  return {
    type: 'netinfo',
    isConnected: status,
  };
};
