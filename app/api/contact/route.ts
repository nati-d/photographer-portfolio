import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export async function POST(request: Request) {
	try {
		const {name, email, subject, message} = await request.json();

		// Email content with elegant styling
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "nathnaeldes@gmail.com", // Your email address
			subject: `Photography Request: ${subject}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Photography Request</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 40px;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #f0f0f0;
              }
              .header h1 {
                color: #1a1a1a;
                font-size: 24px;
                margin: 0;
                font-weight: 600;
              }
              .content {
                background-color: #fafafa;
                padding: 25px;
                border-radius: 8px;
                margin-bottom: 30px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field:last-child {
                margin-bottom: 0;
              }
              .label {
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #4a4a4a;
              }
              .message-content {
                background-color: #ffffff;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #eaeaea;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                color: #666;
                font-size: 14px;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #f0f0f0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Photography Request</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <span class="label">Name</span>
                  <span class="value">${name}</span>
                </div>
                
                <div class="field">
                  <span class="label">Email</span>
                  <span class="value">${email}</span>
                </div>
                
                <div class="field">
                  <span class="label">Subject</span>
                  <span class="value">${subject}</span>
                </div>
                
                <div class="field">
                  <span class="label">Message</span>
                  <div class="message-content">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>This message was sent from your photography portfolio website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json({message: "Email sent successfully"}, {status: 200});
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json({error: "Failed to send email"}, {status: 500});
	}
}
