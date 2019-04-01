import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWATodo';

  constructor(
    private title2: Title,
    private meta: Meta
  ) {
    this.title2.setTitle('About / Angular SSR');
    this.meta.updateTag({
        'description': 'Welcome to about section'
    });
  }
}
