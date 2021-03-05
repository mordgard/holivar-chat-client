import * as React from "react";

export enum statuses {
  IDLE = "IDLE",
  PROCESSING = "PROCESSING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}
export type Status = keyof typeof statuses;

export function useAsync<T extends any[], R = any>(task: (...args: T) => Promise<R>) {
  const [status, setStatus] = React.useState<Status>(statuses.IDLE);
  const [message, setMessage] = React.useState("");

  const run = React.useCallback(async (...arg: T) => {
    setStatus(statuses.PROCESSING);
    try {
      const resp: R = await task(...arg);
      setStatus(statuses.SUCCESS);
      return resp;
    } catch (error) {
      const message = error?.response?.data?.error?.message || error.message;
      setMessage(message);
      setStatus(statuses.ERROR);
      throw error;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = React.useCallback(() => {
    setMessage("");
    setStatus(statuses.IDLE);
  }, []);

  return {
    run,
    status,
    message,
    reset,
  };
}

// Usage

// const task = useAsync(async (data: any) => await myApiRequest(data));
// task.run(data);
// useEffect(() => {
//   console.log(task.status); // 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';
// }, task.status);
