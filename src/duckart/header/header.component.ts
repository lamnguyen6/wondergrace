import { Component, OnInit } from '@angular/core';
import { DuckartService } from '../duckart.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor(
		private myService: DuckartService,
	) { }

	ngOnInit(): void {
	}
	humburgerOnClick() {
		this.myService.playClickSound();
	}
}
