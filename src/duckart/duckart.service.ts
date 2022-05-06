import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class DuckartService {

	constructor() { }

	playClickSound() {
		let audio = new Audio();
		audio.src = '/assets/audio/click.mp3';
		audio.load();
		audio.play();
	}
}
