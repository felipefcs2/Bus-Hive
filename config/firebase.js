// CONFIGURAÇÃO FIREBASE REALTIME DATABASE
const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database");

const serviceAccount = require("./serviceAccountKey.json");

const app = getApps().length
    ? getApps()[0]
    : initializeApp({
        credential: cert(serviceAccount),
        databaseURL: "https://bushive-default-rtdb.firebaseio.com/"
    });

const db = getDatabase(app);

module.exports = db;