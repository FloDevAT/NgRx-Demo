import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-second-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './second-page.component.html',
    styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {

}
