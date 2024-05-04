import { Platform, PermissionsAndroid } from "react-native";
import messaging, { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import Toast from "react-native-toast-message";

//! expo notifications
// function useNotification() {
//     async function registerForPushNotification() {
//         let token = '';
        
//         if (Platform.OS === 'android') {
//             Notifications.setNotificationChannelAsync('default', {
//                 name: 'default',
//                 importance: Notifications.AndroidImportance.MAX,
//                 vibrationPattern: [0, 250, 250, 250],
//                 lightColor: '#FFFFFF',
//             });
//         }

//         if (Device.isDevice) {

//             const { status: existingStatus } = await Notifications.getPermissionsAsync();

//             let finalStatus = existingStatus;

//             if (existingStatus !== 'granted') {
//                 const { status } = await Notifications.requestPermissionsAsync();
//                 finalStatus = status;
//             }

//             if (finalStatus !== 'granted') {
//                 alert('Push Notifications are required to use this app!');
//                 return;
//             }

//             if (Constants.expoConfig?.extra) {
//                 token = (await Notifications.getExpoPushTokenAsync({
//                     projectId: Constants.expoConfig?.extra.eas.projectId,
//                 })).data;
    
//                 return token;   
//             }

//         } else {
//             alert('must use a physical device!');
//             return;
//         }
//     }

//     return {
//         registerForPushNotification
//     }
// }

function useNotification() {

    async function registerForPushNotification() {
        if (Platform.OS === 'ios') {
            const status = await messaging().requestPermission()
            if (status !== messaging.AuthorizationStatus.PROVISIONAL || messaging.AuthorizationStatus.AUTHORIZED) {
                Toast.show({
                    type: 'error',
                    text1: 'Permission required!',
                    text2: 'Permissions needed to send notifications!'
                });

                return;
            } else {
                await messaging().registerDeviceForRemoteMessages();

                const token = await messaging().getToken();

                console.log("push token: ", token);

                return token;
            }
        } else {
            const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

            if (status !== 'granted') {
                Toast.show({
                    type: 'error',
                    text1: 'Permission required!',
                    text2: 'Permissions needed to send notifications!'
                });

                return;
            } else {
                await messaging().registerDeviceForRemoteMessages();

                const token = await messaging().getToken();

                console.log("push token: ", token);

                return token;
            }


        }
    }

    //* notification opened app from a completely quit state
    async function handleInitialNotification() {
        const message = await messaging().getInitialNotification();

        return message;
    }

    //* notification received in the foreground
    async function handleNotificationReceivedForeground(message: FirebaseMessagingTypes.RemoteMessage) {
        console.log("foreground", message);
    }

    //* notification received in the background
    async function handleNotificationReceivedBackground(message: FirebaseMessagingTypes.RemoteMessage) {
        console.log("background", message);
    }

    //* notification was touched or pressed or interacted with
    async function handleNotificationReceivedResponse(message: FirebaseMessagingTypes.RemoteMessage) {
        console.log("pressed: ", message);
    }

    return {
        registerForPushNotification,
        handleNotificationReceivedBackground,
        handleNotificationReceivedForeground,
        handleNotificationReceivedResponse,
        handleInitialNotification,
    }
}

export default useNotification;