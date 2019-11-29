import { PermissionBase } from './PermissionBase';
import { AdminPermission } from './adminpermission';
import { SimpleUserPermission } from './simpleuserPermission';
import { UnknownPermission } from './unknownpermission';
​
export class PermissionsFactory {
  public static instance: PermissionBase;
  private constructor() {}
  public static getInstance(authRole: string): PermissionBase {
​

    console.error('CONTROLLARE QUI!!!!');

    if (this.instance) {
      console.log('istanza presente');
      return this.instance;
    } else {
      const role = authRole;
      switch (role) {
        case 'ADMIN':
          this.instance = new AdminPermission();
          console.log('ADMIN');​
          break;
        case 'SIMPLEUSER':
          this.instance = new SimpleUserPermission();
          console.log('SIMPLEUSER');​
          break;
        default:
          this.instance = new UnknownPermission();
          console.log('DEFAULT');
          break;
      }
    }

    return this.instance;
  }
}