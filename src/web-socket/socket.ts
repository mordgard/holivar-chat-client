import { useEffect } from "react";
import socket from "socket.io-client";

const useSocket = () => {
  useEffect(() => {
    socket.connect();
  }, []);
};

export { useSocket };
