import { PermissionBase } from './PermissionBase';
import { PermissionType } from './myPpermissionType';
​
export class SimpleUserPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [
            PermissionType.ReadGuida,
            PermissionType.ReadMyGuide
        ];
    }
}
