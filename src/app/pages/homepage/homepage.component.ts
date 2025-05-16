import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentPageComponent } from '../contentpage/contentpage.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, ContentPageComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
