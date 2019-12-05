import { PermissionBase } from './PermissionBase';
import { PermissionType } from './myPpermissionType';​
​
export class AdminPermission extends PermissionBase {

    constructor() {
        super();
        this.autorizzazioni = [
            PermissionType.AddGuida,
            PermissionType.ReadGuida,
            PermissionType.AddCapitolo,
            PermissionType.AddLezione,
            PermissionType.HandleGuida,

            PermissionType.ImpostazioniUtenti
        ];
        // console.log(this.autorizzazioni);
    }
}
