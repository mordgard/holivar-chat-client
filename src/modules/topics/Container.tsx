import React, { useEffect, useCallback, useState } from "react";
import { useStore } from "effector-react";
import { Component } from "./Component";
import { $topics, fetchTopics } from "./model";
import { addTopic } from "../add-topic";

const Container = () => {
  const topics = useStore($topics);
  const [isAddTopicOpen, setIsAddTopicOpen] = useState<boolean>(false);

  const handleOpenAddTopic = useCallback(() => setIsAddTopicOpen(true), []);
  const handleCloseAddTopic = useCallback(() => setIsAddTopicOpen(false), []);

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleAddTopic = useCallback(
    ({ title }) => {
      addTopic({ title });
      handleCloseAddTopic();
    },
    [handleCloseAddTopic],
  );

  return (
    <Component
      topics={topics}
      onAddTopic={handleAddTopic}
      onOpen={handleOpenAddTopic}
      onClose={handleCloseAddTopic}
      isOpen={isAddTopicOpen}
    />
  );
};

export { Container };
