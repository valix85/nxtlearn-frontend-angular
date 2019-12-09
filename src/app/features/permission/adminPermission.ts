import { PermissionBase } from './PermissionBase';
import { PermissionType } from './myPpermissionType';​
​
export class AdminPermission extends PermissionBase {

    constructor() {
        super();
        /*
        this.autorizzazioni = [
            PermissionType.AddGuida,
            PermissionType.ReadGuida,
            PermissionType.DeleteGuida,
            PermissionType.AddCapitolo,
            PermissionType.AddLezione,
            PermissionType.HandleGuida,
            PermissionType.ImpostazioniUtenti,
            PermissionType.ReadMyGuide
        ];
        */
       
        // console.log(this.autorizzazioni);
        // PRENDO TUTTI I PERMESSI IN QUANTO ADMIN
        this.autorizzazioni =  Object.values(PermissionType);
    }
}
