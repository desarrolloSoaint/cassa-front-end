import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import '../../../../assets/styles/colors.scss';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  background: ThemePalette = undefined;
  // color: color = undefined

  ngOnInit(): void {
    

    this.background = this.background ? undefined : 'primary';
    // this.color = this.color ? undefined : 'primary';
  }

}
