import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Spinner from "./components/Spinner"

function App() {
  const initialFormData={
      teamName:'',
      m1Name:'',
      m1Email:'',
      m1PhoneNumber:'',
      m1Usn:'',
      m2Name:'',
      m2PhoneNumber:'',
      m3Name:'',
      m3PhoneNumber:'',
      m4Name:'',
      m4PhoneNumber:'',
  }

    const[formData,setFormData]=useState({
      teamName:'',
      m1Name:'',
      m1Email:'',
      m1PhoneNumber:'',
      m1Usn:'',
      m2Name:'',
      m2PhoneNumber:'',
      m3Name:'',
      m3PhoneNumber:'',
      m4Name:'',
      m4PhoneNumber:'',
    })

    const handleChange=(event)=>{
      const{name,value}=event.target
      setFormData({...formData,[name]:value})
    }
    const [isLoading,setLoading]=useState(false);
    const handleSubmit=(event)=>{
      setLoading(true);
      const regData={
        teamName:formData.teamName,
        m1Name:formData.m1Name,
        m1Email:formData.m1Email,
        m1PhoneNumber:formData.m1PhoneNumber,
        m1Usn:formData.m1Usn,
        m2Name:formData.m2Name,
        m2PhoneNumber:formData.m2PhoneNumber,
        m3Name:formData.m3Name,
        m3PhoneNumber:formData.m3PhoneNumber,
        m4Name:formData.m4Name,
        m4PhoneNumber:formData.m4PhoneNumber,
      }
      event.preventDefault()
    axios.post('http://localhost:5000/api/participant/register',regData).then((res)=>{  

  toast.success(res.data.message)
    setFormData({ ...initialFormData });
    setLoading(false);
})

  .catch((err)=>{  toast.error(err.response.data.message)
  setLoading(false);
  })

}


//Razorpay code begins

// const initPay = (data) => {
//   const options = {
//     key : "************************",
//     amount: 1000,
//     currency: "INR",
//     name: formData.m1Name,
//     description: "Test",
//     order_id: data.id,
//     handler: async (response) => {
//       try {
//         const verifyURL = "https://localhost:8080/api/payment/verify";
//         const {data} = await axios.post(verifyURL,response);
//       } catch(error) {
//         console.log(error);
//       }
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };
//   const rzp1 = new window.Razorpay(options);
//   rzp1.open();
// };

// const handlePay = async () => {
//   try {
//     const orderURL = "https://localhost:5173/api/payment/orders";
//     const {data} = await axios.post(orderURL,{amount: 1000});
//     console.log(data);
//     initPay(data.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const openRazorpay = async () => {
//   try {
//     const response = await axios.get('http://localhost:5173/api/razorpay/initiate');
//     const { razorpayOptions } = response.data;
//     if (!razorpayOptions) {
//       throw new Error('Invalid Razorpay options');
//     }
//     const razorpayInstance = new window.Razorpay(razorpayOptions);
//     razorpayInstance.open();
//   } catch (error) {
//     console.error('Error initializing Razorpay:', error);
//   }
// };

// const openRazorpay = async () => {
//   console.log('Submit button clicked');
//   const options = {
//     key: 'rzp_test_jQc2cqe84sxY7h', // Replace with your actual Razorpay key
//     amount: 1000, // Amount in paise (₹10)
//     currency: 'INR',
//     name: 'Corsit',
//     description: 'Workshop Registration',
//     prefill: {
//       name: formData.m1Name,
//       email: formData.m1Email,
//       contact: formData.m1PhoneNumber,
//     },
//     handler: function (response) {
//       // Handle Razorpay success callback
//       console.log('Payment successful:', response);
//       handleSubmit(); // After successful payment, submit the form
//     },
//     theme: {
//       color: '#F37254',
//     },
//   };
//   const response = await axios.get('http://localhost:5173/api/razorpay/initiate');
//   const { razorpayOptions } = response.data;
//   const razorpayInstance = new window.Razorpay(razorpayOptions);
//   razorpayInstance.open();
// }

  //RAzorpay code ends


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
          {/* <form   className='full-form' onSubmit={openRazorpay}> */}
            <div className='inputdiv'>
              <label htmlFor="teamName" id='teamName'>TEAM NAME</label>
              <input type="text" name="teamName" className='inputbox' value={formData.teamName} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m1Name" id='m1Name'>MEMBER1 NAME</label>
              <input type="text" name="m1Name" className='inputbox' value={formData.m1Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m1Email" id='m1Email'>MEMBER1 EMAIL</label>
              <input type="mail" name="m1Email" className='inputbox' value={formData.m1Email} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="m1PhoneNumber" id='m1PhoneNumber'>MEMBER1 PHONE NUMBER</label>
              <input type="tel" name="m1PhoneNumber" className='inputbox' value={formData.m1PhoneNumber} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="m1Usn" id='m1Usn'>MEMBER1 USN</label>
              <input type="text" name="m1Usn" className='inputbox' value={formData.m1Usn} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m2Name" id='m2Name'>MEMBER2 NAME</label>
              <input type="text" name="m2Name" className='inputbox' value={formData.m2Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m2PhoneNumber" id='m2PhoneNumber'>MEMBER2 PHONE NUMBER</label>
              <input type="tel" name="m2PhoneNumber" className='inputbox' value={formData.m2PhoneNumber} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m3Name" id='m3Name'>MEMBER3 NAME</label>
              <input type="text" name="m3Name" className='inputbox' value={formData.m3Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m3PhoneNumber" id='m3PhoneNumber'>MEMBER3 PHONE NUMBER</label>
              <input type="tel" name="m3PhoneNumber" className='inputbox' value={formData.m3PhoneNumber} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m4Name" id='m4Name'>MEMBER4 NAME</label>
              <input type="text" name="m4Name" className='inputbox' value={formData.m4Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m4PhoneNumber" id='m4PhoneNumber'>MEMBER4 PHONE NUMBER</label>
              <input type="tel" name="m4PhoneNumber" className='inputbox' value={formData.m4PhoneNumber} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <button type='submit' className='submitbutton'>{isLoading ?<Spinner/>:"Submit"}</button>
            </div> 

            {/* <div className='inputdiv'>
              <button type='button' className='submitbutton' onClick={handlePay}>{isLoading ? <Spinner /> : "Submit"}</button>
            </div> */}
            
          </form>

          {/* <div className='inputdiv'>
            <button type='button' className='submitbutton' onClick={openRazorpay}>{isLoading ? <Spinner /> : "Pay with Razorpay"}</button>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default App
