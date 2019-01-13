import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {<%= entity.pascalCase %>} from '@shared/<%= entity.paramCase %>';
import {<%= entities.pascalCase %>IndexComponent} from '@app/module/pages/<%= entities.paramCase %>/index/<%= entities.paramCase %>-index.component';
import {<%= entities.pascalCase %>ClientService} from '@app/module/pages/<%= entities.paramCase %>/<%= entities.paramCase %>-client.service';

@Component({
	selector: 'app-<%= entity.paramCase %>-form',
	templateUrl: './<%= entity.paramCase %>-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './<%= entity.paramCase %>-form.component.scss']
})
export class <%= entity.pascalCase %>FormComponent extends EntityFormComponent<<%= entity.pascalCase %>, <%= entities.pascalCase %>IndexComponent, <%= entities.pascalCase %>ClientService, <%= entities.pascalCase %>IndexComponent > {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
