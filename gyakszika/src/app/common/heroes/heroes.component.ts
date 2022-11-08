import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  userList: Observable<Hero[]> = this.heroService.getAll();

  filterPhrase: string = '';
  clickedHeader: string = '';

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  onClickHeader(header: any): void {
    console.log(header.target.innerHTML);
    this.clickedHeader = header.target.innerHTML;
  }
}
