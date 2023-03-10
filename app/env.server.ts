
export default function getEnv() {
    return {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_APP_STORAGE_BUCKET: process.env.FIREBASE_APP_STORAGE_BUCKET,
        FIREBASE_APP_MESSAGING_SENDER_ID: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
    };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
    var ENV: ENV;
    interface Window {
        ENV: ENV;
    }
}
