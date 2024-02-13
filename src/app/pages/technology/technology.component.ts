import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Technology } from 'src/app/_interfaces/technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{

  currentTechnology: Technology = {
    images: {
      mobile: '',
      tablet: '',
      desktop: ''
    },
    name: '',
    description: '',
    active: false
  };

  technologies: Technology[] = [
    {
      name: "Launch vehicle",
      images: {
        mobile: "../../../assets/technology/image-launch-vehicle-mobile.jpg",
        tablet: "../../../assets/technology/image-launch-vehicle-tablet.jpg",
        desktop: "../../../assets/technology/image-launch-vehicle-desktop.jpg"
      },
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      active: false
    },
    {
      name: "Spaceport",
      images: {
        mobile: "../../../assets/technology/image-spaceport-mobile.jpg",
        tablet: "../../../assets/technology/image-spaceport-tablet.jpg",
        desktop: "../../../assets/technology/image-spaceport-desktop.jpg"
      },
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      active: false
    },
    {
      name: "Space capsule",
      images: {
        mobile: "../../../assets/technology/image-space-capsule-mobile.jpg",
        tablet: "../../../assets/technology/image-space-capsule-tablet.jpg",
        desktop: "../../../assets/technology/image-space-capsule-desktop.jpg"
      },
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      active: false
    }
  ]

  currentIndex = 0;

  ngOnInit(): void {
    this.setCurrentTechnology(this.currentIndex);
  }

  @ViewChild('technologyImg') technologyImg!: ElementRef<HTMLImageElement>;
  @ViewChild('technologyInfoArticle') technologyInfoArticle!: ElementRef<HTMLElement>;

  changeTechnology(index: number): void{
    if(this.currentIndex === index) return;
    this.currentIndex = index;
    this.setCurrentTechnology(this.currentIndex);
    this.toggleClasses();
  }

  private toggleClasses(): void{
    this.technologyImg.nativeElement.classList.add('active');
    this.technologyInfoArticle.nativeElement.classList.add('active');
    setTimeout(() => {
      this.technologyImg.nativeElement.classList.remove('active');
      this.technologyInfoArticle.nativeElement.classList.remove('active');
    }, 500)
  };

  private setCurrentTechnology(index: number): void{
    this.currentTechnology.active = false;
    this.currentTechnology = this.technologies[index];
    this.currentTechnology.active = true;
  }
}
