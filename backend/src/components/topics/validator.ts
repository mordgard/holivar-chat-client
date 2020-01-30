import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required")
});

export { validationSchema };
