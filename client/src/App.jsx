import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Spinner from "./components/Spinner"

function App() {
  const initialFormData={
      fullName:'',
      email:'',
      phoneNumber:'',
      usn:'',

  }

    const[formData,setFormData]=useState({
      fullName:'',
      email:'',
      phoneNumber:'',
      usn:'',
    })

    const handleChange=(event)=>{
      const{name,value}=event.target
      setFormData({...formData,[name]:value})
    }
    const [isLoading,setLoading]=useState(false);
    const handleSubmit=(event)=>{
      setLoading(true);
      const regData={
        name:formData.fullName,
        email:formData.email,
        phoneNumber:formData.phoneNumber,
        usn:formData.usn,
      }
      event.preventDefault()
    

  axios.post('http://localhost:5173/api/participant/register',regData).then((res)=>{  

  toast.success(res.data.message)
    setFormData({ ...initialFormData });
    setLoading(false);
})

  .catch((err)=>{  toast.error(err.response.data.message)
  setLoading(false);
  })

}

  return (
    <>
    <ToastContainer/>
    <div className='hero'>
      <h4 className='heading'>CLUB OF ROBOTICS</h4>
      <h5 className='heading'>Workshop 2024</h5>
      <img src="" alt="bot image" />
      {/* image to be added with corsit logo somewhere on the bot */}
        <div className='formdiv' style={{paddingTop:"2rem",paddingBottom:"3rem"}}>
          <form   className='full-form' onSubmit={handleSubmit}>

            <div className='inputdiv'>
              <label htmlFor="fullName" id='fullName'>NAME</label>
              <input type="text" name="fullName" className='inputbox' value={formData.fullName} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="email" id='email'>EMAIL</label>
              <input type="mail" name="email" className='inputbox' value={formData.email} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="phoneNumber" id='phoneNumber'>PHONE NUMBER</label>
              <input type="tel" name="phoneNumber" className='inputbox' value={formData.phoneNumber} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="usn" id='usn'>USN</label>
              <input type="text" name="usn" className='inputbox' value={formData.usn} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <button type='submit' className='submitbutton'>{isLoading ?<Spinner/>:"Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
