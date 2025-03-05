import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('DetailComponent INIT');
  }
}
