import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a 
          class="nav-link" 
          aria-current="page" 
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">
          A Component</a>
        </li>
        <li class="nav-item">
          <a 
          class="nav-link" 
          routerLink="/b"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">
          B Component</a>
        </li> 
        <li class="nav-item">
          <a 
          class="nav-link" 
          routerLink="/test"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">
          Test Component</a>
        </li> 
        <li class="nav-item">
          <a 
          class="nav-link" 
          routerLink="/c"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">C Component</a>
        </li> 
      </ul>      
    </div>
  </div>
</nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'my-routing-2';
}
