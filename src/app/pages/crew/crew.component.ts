import { Component, OnInit } from '@angular/core';
import { CrewMember } from 'src/app/_interfaces/crew';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit{

  currentCrewMember: CrewMember = {
    name: '',
    role: '',
    bio: '',
    image: '',
    active: false
  };

  currentIndex = 0;

  crewMembers: CrewMember[] = [
    {
      name: "Douglas Hurley",
      image: "../../../assets/crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      active: false
    },
    {
      name: "Mark Shuttleworth",
      image: "../../../assets/crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      active: false
    },
    {
      name: "Victor Glover",
      image: "../../../assets/crew/image-victor-glover.png",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      active: false
    },
    {
      name: "Anousheh Ansari",
      image: "../../../assets/crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      active: false
    }
  ];

  ngOnInit(): void {
    this.currentCrewMember = this.crewMembers[this.currentIndex];
  }
}
