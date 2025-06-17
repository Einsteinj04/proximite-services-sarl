'use client';
import React, { useState } from 'react';
import { APP_ROUTES } from '@/config';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {BulletPoints} from '@/components/index';
import Link from 'next/link';
import {
  Flight,
  Email,
  Phone,
  Groups,
  CalendarToday,
  Place,
  Person,
  WhatsApp
} from '@mui/icons-material';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('booking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: 'round-trip',
    origin: '',
    destination: '',
    departureDate: null,
    returnDate: null,
    passengers: 1,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          tripType: 'round-trip',
          origin: '',
          destination: '',
          departureDate: null,
          returnDate: null,
          passengers: 1,
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="md:py-40 py-22 text-gray-700">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <BulletPoints feature={activeTab === 'booking' ? 'Flight Booking' : 'Contact Us'} position='center' underlineColor="amber-400" className='text-center sm:py-4 py-2'/>
            {/* <h1 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              {activeTab === 'booking' ? 'Flight Booking' : 'Contact Us'}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-400 rounded"></span>
            </h1> */}
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeTab === 'booking' 
                ? 'Fill out the form below to book your flight. We\'ll get back to you within 24 hours with the best options.' 
                : 'Have questions? Get in touch with our travel experts for personalized assistance.'}
            </p>
          </div>

          {/* Tabbed Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 border">
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center cursor-pointer ${activeTab === 'booking' ? 'bg-[#1d293d] text-white' : 'text-[#1d293d] hover:bg-gray-50'}`}
                onClick={() => setActiveTab('booking')}
              >
                <Flight className="mr-2" />
                Book a Flight
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium flex items-center justify-center cursor-pointer ${activeTab === 'contact' ? 'bg-[#1d293d] text-white' : 'text-[#1d293d]  hover:bg-gray-50'}`}
                onClick={() => setActiveTab('contact')}
              >
                <Email className="mr-2" />
                Contact Us
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-bold text-[#1d293d] mb-4">Thank you for your booking request!</h2>
                  <p className="text-gray-600 mb-8">
                    We've received your details and will contact you within 24 hours with flight options. 
                    A confirmation has been sent to your email.
                  </p>
                  <button
                    className="bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-500 hover:to-pink-500 text-white font-semibold px-8 py-3 rounded-lg"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Person className="text-amber-400 mr-2" />
                        <h3 className="text-xl font-semibold text-[#1d293d]">Personal Information</h3>
                      </div>
                      <div className="border-b border-gray-200 mb-6"></div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Full Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Flight Details */}
                    {activeTab === 'booking' && (
                      <>
                        <div>
                          <div className="flex items-center mb-4">
                            <Flight className="text-amber-400 mr-2" />
                            <h3 className="text-xl font-semibold text-[#1d293d]">Flight Details</h3>
                          </div>
                          <div className="border-b border-gray-200 mb-6"></div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                              <label className="block text-gray-700 mb-2">Trip Type</label>
                              <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                name="tripType"
                                value={formData.tripType}
                                onChange={handleChange}
                                required
                              >
                                <option value="round-trip">Round Trip</option>
                                <option value="one-way">One Way</option>
                                <option value="multi-city">Multi-City</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">From (Origin)</label>
                              <div className="relative">
                                <Place className="absolute left-3 top-3 text-gray-400" />
                                <input
                                  type="text"
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                  name="origin"
                                  value={formData.origin}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">To (Destination)</label>
                              <div className="relative">
                                <Place className="absolute left-3 top-3 text-gray-400" />
                                <input
                                  type="text"
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                  name="destination"
                                  value={formData.destination}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">Passengers</label>
                              <div className="relative">
                                <Groups className="absolute left-3 top-3 text-gray-400" />
                                <input
                                  type="number"
                                  min="1"
                                  max="10"
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                  name="passengers"
                                  value={formData.passengers}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 mb-2">Departure Date</label>
                            <DatePicker
                              value={formData.departureDate}
                              onChange={(newValue) => {
                                setFormData(prev => ({ ...prev, departureDate: newValue }));
                              }}
                              renderInput={({ inputRef, inputProps, InputProps }) => (
                                <div className="relative">
                                  <input
                                    ref={inputRef}
                                    {...inputProps}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                  />
                                  <div className="absolute left-3 top-3">
                                    <CalendarToday className="text-gray-400" />
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                          {formData.tripType === 'round-trip' && (
                            <div>
                              <label className="block text-gray-700 mb-2">Return Date</label>
                              <DatePicker
                                value={formData.returnDate}
                                onChange={(newValue) => {
                                  setFormData(prev => ({ ...prev, returnDate: newValue }));
                                }}
                                minDate={formData.departureDate}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                  <div className="relative">
                                    <input
                                      ref={inputRef}
                                      {...inputProps}
                                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                    />
                                    <div className="absolute left-3 top-3">
                                      <CalendarToday className="text-gray-400" />
                                    </div>
                                  </div>
                                )}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {/* Message */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Email className="text-amber-400 mr-2" />
                        <h3 className="text-xl font-semibold text-[#1d293d]">
                          {activeTab === 'booking' ? 'Special Requests' : 'Your Message'}
                        </h3>
                      </div>
                      <div className="border-b border-gray-200 mb-6"></div>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={activeTab === 'booking' ? 'Special requests or additional information' : 'How can we help you?'}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-500 hover:to-pink-500 text-white font-semibold px-8 py-3 rounded-lg w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : activeTab === 'booking' ? 'Request Flight Booking' : 'Send Message'}
                      </button>

                      <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Need urgent assistance?</span>
                        <Link
                          href="https://wa.me/2290197133534"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center border border-green-500 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg"
                        >
                          <WhatsApp className="mr-2" />
                          Chat on WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <Email className="text-4xl text-amber-400 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-6">Send us an email and we'll get back to you within 24 hours.</p>
              <Link
                href="mailto:proximiteservices.az@gmail.com"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-white px-6 py-2 rounded-lg"
              >
                proximiteservices.az@gmail.com
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border ">
              <div className="flex items-center mb-4">
                <Phone className="text-4xl text-pink-400 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-6">Available now from Monday to Friday, 9AM to 5PM.</p>
              <Link
                href="tel:+2290197133534"
                className="inline-block bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg"
              >
                (+22901) 97-13-35-34 / 63-30-23-05
              </Link>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <WhatsApp className="text-4xl text-green-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-6">For instant assistance, message us on WhatsApp.</p>
              <Link
                href="https://wa.me/23497133534"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
              >
                <WhatsApp className="mr-2" />
                Chat Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ContactPage;



// 'use client';
// import React, { useState } from 'react';
// import { Box, Container, Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Divider, Chip, Paper } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { WhatsApp, Email, Phone, Flight, Hotel, Groups, CalendarToday, Place, Person } from '@mui/icons-material';
// import { APP_ROUTES } from '@/config';

// const ContactPage = () => {
//   const [activeTab, setActiveTab] = useState('booking');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     tripType: 'round-trip',
//     origin: '',
//     destination: '',
//     departureDate: null,
//     returnDate: null,
//     passengers: 1,
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Send booking data to your API route
//       const res = await fetch('/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSubmitSuccess(true);
//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           tripType: 'round-trip',
//           origin: '',
//           destination: '',
//           departureDate: null,
//           returnDate: null,
//           passengers: 1,
//           message: ''
//         });
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       {/* <Box sx={{
//         py: 8,
//         // background: 'linear-gradient(rgba(29, 41, 61, 0.9), rgba(29, 41, 61, 0.95))',
//         // color: 'white',
//         color:'grey',
//         position: 'relative',
//         overflow: 'hidden',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '4px',
//           // background: 'linear-gradient(90deg, #f6ad55, #f687b3, #63b3ed)'
//         }
//       }}> */}
//         <Container maxWidth="lg" className='section-y' sx={{pt:30,xs:{pt:5}}}>
//           <Box textAlign="center" mb={6}>
//             <Typography variant="h3" component="h1" sx={{
//               fontWeight: 700,
//               mb: 2,
//               position: 'relative',
//               display: 'inline-block',
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 bottom: -10,
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: '80px',
//                 height: '4px',
//                 background: '#f6ad55',
//                 borderRadius: '2px'
//               }
//             }}>
//               {activeTab === 'booking' ? 'Flight Booking' : 'Contact Us'}
//             </Typography>
//             <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', mx: 'auto' }}>
//               {activeTab === 'booking' 
//                 ? 'Fill out the form below to book your flight. We\'ll get back to you within 24 hours with the best options.' 
//                 : 'Have questions? Get in touch with our travel experts for personalized assistance.'}
//             </Typography>
//           </Box>

//           <Paper elevation={6} sx={{ borderRadius: 2, overflow: 'hidden' }}>
//             <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider' }}>
//               <Button
//                 fullWidth
//                 variant={activeTab === 'booking' ? 'contained' : 'text'}
//                 onClick={() => setActiveTab('booking')}
//                 sx={{
//                   py: 2,
//                   borderRadius: 0,
//                   backgroundColor: activeTab === 'booking' ? '#1d293d' : 'transparent',
//                   color: activeTab === 'booking' ? 'white' : '#1d293d',
//                   '&:hover': {
//                     backgroundColor: activeTab === 'booking' ? '#1d293d' : 'rgba(255,255,255,0.1)'
//                   }
//                 }}
//                 startIcon={<Flight />}
//               >
//                 Book a Flight
//               </Button>
//               <Button
//                 fullWidth
//                 variant={activeTab === 'contact' ? 'contained' : 'text'}
//                 onClick={() => setActiveTab('contact')}
//                 sx={{
//                   py: 2,
//                   borderRadius: 0,
//                   backgroundColor: activeTab === 'contact' ? '#1d293d' : 'transparent',
//                   color: activeTab === 'contact' ? 'white' : '#1d293d',
//                   '&:hover': {
//                     backgroundColor: activeTab === 'contact' ? '#1d293d' : 'rgba(255,255,255,0.1)'
//                   }
//                 }}
//                 startIcon={<Email />}
//               >
//                 Contact Us
//               </Button>
//             </Box>

//             <Box sx={{ p: { xs: 3, md: 5 }, backgroundColor: 'white' }}>
//               {submitSuccess ? (
//                 <Box textAlign="center" py={6}>
//                   <Typography variant="h5" color="primary" gutterBottom>
//                     Thank you for your booking request!
//                   </Typography>
//                   <Typography variant="body1" sx={{ mb: 4 }}>
//                     We've received your details and will contact you within 24 hours with flight options. 
//                     A confirmation has been sent to your email.
//                   </Typography>
//                   <Button 
//                     variant="contained" 
//                     color="primary" 
//                     onClick={() => setSubmitSuccess(false)}
//                     sx={{ px: 4, py: 1.5 }}
//                   >
//                     Make Another Booking
//                   </Button>
//                 </Box>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <Grid container spacing={4}>
//                     {/* Personal Information */}
//                     <Grid item xs={12}>
//                       <Typography variant="h6" sx={{ mb: 2, color: '#1d293d', display: 'flex', alignItems: 'center' }}>
//                         <Person sx={{ mr: 1, color: '#f6ad55' }} /> Personal Information
//                       </Typography>
//                       <Divider sx={{ mb: 3 }} />
//                       <Grid container spacing={3}>
//                         <Grid item xs={12} md={4}>
//                           <TextField
//                             fullWidth
//                             label="Full Name"
//                             variant="outlined"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Grid>
//                         <Grid item xs={12} md={4}>
//                           <TextField
//                             fullWidth
//                             label="Email"
//                             variant="outlined"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Grid>
//                         <Grid item xs={12} md={4}>
//                           <TextField
//                             fullWidth
//                             label="Phone Number"
//                             variant="outlined"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Grid>
//                       </Grid>
//                     </Grid>

//                     {/* Flight Details */}
//                     {activeTab === 'booking' && (
//                       <>
//                         <Grid item xs={12}>
//                           <Typography variant="h6" sx={{ mb: 2, color: '#1d293d', display: 'flex', alignItems: 'center' }}>
//                             <Flight sx={{ mr: 1, color: '#f6ad55' }} /> Flight Details
//                           </Typography>
//                           <Divider sx={{ mb: 3 }} />
//                           <Grid container spacing={3}>
//                             <Grid item xs={12} md={3}>
//                               <FormControl fullWidth>
//                                 <InputLabel>Trip Type</InputLabel>
//                                 <Select
//                                   label="Trip Type"
//                                   name="tripType"
//                                   value={formData.tripType}
//                                   onChange={handleChange}
//                                   required
//                                 >
//                                   <MenuItem value="round-trip">Round Trip</MenuItem>
//                                   <MenuItem value="one-way">One Way</MenuItem>
//                                   <MenuItem value="multi-city">Multi-City</MenuItem>
//                                 </Select>
//                               </FormControl>
//                             </Grid>
//                             <Grid item xs={12} md={3}>
//                               <TextField
//                                 fullWidth
//                                 label="From (Origin)"
//                                 variant="outlined"
//                                 name="origin"
//                                 value={formData.origin}
//                                 onChange={handleChange}
//                                 required
//                                 InputProps={{
//                                   startAdornment: <Place sx={{ color: 'action.active', mr: 1 }} />
//                                 }}
//                               />
//                             </Grid>
//                             <Grid item xs={12} md={3}>
//                               <TextField
//                                 fullWidth
//                                 label="To (Destination)"
//                                 variant="outlined"
//                                 name="destination"
//                                 value={formData.destination}
//                                 onChange={handleChange}
//                                 required
//                                 InputProps={{
//                                   startAdornment: <Place sx={{ color: 'action.active', mr: 1 }} />
//                                 }}
//                               />
//                             </Grid>
//                             <Grid item xs={12} md={3}>
//                               <TextField
//                                 fullWidth
//                                 label="Passengers"
//                                 type="number"
//                                 variant="outlined"
//                                 name="passengers"
//                                 value={formData.passengers}
//                                 onChange={handleChange}
//                                 required
//                                 InputProps={{
//                                   inputProps: { min: 1, max: 10 },
//                                   startAdornment: <Groups sx={{ color: 'action.active', mr: 1 }} />
//                                 }}
//                               />
//                             </Grid>
//                           </Grid>
//                         </Grid>

//                         <Grid item xs={12}>
//                           <Grid container spacing={3}>
//                             <Grid item xs={12} md={6}>
//                               <DatePicker
//                                 label="Departure Date"
//                                 value={formData.departureDate}
//                                 onChange={(newValue) => {
//                                   setFormData(prev => ({ ...prev, departureDate: newValue }));
//                                 }}
//                                 renderInput={(params) => (
//                                   <TextField 
//                                     {...params} 
//                                     fullWidth 
//                                     required 
//                                     InputProps={{
//                                       ...params.InputProps,
//                                       startAdornment: <CalendarToday sx={{ color: 'action.active', mr: 1 }} />
//                                     }}
//                                   />
//                                 )}
//                               />
//                             </Grid>
//                             {formData.tripType === 'round-trip' && (
//                               <Grid item xs={12} md={6}>
//                                 <DatePicker
//                                   label="Return Date"
//                                   value={formData.returnDate}
//                                   onChange={(newValue) => {
//                                     setFormData(prev => ({ ...prev, returnDate: newValue }));
//                                   }}
//                                   minDate={formData.departureDate}
//                                   renderInput={(params) => (
//                                     <TextField 
//                                       {...params} 
//                                       fullWidth 
//                                       required 
//                                       InputProps={{
//                                         ...params.InputProps,
//                                         startAdornment: <CalendarToday sx={{ color: 'action.active', mr: 1 }} />
//                                       }}
//                                     />
//                                   )}
//                                 />
//                               </Grid>
//                             )}
//                           </Grid>
//                         </Grid>
//                       </>
//                     )}

//                     {/* Additional Information */}
//                     <Grid  xs={12} >
//                       <Typography variant="h6" sx={{ mb: 2, color: '#1d293d', display: 'flex', alignItems: 'center' }}>
//                         <Email sx={{ mr: 1, color: '#f6ad55' }} /> {activeTab === 'booking' ? 'Special Requests' : 'Your Message'}
//                       </Typography>
//                       <Divider sx={{ mb: 3 }} />
//                       <TextField
//                         fullWidth
//                         multiline
//                         rows={4}
//                         label={activeTab === 'booking' ? 'Special requests or additional information' : 'How can we help you?'}
//                         variant="outlined"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                       />
//                     </Grid>

//                     {/* Submit Area */}
//                     <Grid item xs={12}>
//                       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           color="primary"
//                           size="large"
//                           disabled={isSubmitting}
//                           sx={{
//                             px: 6,
//                             py: 1.5,
//                             fontWeight: 600,
//                             background: 'linear-gradient(135deg, #f6ad55 0%, #f687b3 100%)',
//                             '&:hover': {
//                               background: 'linear-gradient(135deg, #f59e0b 0%, #e94e8b 100%)'
//                             }
//                           }}
//                         >
//                           {isSubmitting ? 'Processing...' : activeTab === 'booking' ? 'Request Flight Booking' : 'Send Message'}
//                         </Button>

//                         <Box sx={{ display: 'flex', alignItems: 'center', ml: { sm: 2 } }}>
//                           <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
//                             Need urgent assistance?
//                           </Typography>
//                           <Button
//                             variant="outlined"
//                             color="success"
//                             startIcon={<WhatsApp />}
//                             href="https://wa.me/2290197133534"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{ textTransform: 'none' }}
//                           >
//                             Chat on WhatsApp
//                           </Button>
//                         </Box>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </form>
//               )}
//             </Box>
//           </Paper>

//           {/* Contact Information Cards */}
//           <Grid container spacing={4} sx={{ mt: 6 }}>
//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <Email sx={{ fontSize: 40, color: '#f6ad55', mr: 2 }} />
//                   {/* <Typography variant="h6" sx={{ color: 'white' }}>Email Us</Typography> */}
//                   <Typography variant="h6" sx={{ color: 'grey' }}>Email Us</Typography>
//                 </Box>
//                 {/* <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}> */}
//                 <Typography variant="body1" sx={{ color: 'grey', mb: 2 }}>
//                   Send us an email and we'll get back to you within 24 hours.
//                 </Typography>
//                 <Button 
//                   // variant="outlined" 
//                   // color="primary" 
//                   href="mailto:proximiteservices.az@gmail.com"
//                    sx={{ 
//                     color:'white',
//                     backgroundColor: '#f6ad55',
//                     '&:hover': {
//                       backgroundColor: 'orange'
//                     }
//                   }}
//                 >
//                   proximiteservices.az@gmail.com
//                 </Button>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <Phone sx={{ fontSize: 40, color: '#f687b3', mr: 2 }} />
//                   {/* <Typography variant="h6" sx={{ color: 'white' }}>Call Us</Typography> */}
//                   <Typography variant="h6" sx={{ color: 'grey' }}>Call Us</Typography>
//                 </Box>
//                 {/* <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}> */}
//                 <Typography variant="body1" sx={{ color: 'grey', mb: 2 }}>
//                   Available Monday to Friday, 9AM to 5PM.
//                 </Typography>
//                 <Button 
//                   // variant="outlined" 
                  
//                   href="tel:+2290197133534"
//                   // sx={{ 
//                   //   color: 'white', 
//                   //   borderColor: 'white',
//                   //   '&:hover': {
//                   //     backgroundColor: 'rgba(255,255,255,0.1)',
//                   //     borderColor: 'white'
//                   //   }
//                   // }}
//                   sx={{ 
//                     color:'white',
//                     backgroundColor: '#f687b3',
//                     '&:hover': {
//                       backgroundColor: 'pink'
//                     }
//                   }}
//                 >
//                   (+234) 97-13-35-34
//                 </Button>
//               </Paper>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <WhatsApp sx={{ fontSize: 40, color: '#25D366', mr: 2 }} />
//                   {/* <Typography variant="h6" sx={{ color: 'white' }}>WhatsApp</Typography> */}
//                   <Typography variant="h6" sx={{ color: 'grey' }}>WhatsApp</Typography>
//                 </Box>
//                 {/* <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}> */}
//                 <Typography variant="body1" sx={{ color: 'grey', mb: 2 }}>
//                   For instant assistance, message us on WhatsApp.
//                 </Typography>
//                 <Button 
//                   variant="contained" 
//                   color="success" 
//                   href="https://wa.me/23497133534"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   startIcon={<WhatsApp />}
//                   sx={{ 
//                     backgroundColor: '#25D366',
//                     '&:hover': {
//                       backgroundColor: '#128C7E'
//                     }
//                   }}
//                 >
//                   Chat Now
//                 </Button>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Container>
//       {/* </Box> */}
//     </LocalizationProvider>
//   );
// };

// export default ContactPage;






// // 'use client'

// // const client = () => {
// //   return (
// //     <div>contact page</div>
// //   )
// // }

// // export default client