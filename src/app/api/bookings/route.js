
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const bookingData = await request.json();
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
        secure: true, // Use SSL
        port: 465, // Gmail's SSL port
        tls: {
            minVersion: 'TLSv1.2'
  }
    })

    const clientMailOptions = {
        from: process.env.EMAIL_USER,
        to: bookingData.email,
        subject:'Your Flight Booking Request Received',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d293d;">Thank you for your booking request, ${bookingData.name}!</h2>
          <p>We've received your flight details and our travel experts are working on finding the best options for you.</p>
          
          <h3 style="color: #1d293d; margin-top: 20px;">Booking Details:</h3>
          <ul>
            <li><strong>From:</strong> ${bookingData.origin}</li>
            <li><strong>To:</strong> ${bookingData.destination}</li>
            <li><strong>Departure:</strong> ${new Date(bookingData.departureDate).toLocaleDateString()}</li>
            ${bookingData.tripType === 'round-trip' ? `<li><strong>Return:</strong> ${new Date(bookingData.returnDate).toLocaleDateString()}</li>` : ''}
            <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
          </ul>
          
          <p style="margin-top: 20px;">We'll contact you within 24 hours with flight options and pricing.</p>
          
          <p>For urgent inquiries, please contact us on WhatsApp: <a href="https://wa.me/22963302305">+229 63 30 23 05</a></p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <p style="margin: 0;">Best regards,<br>The Proximite Services Sarl Team</p>
          </div>
        </div>
      `,
    };

    const adminMailOptions = {
        from : process.env.EMAIL_USER,
        to: 'proximiteservices.az@gmail.com',
        subject: 'New Flight Booking Request',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d293d;">New Booking Request Received</h2>
          
          <h3 style="color: #1d293d; margin-top: 20px;">Client Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${bookingData.name}</li>
            <li><strong>Email:</strong> ${bookingData.email}</li>
            <li><strong>Phone:</strong> ${bookingData.phone}</li>
          </ul>
          
          <h3 style="color: #1d293d; margin-top: 20px;">Flight Details:</h3>
          <ul>
            <li><strong>From:</strong> ${bookingData.origin}</li>
            <li><strong>To:</strong> ${bookingData.destination}</li>
             <li><strong>Departure:</strong> ${new Date(bookingData.departureDate).toLocaleDateString()}</li>
            ${bookingData.tripType === 'round-trip' ? `<li><strong>Return:</strong> ${new Date(bookingData.returnDate).toLocaleDateString()}</li>` : ''}
            <li><strong>Passengers:</strong> ${bookingData.passengers}</li>
            <li><strong>Special Requests:</strong> ${bookingData.message || 'None'}</li>
          </ul>
          
          <div style="margin-top: 20px;">
            <a href="https://wa.me/${bookingData.phone.replace(/\D/g, '')}" 
               style="display: inline-block; padding: 10px 15px; background-color: #25D366; color: white; text-decoration: none; border-radius: 5px;">
              Contact Client on WhatsApp
            </a>
          </div>
        </div>
        `,
    } 


    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ success: true, message: 'Booking request received successfully' });
    
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ success: false, message: 'Error processing booking request' }, { status: 500 });
  }
}