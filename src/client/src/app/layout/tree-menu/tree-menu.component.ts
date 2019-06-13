import {Component} from '@angular/core';
import {MenuItem} from "@shared/config-menu";
import {MenuItemsService} from "@app/layout/tree-menu/menu-items.service";
import {ITreeOptions, TREE_ACTIONS} from "angular-tree-component";
import {Router} from "@angular/router";

@Component({
	selector: 'app-tree-menu',
	templateUrl: './tree-menu.component.html',
	styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent {
	menuItems: Array<MenuItem>;
	options: ITreeOptions;

	constructor(private dataSrv: MenuItemsService, private router: Router) {
		this.menuItems = dataSrv.data;
		this.options = {
			displayField: 'label',
 			childrenField: 'items',
			hasChildrenField: 'items',
			levelPadding: 10,
			useVirtualScroll: false,
			animateExpand: true,
			scrollOnActivate: true,
			animateSpeed: 30,
			animateAcceleration: 1.2,
			isExpandedField: 'expanded',
			actionMapping: {
				mouse: {
					click: (tree, node, $event) => {
						if (!node.hasChildren) router.navigate([node.data.routerLink]);
						else TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
					}
				}
			},
		};
	}

}
