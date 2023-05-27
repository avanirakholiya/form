import React from 'react';
import { useFormik } from 'formik';





export default function Jsondata() {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      mobileno: '',
      email: '',
      password: '',
      city: '',
      address: '',
      file: '',
      gender: '',
      checkbox: [],

    },

    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    }
  });

  return (

    <div>
      <h1 style={{ paddingLeft: "120px" }}> form  </h1>
      <div style={{ height: "870px", width: "400px", border: "1px solid black" }}>



        <form onSubmit={formik.handleSubmit}>

          <div>
            <label> FirstName : </label>
            <input required type="text"
              {...formik.getFieldProps('firstname')} />
          </div><br />

          <div >
            <label> Lastname : </label>
            <input required type="text" {...formik.getFieldProps('lastname')} />
          </div><br />
          <div >
            <label> mobileno : </label>
            <input required type="text" maxLength="10" {...formik.getFieldProps('mobileno')} />
          </div><br />
          <div >
            <label> Email Id : </label>
            <input required type="text" {...formik.getFieldProps('email')} />
          </div><br />
          <div>
            <label> Password : </label>
            <input required type="password" {...formik.getFieldProps('password')} />
          </div><br />
          <div>
            <label> City : </label>
            <select required {...formik.getFieldProps('city')}>
              <option value="">Select</option>
              <option value="rajkot">Rajkot</option>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="junagadh">Junagadh</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div><br />
          <div>
            <label
              {...formik.getFieldProps('gender')}>gender :

              male  <input required onChange={formik.handleChange} checked={formik.values.gender === "male"} type="radio" name="gender" value="male" />
              Female  <input required onChange={formik.handleChange} checked={formik.values.gender === "female"} type="radio" name="gender" value="female" />
            </label>
          </div><br />

          <div>
            <label {...formik.getFieldProps('checkbox')}>Hobbies :<br />
              music <input type="checkbox" name="checkbox" value="music" onChange={formik.handleChange} checked={formik.values.checkbox.includes("music")} /><br />
              cooking <input type="checkbox" name="checkbox" value="cooking" onChange={formik.handleChange} checked={formik.values.checkbox.includes("cooking")} /><br />
              reading <input type="checkbox" name="checkbox" value="reading" onChange={formik.handleChange} checked={formik.values.checkbox.includes("reading")} />
            </label>
          </div>
          <div >
            <label> Address : </label>
            <textarea required type="text" {...formik.getFieldProps('address')} />
          </div>
          <div>
            <label>  </label>
            <input required type="file" {...formik.getFieldProps('file')} />
          </div><br />

          <div>
            <button type="submit" className="btn btn-success"> Submit </button>
            <button type="reset" className="btn btn-danger" onClick={formik.resetForm}>
              Reset
            </button>
          </div>

        </form>

      </div>
    </div>

  );
}  
