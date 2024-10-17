/**
 * Represents a user.
 */
export interface User {
    /** unique database ID of the user */
    _id: string;
    /** the user's X data, if connected via X */
    xData: XData;
    /** when the account was created (unix) */
    createdTimestamp: number;
    /** the user's in-game data */
    inGameData: InGameData;
}

/**
 * Represents a user's connected X account's data.
 */
export interface XData {
    /** the user's X ID */
    xId: string;
    /** the user's X display name */
    xDisplayName: string;
    /** the user's profile picture in X (URL) */
    xProfilePicture: string;
}

/**
 * Represents a user's in-game data.
 */
export interface InGameData {
    /** the user's account level data */
    levelData: UserLevelData;
    /** the user's currency data */
    currencyData: UserCurrencyData;
    /** the user's inventory */
    inventory: Inventory;
}

/**
 * Represents a user's account level data.
 */
export interface UserLevelData {
    /** the user's current level */
    level: number;
    /** the user's current XP */
    xp: number;
}

/**
 * Represents the user's currency data.
 */
export interface UserCurrencyData {
    /** the user's current balance of coins */
    coins: number;
    /** the current amount of points the user has (arbitrary 'ranking' value) */
    points: number;
}

/**
 * Represents a user's inventory.
 */
export interface Inventory {
    /** the items owned by the user */
    items: Item[];
    /** the resources owned by the user */
    resources: Resource[];
}