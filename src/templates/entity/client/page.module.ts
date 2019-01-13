import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	ButtonModule,
	DialogModule,
	InputSwitchModule,
	InputTextareaModule,
	InputTextModule,
	ToggleButtonModule
} from 'primeng/primeng';

import {<%= entity.pascalCase %>FormComponent} from '@app/module/pages/<%= entities.paramCase %>/form/<%= entity.paramCase %>-form.component';
import {<%= entities.pascalCase %>IndexComponent} from '@app/module/pages/<%= entities.paramCase %>/index/<%= entities.paramCase %>-index.component';
import {<%= entities.pascalCase %>ClientService} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service';
import {<%= entities.pascalCase %>UiConfig} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-ui-config';

@NgModule({
	entryComponents: [
		<%= entity.pascalCase %>FormComponent,
	],
	declarations: [
		<%= entities.pascalCase %>IndexComponent,
		<%= entity.pascalCase %>FormComponent,
	],
	providers: [
		<%= entities.pascalCase %>ClientService,
		<%= entities.pascalCase %>UiConfig
	],
	imports: [
		BrowserModule,
		EntityPageModule,
		DialogModule,
		ButtonModule,
		FormsModule,
		AngularFontAwesomeModule,
		BrowserAnimationsModule,
		InputTextModule,
		InputSwitchModule,
		InputTextareaModule,
		ToggleButtonModule,
	]
})

export class <%= entities.pascalCase %>PageModule {
}