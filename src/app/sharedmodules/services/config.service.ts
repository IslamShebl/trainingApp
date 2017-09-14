import {EventEmitter} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Injectable }    from '@angular/core';
import 'rxjs/Rx';
const API_URL='http://localhost:3000/user';
import {ConfigS} from '../config'


@Injectable()
export class ConfigService{
    
    getCofigDetails(){
        
        return ConfigS;
        }
    }

   