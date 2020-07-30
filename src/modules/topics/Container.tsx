import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Component } from "./Component";
import { $topics, fetchTopicsFx } from "./model";

const Container = () => {
  const topics = useStore($topics);

  console.log("topics", topics);

  useEffect(() => {
    fetchTopicsFx({});
  }, []);

  return <Component topics={topics} />;
};

export { Container };
