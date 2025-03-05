import { NativeModules } from "react-native";
export const changeIcon = (iconName) => NativeModules.ChangeIcon.changeIcon(iconName);
export const resetIcon = () => changeIcon();
export const getIcon = () => NativeModules.ChangeIcon.getIcon();
export const notifyExternalActivityStarting = () => NativeModules.ChangeIcon.notifyExternalActivityStarting();
export const notifyExternalActivityFinished = () => NativeModules.ChangeIcon.notifyExternalActivityFinished();
