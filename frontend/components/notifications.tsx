import { useEffect, useState } from "react";

const usePushNotifications = () => {
  const [permission, setPermission] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      const perm = await Notification.requestPermission();
      setPermission(perm);
      if (perm === "granted") {
        console.log("Push notifications granted.");
      } else {
        console.error("Push notifications denied.");
      }
    }
  };

  return { permission, requestPermission };
};

export default usePushNotifications;
