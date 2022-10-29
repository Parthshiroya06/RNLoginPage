import axios from 'axios';
//uing redux-saga
export const getapiData = async () => {
  try {
    const apiReq = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });

    const apiReq2 = await apiReq.json();

    return apiReq2 || [];
  } catch {}
};

//uing redux-saga
// export const getapiData2 = () => {
//   const data = axios
//     .get('https://jsonplaceholder.typicode.com/comments')
//     .then(res => {
//       const res2 = res.data;
//       console.log('res2', res2);
//       return res2;
//     })
//     .catch(err => {});
//   console.log('getapidata', data);
//   return data;
// };
