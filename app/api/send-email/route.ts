import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { customer, items, total, orderNumber } = await req.json();

        // Configure the transporter using environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Often helpful for local dev/certain providers
            }
        });

        // Create a detailed item list for the email
        const itemsHtml = items.map((item: any) => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 0;">${item.product.name}</td>
        <td style="padding: 12px 0; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px 0; text-align: right;">$${(item.product.price * item.quantity).toLocaleString()}</td>
      </tr>
    `).join('');

        const mailOptions = {
            from: `"Airbis Components" <${process.env.FROM_EMAIL}>`,
            to: customer.email,
            subject: `Order Confirmation - ${orderNumber}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #0a1e3d;">
            <h1 style="color: #0a1e3d; margin: 0;">AIRBIS</h1>
            <p style="color: #666; font-size: 14px; margin-top: 5px;">Premium Aircraft Components</p>
          </div>
          
          <div style="padding: 30px 0;">
            <h2 style="margin-top: 0;">Thank you for your order, ${customer.firstName}!</h2>
            <p>We've received your order and are processing it. Your order number is <strong>${orderNumber}</strong>.</p>
            
            <h3 style="margin-top: 30px; padding-bottom: 10px; border-bottom: 1px solid #eee;">Order Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="color: #666; font-size: 12px; text-transform: uppercase;">
                  <th style="text-align: left; padding: 10px 0;">Item</th>
                  <th style="text-align: center; padding: 10px 0;">Qty</th>
                  <th style="text-align: right; padding: 10px 0;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" style="padding: 20px 0 5px; font-weight: bold; text-align: right;">Total:</td>
                  <td style="padding: 20px 0 5px; font-weight: bold; text-align: right; font-size: 18px; color: #0a1e3d;">$${total.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; rounded-lg: 8px;">
            <h4 style="margin: 0 0 10px 0;">Shipping to:</h4>
            <p style="margin: 0; font-size: 14px;">
              ${customer.firstName} ${customer.lastName}<br>
              ${customer.address}<br>
              ${customer.city}, ${customer.zipCode}<br>
              ${customer.country}
            </p>
          </div>
          
          <div style="margin-top: 40px; text-align: center; color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px;">
            <p>If you have any questions, please contact our support desk.</p>
            <p>&copy; ${new Date().getFullYear()} Airbis Components. All rights reserved.</p>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
