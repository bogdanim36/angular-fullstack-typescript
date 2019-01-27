import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from "@angular/core";

@Component({
	selector: "app-grid-toolbar",
	template: `<mat-toolbar class="grid-toolbar" role="footer">
	<ng-template #content ></ng-template>
</mat-toolbar>`

})

export class GridToolbarComponent {
	@ViewChild('content', {read: ViewContainerRef}) holder;
	constructor(private componentFactoryResolver: ComponentFactoryResolver){
		let viewContainerRef = this.holder.viewContainer;
		let componentRef = viewContainerRef.createComponent(componentFactory);
  let instance: TabComponent = componentRef.instance as TabComponent;
	}

}
