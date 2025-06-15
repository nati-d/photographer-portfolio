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
		const {name, email, phone, subject, serviceType, package: packageType, additionalInfo, message} = await request.json();

		// Enhanced elegant email template
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: "nathnaeldes@gmail.com",
			subject: `Photography Request: ${subject}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Photography Request</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.7;
                color: #1f2937;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 20px;
                min-height: 100vh;
              }
              
              .email-wrapper {
                max-width: 650px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
              }
              
              .header {
                background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
                padding: 50px 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
              }
              
              .header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                animation: shimmer 3s ease-in-out infinite;
              }
              
              @keyframes shimmer {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(180deg); }
              }
              
              .header h1 {
                color: #ffffff;
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 8px;
                position: relative;
                z-index: 1;
                letter-spacing: -0.5px;
              }
              
              .header p {
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
                font-weight: 300;
                position: relative;
                z-index: 1;
              }
              
              .content {
                padding: 50px 40px;
              }
              
              .greeting {
                font-size: 18px;
                color: #374151;
                margin-bottom: 30px;
                font-weight: 500;
              }
              
              .details-card {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                border-radius: 16px;
                padding: 35px;
                margin-bottom: 35px;
                border: 1px solid #e2e8f0;
                position: relative;
              }
              
              .details-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px 16px 0 0;
              }
              
              .field-group {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 25px;
                margin-bottom: 30px;
              }
              
              .field {
                background: #ffffff;
                padding: 20px;
                border-radius: 12px;
                border: 1px solid #e5e7eb;
                transition: all 0.3s ease;
              }
              
              .field:hover {
                border-color: #667eea;
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
              }
              
              .field-label {
                font-size: 12px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
                display: block;
              }
              
              .field-value {
                font-size: 16px;
                color: #1f2937;
                font-weight: 500;
                word-break: break-word;
              }
              
              .service-info {
                background: #ffffff;
                border-radius: 12px;
                border: 1px solid #e5e7eb;
                overflow: hidden;
                margin-bottom: 30px;
              }
              
              .service-header {
                background: #f9fafb;
                padding: 15px 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              
              .service-header .field-label {
                margin: 0;
              }
              
              .service-content {
                padding: 25px;
                font-size: 16px;
                line-height: 1.8;
                color: #374151;
              }
              
              .message-section {
                background: #ffffff;
                border-radius: 12px;
                border: 1px solid #e5e7eb;
                overflow: hidden;
              }
              
              .message-header {
                background: #f9fafb;
                padding: 15px 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              
              .message-header .field-label {
                margin: 0;
              }
              
              .message-content {
                padding: 25px;
                font-size: 16px;
                line-height: 1.8;
                color: #374151;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              
              .divider {
                height: 1px;
                background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
                margin: 40px 0;
              }
              
              .footer {
                background: #f8fafc;
                padding: 30px 40px;
                text-align: center;
                border-top: 1px solid #e5e7eb;
              }
              
              .footer-text {
                color: #6b7280;
                font-size: 14px;
                line-height: 1.6;
                margin-bottom: 15px;
              }
              
              .footer-brand {
                color: #374151;
                font-weight: 600;
                font-size: 16px;
              }
              
              .timestamp {
                background: #667eea;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 500;
                display: inline-block;
                margin-top: 15px;
              }
              
              /* Mobile Responsive */
              @media (max-width: 600px) {
                body {
                  padding: 20px 10px;
                }
                
                .header {
                  padding: 40px 30px;
                }
                
                .header h1 {
                  font-size: 28px;
                }
                
                .content {
                  padding: 40px 30px;
                }
                
                .details-card {
                  padding: 25px;
                }
                
                .field-group {
                  grid-template-columns: 1fr;
                  gap: 15px;
                }
                
                .footer {
                  padding: 25px 30px;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-wrapper">
              <div class="header">
                <h1>New Photography Inquiry</h1>
                <p>You have received a new message from your portfolio</p>
              </div>
              
              <div class="content">
                <div class="greeting">
                  Hello! You have received a new photography inquiry.
                </div>
                
                <div class="details-card">
                  <div class="field-group">
                    <div class="field">
                      <span class="field-label">Client Name</span>
                      <div class="field-value">${name}</div>
                    </div>
                    
                    <div class="field">
                      <span class="field-label">Email Address</span>
                      <div class="field-value">${email}</div>
                    </div>
                  </div>
                  
                  ${
						phone
							? `
                  <div class="field">
                    <span class="field-label">Phone Number</span>
                    <div class="field-value">${phone}</div>
                  </div>
                  `
							: ""
					}
                  
                  <div class="service-info">
                    <div class="service-header">
                      <span class="field-label">Service Details</span>
                    </div>
                    <div class="service-content">
                      <div class="field">
                        <span class="field-label">Service Type</span>
                        <div class="field-value">${serviceType}</div>
                      </div>
                      ${
							packageType
								? `
                      <div class="field">
                        <span class="field-label">Selected Package</span>
                        <div class="field-value">${packageType}</div>
                      </div>
                      `
								: ""
						}
                    </div>
                  </div>
                  
                  <div class="field">
                    <span class="field-label">Subject</span>
                    <div class="field-value">${subject}</div>
                  </div>
                  
                  ${
						additionalInfo
							? `
                  <div class="field">
                    <span class="field-label">Additional Information</span>
                    <div class="field-value">${additionalInfo}</div>
                  </div>
                  `
							: ""
					}
                  
                  <div class="divider"></div>
                  
                  <div class="message-section">
                    <div class="message-header">
                      <span class="field-label">Message</span>
                    </div>
                    <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <div class="footer-text">
                  This message was sent from your photography portfolio contact form.
                </div>
                <div class="footer-brand">Photography Portfolio</div>
                <div class="timestamp">
                  Received: ${new Date().toLocaleString()}
                </div>
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
