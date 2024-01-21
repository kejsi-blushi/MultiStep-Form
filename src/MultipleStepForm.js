import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import PersonalInfo from "./components/PersonalInformation";
import ShippingInfo from "./components/ShippingInfo";
import PaymentInfo from "./components/PaymentInfo";
import Confirmation from "./components/Confirmation";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";

const steps = [
  "Fill your information",
  "Adress Information",
  "Payment",
  "Confirmation",
];

const MultiStepForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      creditCardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    mode: "all",
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitSuccessful, isValid, errors },
  } = form;

  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data);
  //   setActiveStep(activeStep + 1);
  // };

  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data);
  //   localStorage.setItem("formData", JSON.stringify(data));
  //   setActiveStep(activeStep + 1);
  // };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    const id = "id" + Math.random().toString(16).slice(2);

    localStorage.setItem(`formData_${id}`, JSON.stringify({ data }));

    // // Send the form data to a backend server
    // const response = await fetch("your_backend_endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ timestamp: new Date(), data }),
    // });

    // if (response.ok) {
    //   console.log("Form data sent to the server successfully");
    //   setActiveStep((prevStep) => prevStep + 1);
    // } else {
    //   console.error("Failed to send form data to the server");
    //   // Handle server-side error as needed
    // }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = async () => {
    const isValidStep = await isStepValid();
    if (isValidStep) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setActiveStep(0);
    form.reset();
  };

  console.log({ isValid, errors });

  // const isStepValid = async () => {
  //   if (activeStep === 0) {
  //     const triggerResult = await trigger(["name", "email"]);
  //     console.log("Trigger Result:", triggerResult);
  //     return triggerResult;
  //   } else if (activeStep === 1) {
  //     const triggerResult = await trigger(["address", "city", "postalCode"]);
  //     console.log("Trigger Result:", triggerResult);
  //     return triggerResult;
  //   } else if (activeStep === 2) {
  //     const triggerResult = await trigger(["cardNumber", "expiry", "cvv"]);
  //     console.log("Trigger Result:", triggerResult);
  //     return triggerResult;
  //   }

  //   return false;
  // };

  const isStepValid = async () => {
    const triggerFields =
      activeStep === 0
        ? ["name", "email"]
        : activeStep === 1
        ? ["address", "city", "postalCode"]
        : ["creditCardNumber", "expiryDate", "cvv"];

    const triggerResult = await trigger(triggerFields);
    console.log("Trigger Result:", triggerResult);
    return triggerResult;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="multi-step-form">
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {isLastStep() ? (
              <React.Fragment>
                {isSubmitSuccessful ? (
                  <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
                    <Confirmation />
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset} sx={{ mr: 1 }}>
                        Reset
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <div className="incomplete-steps">
                    <h3>
                      Incomplete steps. <br />
                      Please go back and complete all required fields.
                    </h3>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                    </Box>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && <PersonalInfo form={form} />}
                {activeStep === 1 && <ShippingInfo form={form} />}
                {activeStep === 2 && <PaymentInfo form={form} />}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {activeStep > 0 && (
                    <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                      Back
                    </Button>
                  )}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {activeStep === totalSteps() - 2 ? (
                    <Button onClick={handleSubmit(onSubmit)}>Finish</Button>
                  ) : (
                    <Button onClick={handleNext}>Next</Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </form>
    </div>
  );
};

export default MultiStepForm;
