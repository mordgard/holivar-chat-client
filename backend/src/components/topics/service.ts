import { Topic } from "./model";

const topicsService = {
  async getTopics() {
    const topics = await Topic.find({});
    return topics;
  },
  async addNewTopic(title: string) {
    const topic = new Topic(title);
    await topic.save();
    return topic;
  },
  async deleteTopic(id: string) {
    const topic = await Topic.findByIdAndDelete(id);
    return topic;
  },
  async updateTopic(id: string, title: string) {
    const topic = await Topic.findByIdAndUpdate(id, title);
    return topic;
  }
};

export { topicsService };
