import React, { useEffect, useState, useCallback } from "react";
import api from "../../api";
import { Component } from "./Component";

const Container = () => {
  const [topics, setTopics] = useState<any>([]);

  const fetchTopics = useCallback(async () => {
    try {
      const response = await api.topics.getTopics();
      const { data } = response;
      console.log("data", data);
      setTopics(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  return <Component topics={topics} />;
};

export { Container };
