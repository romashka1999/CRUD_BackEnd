import { adminCreateLoginSchema } from './admin/admin.createLogin.validator';
import { adminUpdateSchema } from './admin/admin.update.validator';
import { userLoginSchema } from './user/user.login.validator';
import { userCreateSchema } from './user/user.create.validator';
import { userUpdateSchema } from './user/user.update.validator';
import { idSchema } from './common/id.validator';
import { adminRecoverPasswordSet } from './admin/admin.recoverPasswordSet.validator';
import { adminRecoverPasswordGet } from './admin/admin.recoverPasswordGet.validator';

export {
    adminRecoverPasswordSet,
    adminRecoverPasswordGet,
    adminCreateLoginSchema,
    adminUpdateSchema,
    userLoginSchema,
    userCreateSchema,
    userUpdateSchema,
    idSchema
}
