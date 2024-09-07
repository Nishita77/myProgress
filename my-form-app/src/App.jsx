import React from "react";
import {useForm} from "react-hook-form";

function App() {
  const {register, handleSubmit, formState:{errors}}=useForm();

  const onSubmit = (data)=>{
    console.log("Form Data: ",data);
    alert("Form submitted successfully");
  };

  return (
  <div className="App">
    <h2>User Registration</h2>
  
   <form onSubmit={handleSubmit(onSubmit)}> 
    <div>
      <label>Name:</label>
      <input type="text"
      {...register("name",{required: "Name is required"})}
      />
      {errors.name && <p> {errors.name.message}</p>}
    </div>
    <div>
      <label>Email:</label>
      <input type="text" 
      {...register("email",{required:"Email isk required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Enter a valid email address",
      },
      })}
      />
      {errors.email && <p> {errors.email.message}</p>}
    </div>
    <div>
      <label>Password:</label>
      <input type="text"
      {...register("Password",{required:"Password is required",
        minLength:{
          value:6,
          message:"Password must be at least 6 characters long",
        },
      })}
      />
       {errors.Password && <p> {errors.Password.message}</p>}
    </div>

    <input type="Submit" value="Register" />
    
    </form>
  </div>
  );
}

export default App
