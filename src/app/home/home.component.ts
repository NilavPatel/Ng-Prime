import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit ,OnInit {

  constructor(private messageService: MessageService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.display(true);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 3000);
  }

}
