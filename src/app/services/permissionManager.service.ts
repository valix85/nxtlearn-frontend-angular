import { Injectable } from '@angular/core';
import { PermissionBase } from '../features/permission/PermissionBase';
import { PermissionType } from '../features/permission/PermissionType';
import { PermissionsFactory } from '../features/permission/permissionFactory';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class PermissionManagerService {
    private permissions: PermissionBase;  // autorizzazioni
    constructor(private authService: AuthService) { }

    isGranted(permission: PermissionType) {
        console.log('PERMESSO:' + permission);
        console.log('1');
        const authRole = this.authService.getRoleAuth();
        const permissions = PermissionsFactory.getInstance(authRole).autorizzazioni;
        for (const perm of permissions) {
            if (perm === permission) {
                return true;
            }
        }
        return false;
    } // end isGranted
}
