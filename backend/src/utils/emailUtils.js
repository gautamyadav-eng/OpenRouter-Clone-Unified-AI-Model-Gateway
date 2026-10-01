import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMPT_HOST,
    port:Number(process.env.BREVO_SMPT_PORT),
    auth:{
        user:process.env.BREVO_SMPT_USER,
        pass:process.env.BREVO_SMPT_PASSWORD
    }
});

export const sendOtpEmail = async (email, otp) => {

    const info = await transporter.sendMail({
        from: process.env.BREVO_SMPT_EMAIL,
        to: email,
        subject: "Password Reset OTP",
        text: `Your Password reset OTP is ${otp}. This OTP is valid for 10 minutes`
    });

    console.log("EMAIL SENT");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
};
transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP ERROR:", error.message);
    } else {
        console.log("SMTP SERVER READY");
    }
});