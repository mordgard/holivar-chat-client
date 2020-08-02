import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { Component } from "./Component";
import { $topics, fetchTopics } from "./model";

const Container = () => {
  const topics = useStore($topics);

  useEffect(() => {
    fetchTopics();
  }, []);

  return <Component topics={topics} />;
};

export { Container };
