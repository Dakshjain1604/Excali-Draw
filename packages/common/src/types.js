"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoomSchema = exports.SigninSchema = exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    email: zod_1.z.string().min(3).max(40),
    password: zod_1.z.string(),
    name: zod_1.z.string(),
    image: zod_1.z.string().url().optional()
});
exports.SigninSchema = zod_1.z.object({
    email: zod_1.z.string().min(3).max(40),
    password: zod_1.z.string(),
});
exports.createRoomSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(40),
});
