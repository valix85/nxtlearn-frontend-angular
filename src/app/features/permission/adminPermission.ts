import { PermissionBase } from './PermissionBase';
import { PermissionType } from './PermissionType';​
​
export class AdminPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [
            PermissionType.ReadGuida,
            PermissionType.AddCapitolo,
            PermissionType.AddLezione,
        ];
        // console.log(this.autorizzazioni);
    }
}
