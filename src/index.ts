import { NativeModules, Platform } from "react-native";

export const changeIcon = (iconName?: string): Promise<string> => NativeModules.ChangeIcon.changeIcon(iconName);
export const resetIcon = () => changeIcon();
export const getIcon = (): Promise<string> => NativeModules.ChangeIcon.getIcon();

export const resolveAndroidEntryPoint = (activityToBeDisabled: string): Promise<void> => {
  if (Platform.OS == 'android') {
    NativeModules.ChangeIcon.resolveEntryPoint(activityToBeDisabled);
  }
}

export const notifyExternalActivityStarting = (): Promise<void> => NativeModules.ChangeIcon.notifyExternalActivityStarting();
export const notifyExternalActivityFinished = (): Promise<void> => NativeModules.ChangeIcon.notifyExternalActivityFinished();

