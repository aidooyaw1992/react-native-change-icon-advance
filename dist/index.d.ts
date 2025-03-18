export declare const changeIcon: (iconName?: string) => Promise<string>;
export declare const resetIcon: () => Promise<string>;
export declare const getIcon: () => Promise<string>;
export declare const resolveAndroidEntryPoint: (activityToBeDisabled: string) => void;
export declare const notifyExternalActivityStarting: () => Promise<void>;
export declare const notifyExternalActivityFinished: () => Promise<void>;
