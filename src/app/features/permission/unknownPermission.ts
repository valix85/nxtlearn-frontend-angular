import { PermissionBase } from './PermissionBase';
import { PermissionType } from './myPpermissionType';
​
export class UnknownPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [ ];
    }
}
