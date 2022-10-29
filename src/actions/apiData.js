import axios from 'axios';

export const setApiData = apiDataList => {
  return {
    type: 'apiData',
    data: apiDataList,
  };
};

export const setApiData2 = apiDataLists => {
  return {
    type: 'apiData2',
    dataApi: apiDataLists,
  };
};

export const watchApi = () => {
  return {
    type: 'watchApi',
  };
};

export const watchApi2 = () => {
  return {
    type: 'watchApi2',
  };
};

// Uing Redux-thunk
// export const getapiData = () => {
//   return async dispatch => {
//     try {
//       const apiReq = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'GET',
//       });
//
//       const apiReq2 = await apiReq.json();
//
//       await dispatch(setApiData(apiReq2));
//
//       return apiReq2 || [];
//     } catch {}
//   };
// };

// Uing Redux-thunk
// export const getapiData2 = () => {
//   return dispatch => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/comments')
//       .then(res => {
//         const res2 = res.json();
//
//         dispatch(setApiData2(res2));
//       })
//       .catch(err => {});
//   };
// };
