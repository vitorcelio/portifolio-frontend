import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Like } from 'src/app/models/like';
import { Projeto } from 'src/app/models/projeto';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private routeActive: ActivatedRoute, private projetoService: ProjetoService) { }
  like = new Like();
  projeto = new Projeto();
  numeroDeLikes!: number;

  ngOnInit(): void {
    const link = this.routeActive.snapshot.paramMap.get('link');
    if (link != null) {
      this.projetoService.getByLink(link).subscribe(data => {
        this.projeto = data;
      });

      this.projetoService.getLikes(link).subscribe(data => {
        this.numeroDeLikes = data;
      });
      
    }

  }
  
  curtir() {
    this.projetoService.likeProjeto(this.projeto.link).subscribe(data => {
      this.like = data;
      this.ngOnInit();
    });
  }

}
