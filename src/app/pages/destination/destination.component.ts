import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Destination } from 'src/app/_interfaces/destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit{

  @ViewChild('destinationImg') destinationImg!: ElementRef<HTMLImageElement>;
  @ViewChild('moonInfoArticle') moonInfoArticle!: ElementRef<HTMLElement>;
  @ViewChild('distanceTravelTimeArticle') distanceTravelTimeArticle!: ElementRef<HTMLElement>;

  currentDestination: Destination = {
    name: '',
    image: '',
    description: '',
    distance: '',
    travel: '',
    active: false
  };

  destinations: Destination[] = [
    {
      name: "Moon",
      image: "../../../assets/destination/image-moon.png",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
      active: false
    },
    {
      name: "Mars",
      image: "../../../assets/destination/image-mars.png",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
      active: false
    },
    {
      name: "Europa",
      image: "../../../assets/destination/image-europa.png",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
      active: false
    },
    {
      name: "Titan",
      image: "../../../assets/destination/image-titan.png",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
      active: false
    }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    this.setCurrentDestination(this.currentIndex);
  }

  changeDestination(index: number): void{
    if(this.currentIndex === index) return;
    this.currentIndex = index;
    this.setCurrentDestination(this.currentIndex);
    this.toggleClasses();
  }

  private toggleClasses(): void{
    this.destinationImg.nativeElement.classList.add('active');
    this.moonInfoArticle.nativeElement.classList.add('active');
    this.distanceTravelTimeArticle.nativeElement.classList.add('active');
    setTimeout(() => {
      this.destinationImg.nativeElement.classList.remove('active');
      this.moonInfoArticle.nativeElement.classList.remove('active');
      this.distanceTravelTimeArticle.nativeElement.classList.remove('active');
    }, 500)
  }

  private setCurrentDestination(index: number): void{
    this.currentDestination.active = false;
    this.currentDestination = this.destinations[index];
    this.currentDestination.active = true;
  }
}
