import { Component } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component(
	{
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.scss']
	}
)

export class AppComponent
	{
		title = 'Lettucesocial | Business';

		constructor(gtag: Gtag) { }
	}
