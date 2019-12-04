import { Injectable } from '@angular/core';
import { PermissionBase } from '../features/permission/PermissionBase';
import { PermissionType } from '../features/permission/myPpermissionType';
import { PermissionsFactory } from '../features/permission/permissionFactory';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class PermissionManagerService {

    constructor(/*private authService: AuthService*/) { }

    private permessiCache: PermissionBase; // autorizzazioni cache

    isGranted(permission: PermissionType, ruolo: string) {
        const authRole = ruolo;
        let permissions;
        if (this.permessiCache) {
            permissions = this.permessiCache.autorizzazioni;
        } else {
            permissions = PermissionsFactory.getInstance(authRole).autorizzazioni;
        }
        for (const perm of permissions) {
            if (perm === permission) {
                return true;
            }
        }
        return false;
    } // end isGranted

    cleanCache() {
        this.permessiCache = undefined;
    }
}
