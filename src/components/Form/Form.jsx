/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const styles = {
    contactHeaderContainer: css`
      max-width: 60%;
      margin: 40px auto;
      padding: 20px;
    `,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.firstName?.type === "required" && "First name is required ... "}
      {errors.firstName?.type === "maxLength" && "Too many characters! ... "}
      <span>First Name</span>
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 10 })}
      />
      {errors.lastName?.type === "required" && "Last name is required ... "}
      {errors.lastName?.type === "maxLength" && "Too many characters! ... "}
      <span>Last Name</span>
      <input
        type="text"
        {...register("lastName", { required: true, maxLength: 10 })}
      />
      {errors.email?.type === "required" && "Last name is required ... "}
      {errors.email?.type === "maxLength" && "Too many characters! ... "}
      <span>Email </span>
      <input type="email" {...register("email", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default Form;
