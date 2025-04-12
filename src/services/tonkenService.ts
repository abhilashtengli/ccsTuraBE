import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// export const getToken = async (payload: { id: string }): Promise<string> => {
//   const secret = process.env.JWT_SECRET;

//   if (!secret) {
//     throw new Error("JWT_SECRET is not configured in environment variables");
//   }
//   const token = await jwt.sign({ userId: payload.id }, secret, {expiresIn : });

//   return token;
// };

class TokenService {
  private static readonly token_expiry = "12h";

  static generateToken(payload: { id: string }) {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured in environment variables");
    }
    const token = jwt.sign(
      { userId: payload.id, iat: Math.floor(Date.now() / 1000) },
      secret,
      { expiresIn: this.token_expiry }
    );
    return;
  }
}
export default TokenService;