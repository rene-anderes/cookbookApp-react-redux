
export default function isDevMode() {

    const value = process.env.NODE_ENV;
    console.log("NODE_ENV: " + value);
    if (value === "development") {
        return true;
    } else {
        return false;
    }
}