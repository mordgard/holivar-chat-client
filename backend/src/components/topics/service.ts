import { Topic } from "./model";

const topicsService = {
  async getTopics() {
    return await Topic.find({});
  },
  async addNewTopic(title: string) {
    const topic = new Topic({ title });
    await topic.save();
    return topic;
  },
  async deleteTopic(id: string) {
    return await Topic.findByIdAndDelete(id);
  },
  async updateTopic(id: string, title: string) {
    return await Topic.findByIdAndUpdate(id, { title });
  }
};

export { topicsService };
