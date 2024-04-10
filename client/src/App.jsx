import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Spinner from "./components/Spinner"
import CopyableText from './components/payment'

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
      transactionid:'',
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
      transactionid:'',
    })

    const handleChange=(event)=>{
      const{name,value}=event.target
      setFormData({...formData,[name]:value})
    }
    const [isLoading,setLoading]=useState(false);
    const handleSubmit=(event)=>{
      setLoading(true);
      const regData={
        teamName:formData.teamName.trim(),
        m1Name:formData.m1Name.trim(),
        m1Email:formData.m1Email.trim(),
        m1PhoneNumber:formData.m1PhoneNumber.trim(),
        m1Usn:formData.m1Usn.trim(),
        m2Name:formData.m2Name.trim(),
        m2PhoneNumber:formData.m2PhoneNumber.trim(),
        m3Name:formData.m3Name.trim(),
        m3PhoneNumber:formData.m3PhoneNumber.trim(),
        m4Name:formData.m4Name.trim(),
        m4PhoneNumber:formData.m4PhoneNumber.trim(),
        transactionid:formData.transactionid.trim(),
      }
      event.preventDefault()

      // // Check if the object is empty
      // if (Object.values(regData).some(value => value === '')) {
      //   toast.error("Fields can't be null")
      //   setLoading(false);
      //   return;
      // } 

      // Check for empty fields
      const emptyFields = Object.entries(regData)
      .filter(([key, value]) => value === '')
      .map(([key, value]) => key);

      if (emptyFields.length > 0) {
        const errorMessage = `${emptyFields.join(', ')} cannot be empty`;
        toast.error(errorMessage);
        setLoading(false);
        return;
      }

      //to run locally
    // axios.post('http://localhost:5000/api/participant/register',regData).then((res)=>{  
      //to run on deployment
      axios.post('/api/participant/register',regData).then((res)=>{  

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
    {/* <div style="display: flex; items-align: center; justify-content: center; min-height: 100vh; background-color: #808080; color: white;">
  <div style="text-align: center;">
    <img src="/imgs/robo1.png" alt="Robot" style="width: 60px;" />
    <p style="font-size: 3rem; font-weight: bold; margin-bottom: 1rem;">Oops!!<br />Page not found</p>
  </div>
</div> */}

      <div style={{minHeight:"100vh",display:"flex",justifyContent:"center",alignContent:"center" ,flexDirection:"column"}}>
        <img src="/imgs/robo1.png" alt="robo img" style={{height:"40vh"}}/>
        <br />
        <h2 style={{fontWeight:"bolder",display:"flex" ,textAlign:"center"}}>OOps!!<br/> Page Not Found</h2>
      </div>

    {/* <ToastContainer/>
    <div className='hero'>
      <h4 className='heading'>CLUB OF ROBOTICS</h4>
      <h5 className='heading2'>Workshop 2024</h5>
      <p><b>Date: </b>13 & 14,April 2024</p>
      <p><b>Venue: </b>TEL Seminar Hall</p>
      <img className='robotimg' src="/imgs/robo1.png" alt="bot image" />
        <div className='formdiv' style={{paddingTop:"2rem",paddingBottom:"3rem"}}>
          <form   className='full-form' onSubmit={handleSubmit}>
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
              <input type="email" name="m1Email" className='inputbox' value={formData.m1Email} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="m1PhoneNumber" id='m1PhoneNumber'>MEMBER1 PHONE NUMBER</label>
              <input type="tel" name="m1PhoneNumber" className='inputbox' pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$" title='It should contain 10 digits e.g.9999999999' value={formData.m1PhoneNumber} onChange={handleChange} required/>
            </div>
            
            <div className='inputdiv'>
              <label htmlFor="m1Usn" id='m1Usn'>MEMBER1 USN</label>
              <input type="text" name="m1Usn" className='inputbox' minLength={10} maxLength={10} title="Format: 1siyyddnnn e.g.1si25cs001,1SI25CS001" value={formData.m1Usn} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m2Name" id='m2Name'>MEMBER2 NAME</label>
              <input type="text" name="m2Name" className='inputbox' value={formData.m2Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m2PhoneNumber" id='m2PhoneNumber'>MEMBER2 PHONE NUMBER</label>
              <input type="tel" name="m2PhoneNumber" className='inputbox' pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$" title='It should contain 10 digits e.g.9999999999' value={formData.m2PhoneNumber} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m3Name" id='m3Name'>MEMBER3 NAME</label>
              <input type="text" name="m3Name" className='inputbox' value={formData.m3Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m3PhoneNumber" id='m3PhoneNumber'>MEMBER3 PHONE NUMBER</label>
              <input type="tel" name="m3PhoneNumber" className='inputbox' pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$" title='It should contain 10 digits e.g.9999999999' value={formData.m3PhoneNumber} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m4Name" id='m4Name'>MEMBER4 NAME</label>
              <input type="text" name="m4Name" className='inputbox' value={formData.m4Name} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <label htmlFor="m4PhoneNumber" id='m4PhoneNumber'>MEMBER4 PHONE NUMBER</label>
              <input type="tel" name="m4PhoneNumber" className='inputbox' pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$" title='It should contain 10 digits e.g.9999999999' value={formData.m4PhoneNumber} onChange={handleChange} required/>
            </div>


            <div className="qrjpg">
              <h5>PAY INR <b><i>1600</i></b> HERE</h5>
              <img className="imageqr" src="/imgs/qrcode.jpeg" alt="qr code" />
              <CopyableText text="corsit@axl" />
          </div>

            <div className='inputdiv'>
              <label htmlFor="transactionid" id='transactionid'>TRANSACTION ID</label>
              <input type="text" name="transactionid" className='inputbox' value={formData.transactionid} onChange={handleChange} required/>
            </div>

            <div className='inputdiv'>
              <button type='submit' className='submitbutton'>{isLoading ?<Spinner/>:"Submit"}</button>
            </div> 

            
          </form>


        </div>
      </div> */}
    </>
  )
}

export default App
