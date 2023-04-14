import { Component, Input } from "@angular/core";
import { Hero } from "../hero.model";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  @Input()
  hero?: Hero;

}
