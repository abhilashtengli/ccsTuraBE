"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const faculty_1 = __importDefault(require("./routes/faculty"));
const notice_1 = __importDefault(require("./routes/notice"));
const signedUrl_1 = __importDefault(require("./routes/signedUrl"));
const advertisment_1 = __importDefault(require("./routes/advertisment"));
const galleryImage_1 = __importDefault(require("./routes/galleryImage"));
const galleryVideo_1 = __importDefault(require("./routes/galleryVideo"));
const newupdate_1 = __importDefault(require("./routes/newupdate"));
const staffForm_1 = __importDefault(require("./routes/staffForm"));
const tender_1 = __importDefault(require("./routes/tender"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const cloudflare_1 = __importDefault(require("./routes/cloudflare"));
const getData_1 = __importDefault(require("./routes/getData"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5174",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use("/", auth_1.default);
app.use("/", cloudflare_1.default);
app.use("/", faculty_1.default);
app.use("/", notice_1.default);
app.use("/", signedUrl_1.default);
app.use("/", advertisment_1.default);
app.use("/", galleryImage_1.default);
app.use("/", galleryVideo_1.default);
app.use("/", newupdate_1.default);
app.use("/", getData_1.default);
app.use("/", staffForm_1.default);
app.use("/", tender_1.default);
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Server running on the port : ", process.env.PORT);
}));
