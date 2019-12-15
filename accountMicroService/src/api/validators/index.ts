import { adminCreateLoginSchema } from './admin/admin.createLogin.validator';
import { adminUpdateSchema } from './admin/admin.update.validator';
import { userLoginSchema } from './user/user.login.validator';
import { userCreateSchema } from './user/user.create.validator';
import { userUpdateSchema } from './user/user.update.validator';
import { idSchema } from './common/id.validator';

export {
    adminCreateLoginSchema,
    adminUpdateSchema,
    userLoginSchema,
    userCreateSchema,
    userUpdateSchema,
    idSchema
}
