import { Component } from '@angular/core';

type NavigationItem = {
  routerLink: string,
  name: string,
  children?: NavigationItem[],
  id?: string
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  readonly leftNavigationItems: NavigationItem[] = [
    { routerLink: '/about', name: 'About' },
    { routerLink: '/code-projects', name: 'Code Projects' },
    {
      routerLink: '/creative-collection',
      name: 'Creative Collection',
      children: [
        { routerLink: 'photojournal', name: 'Photojournal' },
        { routerLink: 'musings', name: 'Musings' },
        { routerLink: 'visual-art', name: 'Visual Art' },
      ],
      id: 'navbarDropdownMenuLink',
    },
    { routerLink: '/resume', name: 'Resume' },
  ];
}
