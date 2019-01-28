import {Component, Directive, ElementRef, EmbeddedViewRef, Input, OnChanges, Pipe, SimpleChange, TemplateRef, ViewChild, ViewContainerRef} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatToolbar} from "@angular/material";

@Component({
	selector: "app-grid-toolbar",
	template: `
		 <mat-toolbar class="grid-toolbar" role="footer">
		 </mat-toolbar>`

})

export class GridToolbarComponent implements OnChanges{
	@Input() templateHTML: string;
	@ViewChild(MatToolbar) content:MatToolbar;

	constructor(private sanitizer:DomSanitizer) {
		console.log('TemplateWrapper');
	}
	ngOnChanges(changes){
		if (changes["templateHTML"]){
			// this.content._elementRef.nativeElement.innerHTML = this.sanitizer.bypassSecurityTrustHtml(this.templateHTML);
			this.content._elementRef.nativeElement.innerHTML = this.templateHTML;
		}

	}
}

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
