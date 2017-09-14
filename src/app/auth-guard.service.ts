import {CanActivate,ActivatedRouteSnapshot,Router,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/observable'
import {Injectable  } from "@angular/core";
import { AuthService } from "./sharedmodules/services/authentication.service";
@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private authService:AuthService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
            const IsAuthenticated= this.authService.getToken();
            if(IsAuthenticated){
                return true
            }else{
                this.router.navigate(['/login'])
                return false;
            }
    }
}