import { Component, OnInit } from '@angular/core';
import { Newslatter } from './models/newslatter';
import { ContatoService } from './services/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portifolio';
  ano: number = 0;
  newslatter = new Newslatter();

  constructor(private newsletterService: ContatoService) {
  }

  ngOnInit(): void {
    this.mostrarAno();
  }

  enviarNewslatter() {
    this.newsletterService.newsletter(this.newslatter).subscribe(data => {
      this.newslatter = data;
      this.newslatter = new Newslatter();
    });
  }

  mostrarAno() {
    var currentTime = new Date();
    var year = currentTime.getFullYear()
    this.ano = year;
  }
}
