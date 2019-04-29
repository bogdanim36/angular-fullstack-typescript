import {Directive, Input, TemplateRef} from '@angular/core';
import {TableColumn} from "@app/core/table-column";

@Directive({
	selector: 'spk-table-column',
})

export class SpkTableColumnDirective {
	@Input() def: TableColumn;
	@Input('viewTemplate') viewTemplate: TemplateRef<any>;
}
