// const PersonalInfo = ({ form }) => {
//   const {
//     register,
//     formState: { errors },
//   } = form;

//   return (
//     <div className="form-step">
//       <h2>Personal Information</h2>
//       <label>Name:</label>
//       <input
//         {...register("name", {
//           required: "Name is required",
//           minLength: {
//             value: 2,
//             message: "Name should be at least 2 characters",
//           },
//         })}
//       />
//       {errors.name && <p className="error-message">{errors.name.message}</p>}

//       <label>Email:</label>
//       <input
//         {...register("email", {
//           required: "Email is required",
//           pattern: {
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//             message: "Invalid email address",
//           },
//         })}
//       />
//       {errors.email && <p className="error-message">{errors.email.message}</p>}
//     </div>
//   );
// };
// export default PersonalInfo;

import { TextField } from "@mui/material";

const PersonalInfo = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="form-step">
      <h2>Personal Information</h2>

      <TextField
        id="name"
        label="Name"
        variant="standard"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters long",
          },
        })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
        sx={{ width: "35%" }}
      />
      <br />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
        sx={{ width: "35%" }}
      />
    </div>
  );
};

export default PersonalInfo;
