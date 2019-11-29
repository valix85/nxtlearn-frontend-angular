import { PermissionType } from './permissionType';

export abstract class PermissionBase {
    public autorizzazioni: PermissionType[];
    constructor() { }
}
