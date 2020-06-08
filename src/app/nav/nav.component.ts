import {Component} from '@angular/core'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
    selector : 'nav',
    templateUrl: './nav.component.html'
})

export class NavComponent{

    isStarting = true;
    isSideBySide = true;

}