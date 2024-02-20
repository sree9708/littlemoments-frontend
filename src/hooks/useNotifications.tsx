// import React from 'react'

// import { notification } from 'antd';

// const useNotifications = () => {
//     const [api] = notification.useNotification();
//         const openNotification = (description: string) => {
//                 api.info({
//                     message: `Error`,
//                     description: description,
//                     placement: 'topRight',
//                 });
//             };
//     return {
//         openNotification
//     }
// }

// export default useNotifications

import { message } from "antd"

export const successMessage = (text: any) => {
  message.success(text)
}

export const errorMessage = (text: any) => {
  message.error(text)
}

export const infoMessage = (text: any) => {
  message.info(text)
}

export const warningMessage = (text: any) => {
  message.warning(text)
}
