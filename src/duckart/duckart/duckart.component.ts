import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { defer, from, of } from 'rxjs';
import { DuckartService } from '../duckart.service';

@Component({
	selector: 'app-duckart',
	templateUrl: './duckart.component.html',
	styleUrls: ['./duckart.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DuckartComponent implements OnInit, AfterViewInit {
	faq: Array<any> = [
		{
			active: false,
			onclick: false,
			q: `What are rubber ducks?`,
			a: `
			<p>Rubber Duck Bath Party is a collection of 10,000 NFTs hand-drawn by <a target="_blank" href="https://twitter.com/thegalshir">Gal Shir</a>. Ducks are randomly generated and constructed from over 200 different components. Each duck is unique and minted as an NFT on the Ethereum blockchain. Rubber ducks are dynamic NFTs and can change their traits over time by attending parties!</p>
			`
		},
		{
			active: false,
			onclick: false,
			q: `What the tech?`,
			a: `
			<p>Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.</p>
			`
		},
		{
			active: false,
			onclick: false,
			q: `What are bath parties?`,
			a: `
			<p>Bath parties are virtual events happening on the blockchain. No party is the same, and the only thing we can promise is that your duck will come home changed forever.</p>
			<ol>
				<li><span>1</span>Parties will be announced on <a target="_blank" href="https://twitter.com/rubberduckbp">Twitter</a> and <a target="_blank" href="/discord">Discord</a>.</li>
				<li><span>2</span>Each party runs for 24 hours in which you can decide for each of your ducks if you want to attend the party.</li>
				<li><span>3</span>PARTY TIME</li>
				<li><span>4</span>That inevitable walk of shame... hit the reveal button to see how they came back from the party. Let's hope that they didn't lose that priceless family heirloom.</li>
				<li><span>5</span>Your duck will be updated on OpenSea, your wallet, and other platforms.</li>
			</ol>
			`
		},
		{
			active: false,
			onclick: false,
			q: `Wen party?`,
			a: `
			<p>When the vibe is right! Parties will be announced on <a target="_blank" href="https://twitter.com/rubberduckbp">Twitter</a> and <a target="_blank" href="/discord">Discord</a>. Craving a party? Let us know in the #wenparty Discord channel or tweet us your best party meme with hashtag <a href="#">#wenparty</a></p>
			`
		},
		{
			active: false,
			onclick: false,
			q: `Do parties cost gas?`,
			a: `
			<p>No, parties don’t cost any gas! When you send your ducks to a party, you will need to connect your wallet to verify that you’re the owner, but that doesn’t have any gas fees. When the party ends, we update the contract to refer to the new metadata of all ducks on IPFS - the cost of that contract interaction is on us.</p>
			`
		},
		{
			active: false,
			onclick: false,
			q: `Should I send my duck to a party?`,
			a: `
			<p>First of all, the choice is entirely yours! Bath parties are incredibly fun because they have the power to change your duck forever. During parties, each of your ducks has the chance to win rare traits and increase in value.</p>
			<p>In addition, the number of parties your duck attends will be encoded in the metadata and might influence future possibilities and access. For instance, there will be exclusive parties where you can win limited edition traits that are only accessible to ducks who like to party hard.</p>
			<p>After all, ducks are fun-loving creatures who thrive on action and live for constant change. So stop the overparenting and let your ducks go wild! </p>
			`
		},
		{
			active: false,
			onclick: false,
			q: `My duck didn’t change after a party, help?`,
			a: `
			<p>It takes some time for OpenSea and other platforms to update metadata. You can speed up the process by clicking on the refresh metadata button on OpenSea. In the meantime, you can check out your ducks on your <a href="/tub">tub page</a>.</p>
			`
		},
	];

	teamMember: Array<any> = [
		{
			id: 'avatar1',
			avatar: '/assets/images/members/member1.mp4',
			name: 'Charlotte Grace',
			job: 'Art',
			contact: '@RaffaeloNft'
		},
		{
			id: 'avatar2',
			avatar: '/assets/images/members/member2.mp4',
			name: 'Serena',
			job: 'Art',
			contact: '@Serena_Grace9x'
		},
		{
			id: 'avatar3',
			avatar: '/assets/images/members/member3.mp4',
			name: 'Mark Hoit',
			job: 'Tech',
			contact: '@Harracio'
		},
		{
			id: 'avatar4',
			avatar: '/assets/images/members/member4.mp4',
			name: 'Miracle',
			job: 'Community',
			contact: '@miracle_nfts'
		},
		{
			id: 'avatar5',
			avatar: '/assets/images/members/member5.mp4',
			name: 'Tracy Nguyen',
			job: 'Colab & KOL',
			contact: '@tracio_nft'
		},
	];

	myForm: any;
	myFormSubmitted: boolean = false;

	loadAPI: any;

	@ViewChild('fakeMintBtn', { static: false }) fakeMintBtn: any;

	constructor(
		private myService: DuckartService,
		private fb: FormBuilder,
		private readonly router: Router,
	) { }

	get name() {
		return this.myForm.get('name');
	}
	get mail() {
		return this.myForm.get('mail');
	}
	get message() {
		return this.myForm.get('message');
	}

	ngAfterViewInit() {
		this.ensureVideoPlays();
	}

	ngOnInit(): void {
		// this.initForm();
	}

	private ensureVideoPlays(): void{
		let allVids = this.teamMember.map(x => x.id);
		allVids.unshift('banner');
		allVids.push('mint-banner');

		allVids.forEach(vid => {
			let vidHTML = <HTMLVideoElement>document.getElementById(vid);

			if (vidHTML) {
				let promise = vidHTML.play();
				if(promise !== undefined){
					promise.then(() => {
						// Autoplay started
					}).catch(error => {
						// Autoplay was prevented.
						vidHTML.muted = true;
						vidHTML.play();
					});
				}
			}
		});
	}

	initForm() {
		this.myForm = this.fb.group({
			name: new FormControl('', Validators.required),
			mail: new FormControl('', [Validators.required, Validators.email]),
			message: new FormControl('', Validators.required),
			subject: new FormControl('', ),
			project: new FormControl('', ),
		});
	}
	faqOnClick(idx: number) {
		if (this.faq[idx].onclick) return;

		this.myService.playClickSound();
		this.faq[idx].onclick = true;
		this.faq[idx].active = !this.faq[idx].active;
		setTimeout(() => {
			this.faq[idx].onclick = false;
		}, 5e2);
	}
	myFormOnSubmit() {
		this.myService.playClickSound();
		this.myFormSubmitted = true;
		if (this.myForm.invalid) return;
	}
  connectWalletOnClick() {
    this.router.navigate(['/mint']);
    // window.open(url.toString(), '_blank')
  }
}
