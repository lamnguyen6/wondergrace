import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss']
})
export class MintComponent implements OnInit {
  mintPageUrl: SafeResourceUrl = '';

  constructor(
    private readonly sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.mintPageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/pages/mint/index.html');
  }

}
