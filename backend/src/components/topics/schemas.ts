import * as Yup from "yup";

const addTopicSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").max(50)
});

const updateTopicSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  topicId: Yup.string()
    .required("topicId is required")
    .min(24)
});

const deleteTopicSchema = Yup.object().shape({
  topicId: Yup.string()
    .required("topicId is required")
    .min(24)
});

export { addTopicSchema, updateTopicSchema, deleteTopicSchema };
