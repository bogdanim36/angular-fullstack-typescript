import {EventEmitter, Input, Output} from '@angular/core';
import {EntityService} from "@app/components/entity-page/entity.service";
import {GridOptions, RowNode} from 'ag-grid-community';
import {EntityUiConfig} from "@app/core/entity-ui-config";
import {ClientServiceBaseClass} from "@app/core/client-service-base-class";
import {AppSharedService} from "@app/core/app-shared.service";

export class EntityFormComponentBaseClass<M, C extends EntityUiConfig, S extends ClientServiceBaseClass<M>> {

    @Input() uiConfig: C;
    @Input() grid: GridOptions;
    @Input() service: S;
    @Output() editEvent: EventEmitter<any> = new EventEmitter();
    @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
    public item: M;
    public source: M;
    public errorMessages: Array<string> = [];
    public successMessages: Array<string> = [];
    public errors: M;
    public isNewItem = true;
    hasItem: boolean;
    public selectedGridRowNode: RowNode;
    showNavigation: boolean;
    working = false;
    componentIsLoaded = false;
    public remote = true;

    constructor(protected modelClass: M & Function,
                protected entityService: EntityService,
                protected appSharedService: AppSharedService) {
        this.item = this.createInstance({});
        this.errors = this.createInstance({});
        Object.defineProperty(this, 'hasItem', {
            get() {
                return this.isNewItem || Object.keys(this.item).length > 0;
            }
        });
        Object.defineProperty(this, 'showNavigation', {
            get() {
                return appSharedService.isHandset && !entityService.isEditing;
            }
        });
    }

    //callback fired after entity-form.component is injected in entity-index.component
    //this can be customized in particular instance of entity-form
    componentLoaded() {
        this.componentIsLoaded = true;
    }

    createInstance(source: Partial<M>, extra?: any): M {
        return new this.modelClass.prototype.constructor(source, extra);
    }

    formTitle(): string {
        let title = this.uiConfig.labels.itemDetails.toString();
        title += this.entityService.isEditing ? " (" + (this.isNewItem ? this.uiConfig.labels.addItem : this.uiConfig.labels.modify) + ")" : "";
        return title;
    }

    newItem() {
        this.source = this.createInstance({});
        this.isNewItem = true;
        this.editing();
    }

    modify() {
        if (this.appSharedService.isHandset) {
            this.source = this.item;
        } else {
            this.source = this.selectedGridRowNode.data;
        }
        this.isNewItem = false;
        this.editing();
    }

    gridSuppressRowSelection(value) {
        if (!this.grid) return;
        this.grid.rowSelection = value ? "" : "single";
        this.grid.suppressRowClickSelection = value;
        this.grid.suppressCellSelection = value ? this.uiConfig.gridSuppressCellSelection : false;
    }

    editing() {
        if (!this.appSharedService.isHandset && this.remote) this.gridSuppressRowSelection(true);
        this.item = this.createInstance(this.source);
        this.entityService.isEditing = true;
        this.successMessages = [];
    }

    cancel() {
        this.errors = this.createInstance({});
        this.errorMessages = [];
        this.entityService.isEditing = false;
        this.isNewItem = false;
        this.source = null;
        if (this.appSharedService.isHandset) {
            if (this.service.data.currentItem) this.item = this.service.data.currentItem;
            else this.item = this.createInstance({});
        } else if (this.grid) {
            this.gridSuppressRowSelection(false);
            this.gridSelectionChanged(this.grid);
        }
    }

    setCurrentItem(grid?: GridOptions) {
        if (this.appSharedService.isHandset) {
            if (this.service.data.currentItem) this.item = this.service.data.currentItem;
            this.service.data.currentItemChanged.subscribe(item => {
                this.item = item;
            });
        } else this.gridSelectionChanged(grid);
    }

    gridSelectionChanged(grid: GridOptions) {
        // console.log('selection changed', this.item);
        let nodes = grid.api.getSelectedNodes();
        if (nodes.length) this.selectedGridRowNode = nodes[0];
        else this.selectedGridRowNode = null;
        if (this.selectedGridRowNode) this.item = this.selectedGridRowNode.data;
        else this.item = this.createInstance({});
        if (!this.remote) this.modify();
    }

    showSuccessMsg(msg) {
        this.successMessages.push(msg);
        setTimeout(() => {
            this.successMessages = [];
        }, 2000);
    }

    save(source?) {
        this.working = true;
        this.errorMessages= [];
        this.errors=null;
        this.serviceSave(this.isNewItem, this.source, source || this.item).then(response => {
            this.working = false;
            console.log("response", response);
            if (response.status) {
                this.showSuccessMsg(this.uiConfig.labels.itemIsSaved);
                let item = this.createInstance(response.data);
                this.editEvent.emit({item: item, isNewItem: this.isNewItem});
                this.cancel();
            } else {
                if (response.message && !response.errors) this.errorMessages.push(response.message);
                if (response.errors) this.errors = response.errors;
                console.error('save error', response);
            }
        });
    }

    serviceSave(isNewItem, source, edited): Promise<{ status, data, message?, errors? }> {
        if (this.remote) {
            if (isNewItem)
                return this.service.create(edited);
            else
                return this.service.update(source, edited);
        } else {
            return new Promise<{ status, data, message?, errors? }>((resolve) => {
                resolve({status: true, data: edited, errors: null, message: null});
            });
        }
    }

    delete(item: M) {
        if (this.remote)
            this.service.delete(item).then(response => {
                if (response.status) {
                    this.deleteEvent.emit({response: response, item: item});
                } else {
                    if (response.message) this.errorMessages.push(response.message);
                    console.error('save error', response);
                }
            });
        else {
            this.deleteEvent.emit({response: {status: true, data: item}, item: item});
        }
    }

    toggleShowPanel() {
        //this method is mapped to EntityIndexComponentBaseClass.toggleShowPanel
    }

}
