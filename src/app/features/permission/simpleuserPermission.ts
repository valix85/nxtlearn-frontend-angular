import { PermissionBase } from './PermissionBase';
import { PermissionType } from './PermissionType';
​
export class SimpleUserPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [ ];
    }
}
