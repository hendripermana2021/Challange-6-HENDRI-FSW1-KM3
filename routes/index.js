import express from "express";
import { getUsers, Register, isAdmin, isMember, isSuperAdmin, Logout, RegisterAdmin, whoAmI, deleteUsers, updateUsers, getUsersById } from "../controllers/HandlerUsers.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getCars, getCarsById, createCars, updateCars, deleteCars, softDeleteCars } from "../controllers/HandlerCars.js"
const router = express.Router();
const prefix = "/v1/api/";
import fs from 'fs';
import yaml from 'js-yaml'
const swaggerDocument = yaml.load(fs.readFileSync("OpenAPICars-Users.yaml", "utf8"));
import swaggerUI from "swagger-ui-express";

router.use(prefix + "api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

router.get(prefix + 'users', verifyToken, getUsers);
router.get(prefix + 'users/:id', verifyToken, getUsersById);
router.post(prefix + 'register', Register);
router.post(prefix + 'member/login', isMember);
router.post(prefix + 'admin/login',  isAdmin);
router.post(prefix + 'superadmin/login', isSuperAdmin);
router.delete(prefix +'logout', verifyToken, Logout);
router.delete(prefix +'users/delete/:id', verifyToken, deleteUsers);
router.put(prefix +'users/edit/:id', verifyToken, updateUsers)

router.get(prefix + 'token', refreshToken);
router.get(prefix + 'whoami', verifyToken, whoAmI);

// endpoint untuk tambah admin yang bisa hanya superadmin
router.post(prefix + 'registrasi-admin', verifyToken, RegisterAdmin);



router.get(prefix + 'cars', verifyToken, getCars);
router.get(prefix + 'cars/:id',verifyToken, getCarsById);
router.post(prefix +'create/cars',verifyToken, createCars);
router.put(prefix + 'cars/edit/:id',verifyToken, updateCars);
router.put(prefix +'cars/delete/:id',verifyToken, softDeleteCars);
router.delete(prefix +'cars/list-delete/:id',verifyToken, deleteCars);

export default router;