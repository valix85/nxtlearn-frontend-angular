import { PermissionBase } from './PermissionBase';
import { PermissionType } from './PermissionType';​
​
export class AdminPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [
            PermissionType.ReadGuida
        ];
        // console.log(this.autorizzazioni);
    }
}
