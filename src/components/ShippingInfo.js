// const ShippingInfo = ({form}) => {
//     const {
//       register,
//       formState: { errors },
//     } = form;
//     console.log({ errors });
//     return (
//       <div className="form-step">
//         <h2>Shipping Details</h2>
//         <label>Address:</label>
//         <input
//           {...register("address", {
//             required: "Address is required",
//             minLength: {
//               value: 5,
//               message: "Address should be at least 5 characters",
//             },
//           })}
//         />
//         {errors.address && (
//           <p className="error-message">{errors.address.message}</p>
//         )}

//         <label>City:</label>
//         <input
//           {...register("city", {
//             required: "City is required",
//           })}
//         />
//         {errors.city && <p className="error-message">{errors.city.message}</p>}

//         <label>Postal Code:</label>
//         <input
//           {...register("postalCode", {
//             required: "Postal Code is required",
//             pattern: { value: /^\d{4}$/, message: "Invalid postal code" },
//           })}
//         />
//         {errors.postalCode && (
//           <p className="error-message">{errors.postalCode.message}</p>
//         )}
//       </div>
//     );
//   };
//   export default ShippingInfo;

import TextField from "@mui/material/TextField";

const ShippingInfo = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="form-step">
      <h2>Shipping Details</h2>

      <TextField
        id="address"
        label="Address"
        variant="standard"
        {...register("address", {
          required: "Address is required",
          minLength: {
            value: 5,
            message: "Address should be at least 5 characters",
          },
        })}
        error={!!errors.address}
        helperText={errors.address ? errors.address.message : ""}
        sx={{ width: "50%" }}
      />
      <br />
      <TextField
        id="city"
        label="City"
        variant="standard"
        {...register("city", {
          required: "City is required",
        })}
        error={!!errors.city}
        helperText={errors.city ? errors.city.message : ""}
        sx={{ width: "50%" }}
      />
      <br />
      <TextField
        id="postalCode"
        label="Postal Code"
        variant="standard"
        {...register("postalCode", {
          required: "Postal Code is required",
          pattern: { value: /^\d{4}$/, message: "Invalid postal code" },
        })}
        error={!!errors.postalCode}
        helperText={errors.postalCode ? errors.postalCode.message : ""}
        sx={{ width: "50%" }}
      />
    </div>
  );
};

export default ShippingInfo;
