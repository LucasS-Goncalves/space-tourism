import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  technologies = [
    {
      name: "Launch vehicle",
      images: {
        mobile: "../../../assets/technology/image-launch-vehicle-mobile.svg",
        tablet: "../../../assets/technology/image-launch-vehicle-tablet.svg",
        desktop: "../../../assets/technology/image-launch-vehicle-desktop.svg"
      },
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      name: "Spaceport",
      images: {
        mobile: "../../../assets/technology/image-spaceport-mobile.svg",
        tablet: "../../../assets/technology/image-spaceport-tablet.svg",
        desktop: "../../../assets/technology/image-spaceport-desktop.svg"
      },
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      name: "Space capsule",
      images: {
        mobile: "../../../assets/technology/image-space-capsule-mobile.svg",
        tablet: "../../../assets/technology/image-space-capsule-tablet.svg",
        desktop: "../../../assets/technology/image-space-capsule-desktop.svg"
      },
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}
