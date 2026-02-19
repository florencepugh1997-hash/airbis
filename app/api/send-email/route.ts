import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { customer, items, total, orderNumber } = await req.json();

    console.log(`[Email API] Processing order #${orderNumber} for ${customer.email}`);

    // Verify SMTP variables are present
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('[Email API] Missing SMTP configuration variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Configure the transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('[Email API] SMTP Connection verified successfully');
    } catch (verifyError) {
      console.error('[Email API] SMTP Verification failed:', verifyError);
      throw new Error('Failed to connect to email server');
    }

    // Create a detailed item list for the email
    const itemsHtml = items.map((item: any) => `
      <tr style="border-bottom: 1px solid #efefef;">
        <td style="padding: 15px 0; font-size: 14px; color: #333;">
            <div style="font-weight: bold; margin-bottom: 4px;">${item.product.name}</div>
            <div style="font-size: 12px; color: #666;">Code: ${item.product.id?.substring(0, 8) || 'N/A'}</div>
        </td>
        <td style="padding: 15px 0; text-align: center; color: #333;">${item.quantity}</td>
        <td style="padding: 15px 0; text-align: right; font-weight: bold; color: #0a1e3d;">$${(item.product.price * item.quantity).toLocaleString()}</td>
      </tr>
    `).join('');

    const generateEmailHtml = (isForAdmin: boolean) => `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #333; background-color: #f9f9f9;">
          <div style="background-color: #0a1e3d; padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; letter-spacing: 4px; font-size: 28px;">AIRBIS</h1>
            <p style="color: #60a5fa; font-size: 12px; margin-top: 5px; text-transform: uppercase; font-weight: bold; letter-spacing: 2px;">Premium Aircraft Components</p>
          </div>
          
          <div style="padding: 40px 30px; background-color: #ffffff;">
            ${isForAdmin
        ? `<h2 style="color: #0a1e3d; margin-top: 0;">New Order Received!</h2>
                   <p style="font-size: 16px; line-height: 1.6;">A new order has been placed. Order Number: <strong>#${orderNumber}</strong></p>`
        : `<h2 style="color: #0a1e3d; margin-top: 0;">Thank you for your order, ${customer.firstName}!</h2>
                   <p style="font-size: 16px; line-height: 1.6;">We've received your request and our logistics team is already preparing your shipment. Your order number is <strong>#${orderNumber}</strong>.</p>`
      }
            
            <div style="margin-top: 40px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #f8fafc; padding: 15px 20px; border-bottom: 1px solid #e5e7eb;">
                    <h3 style="margin: 0; font-size: 14px; text-transform: uppercase; color: #64748b;">Order Summary</h3>
                </div>
                <div style="padding: 0 20px;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <thead>
                        <tr style="color: #94a3b8; font-size: 11px; text-transform: uppercase; border-bottom: 1px solid #e5e7eb;">
                          <th style="text-align: left; padding: 10px 0;">Component</th>
                          <th style="text-align: center; padding: 10px 0;">Qty</th>
                          <th style="text-align: right; padding: 10px 0;">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${itemsHtml}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="2" style="padding: 20px 0 10px; font-weight: bold; text-align: right; color: #64748b;">Grand Total:</td>
                          <td style="padding: 20px 0 10px; font-weight: 900; text-align: right; font-size: 20px; color: #0a1e3d;">$${total.toLocaleString()}</td>
                        </tr>
                      </tfoot>
                    </table>
                </div>
            </div>

            <div style="margin-top: 30px; display: grid; grid-template-cols: 1fr 1fr; gap: 20px;">
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <h4 style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase;">Shipping Address</h4>
                    <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1e293b;">
                      <strong>${customer.firstName} ${customer.lastName}</strong><br>
                      ${customer.address}<br>
                      ${customer.city}, ${customer.zipCode}<br>
                      ${customer.country}
                    </p>
                </div>
                ${isForAdmin ? `
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 15px;">
                    <h4 style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; text-transform: uppercase;">Customer Contact</h4>
                    <p style="margin: 0; font-size: 14px; color: #1e293b;">${customer.email}</p>
                </div>` : ''}
            </div>
          </div>
          
          <div style="padding: 30px; background-color: #0a1e3d; text-align: center; color: #94a3b8; font-size: 12px;">
            <p style="margin-bottom: 10px; color: #ffffff;">Precision. Reliability. Safety.</p>
            <p style="margin-bottom: 20px;">If you have any questions, please contact our 24/7 technical support desk.</p>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                <p>&copy; ${new Date().getFullYear()} Airbis Components. All rights reserved.</p>
            </div>
          </div>
        </div>
      `;

    // Send to Customer
    console.log(`[Email API] Sending confirmation to customer: ${customer.email}`);
    await transporter.sendMail({
      from: `"Airbis Components" <${process.env.FROM_EMAIL}>`,
      to: customer.email,
      subject: `Order Confirmation - #${orderNumber}`,
      html: generateEmailHtml(false),
    });

    // Send to Admin (Kevinfeige7110@gmail.com)
    console.log('[Email API] Sending notification to admin');
    await transporter.sendMail({
      from: `"Airbis System" <${process.env.FROM_EMAIL}>`,
      to: "Kevinfeige7110@gmail.com",
      subject: `NEW ORDER ALERT - #${orderNumber}`,
      html: generateEmailHtml(true),
    });

    console.log('[Email API] All notifications sent successfully');
    return NextResponse.json({ message: 'Notifications sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('[Email API] Error occurred:', error);
    return NextResponse.json({ error: error.message || 'Notification failed' }, { status: 500 });
  }
}
