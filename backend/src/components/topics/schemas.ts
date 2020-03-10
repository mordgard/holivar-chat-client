import * as Yup from "yup";

const addTopicSchema = Yup.object().shape({
  title: Yup.string().required("Title is required")
});

const updateTopicSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  id: Yup.string()
    .required()
    .min(24)
});

const deleteTopicSchema = Yup.object().shape({
  id: Yup.string()
    .required()
    .min(24)
});

export { addTopicSchema, updateTopicSchema, deleteTopicSchema };
