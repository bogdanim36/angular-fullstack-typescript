import {DynamicDialogConfig} from 'primeng/api';
import {EntityUiConfig} from '@app/core/entity-ui-config';

export class EntityDialogData<M, I> extends DynamicDialogConfig {
    uiConfig: EntityUiConfig;
    item: M;
    source: M;
    launcher: I;
    isNewItem: boolean;
    save: Function;
    delete: Function;
}