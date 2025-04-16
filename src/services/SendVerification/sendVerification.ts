import { VerificationEmail } from "../../emails/VerificationEmail";
import { resend } from "../../lib/resend";

export const SendVerification = async (
  email: string,
  name: string,
  verifyCode: string
) => {
  try {
    const response = await resend.emails.send({
      from: "CCSTura <onboarding@resend.dev>",
      to: [email],
      subject: "CCSTura: Verify your email address",
      react: VerificationEmail({ name, code: verifyCode })
    });

    // Optional: Log/send response for monitoring
    if (response.error) {
      throw new Error(response.error.message);
    }

    return {
      success: true,
      status: 200,
      message: "Verification email sent successfully"
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
