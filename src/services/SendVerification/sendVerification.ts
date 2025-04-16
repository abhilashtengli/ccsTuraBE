import { VerificationEmail } from "../../emails/VerificationEmail";
import { resend } from "../../lib/resend";

export const SendVerification = async (
  email: string,
  name: string,
  verifyCode: string,
  serviceFor: string
) => {
  try {
    const response = await resend.emails.send({
      from:
        serviceFor === "emailService"
          ? "CCSTura <onboarding@resend.dev>"
          : "CCSTura : Reset your password <onboarding@resend.dev>",
      to: [email],
      subject:
        serviceFor === "emailService"
          ? "CCSTura: Verify your email address"
          : "CCSTura: Your Password Reset Code",
      react: VerificationEmail({ name, code: verifyCode, serviceFor })
    });

    // Optional: Log/send response for monitoring
    if (response.error) {
      throw new Error(response.error.message);
    }

    return {
      success: true,
      status: 200,
      message:
        serviceFor === "emailService"
          ? "Verification email sent successfully"
          : "Verfication code sent to you"
    };
  } catch (error: any) {
    // Log detailed error for internal monitoring
    console.error("Email sending failed:", error);

    return {
      success: false,
      status: 500,
      message: "Failed to send verification email"
    };
  }
};
