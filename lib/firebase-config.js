const sharedFirebaseConfig = {
  authDomain: "tabfflwebsite.firebaseapp.com",
  projectId: "tabfflwebsite",
  storageBucket: "tabfflwebsite.firebasestorage.app",
  messagingSenderId: "229042475467",
  appId: "1:229042475467:web:ad2cccbb8cb89d5ad2e64e",
  measurementId: "G-QJT28FTXNK",
};

export async function getFirebaseConfig() {
  const response = await fetch("/api/firebase-config", {
    cache: "no-store",
  });

  if (!response.ok) {
    let details = "";

    try {
      const data = await response.json();
      details = data?.error ? ` ${data.error}` : "";
    } catch {
      details = "";
    }

    throw new Error(`Unable to load Firebase configuration.${details}`);
  }

  const { apiKey } = await response.json();

  if (!apiKey) {
    throw new Error("Firebase API key is missing.");
  }

  return {
    apiKey,
    ...sharedFirebaseConfig,
  };
}
