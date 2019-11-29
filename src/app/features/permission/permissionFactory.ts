import { PermissionBase } from './PermissionBase';
import { AdminPermission } from './adminpermission';
import { SimpleUserPermission } from './simpleuserPermission';
import { UnknownPermission } from './unknownpermission';

export class PermissionsFactory {

  private constructor() { }

  public static getInstance(authRole: string): PermissionBase {
    let instance: PermissionBase;;
    const role = authRole;
    switch (role) {
      case 'ADMIN':
        instance = new AdminPermission();
        console.log('ADMIN');
        break;
      case 'SIMPLEUSER':
        instance = new SimpleUserPermission();
        console.log('SIMPLEUSER');
        break;
      default:
        instance = new UnknownPermission();
        console.log('DEFAULT');
        break;
    }
    return instance;
  }

}
