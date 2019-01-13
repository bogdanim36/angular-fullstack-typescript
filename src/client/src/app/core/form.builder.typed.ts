// https://gist.github.com/abbazabacto/0f290e1ef72e682a9a1309c0cfa81bf6
// extended upon: https://ruanbeukes.net/Angular-Typesafe-Reactive-Forms/
import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';

type PropertyFn<T, R> = (val: T) => R;

export interface AbstractControlTyped<T> extends AbstractControl {
	readonly value: T;
	readonly valueChanges: Observable<T>;

	setValue(value: T, options?: Object): T;

	patchValue(value: T, options?: Object): T;

	reset(value?: T, options?: Object): void;

	get(path: Array<string | number> | string): AbstractControl | null;

	get<R>(path: Array<string | number> | string): AbstractControlTyped<R> | null;

	getSafe<R>(propertyFn: PropertyFn<T, R>): AbstractControlTyped<R> | null;
}

export interface FormGroupTyped<T> extends FormGroup {
	readonly value: T;
	readonly valueChanges: Observable<T>;

	setValue(value: T, options?: Object): T;

	patchValue(value: T, options?: Object): T;

	reset(value?: T, options?: Object): void;

	get(path: Array<string | number> | string): AbstractControl | null;

	get<T>(path: Array<string | number> | string): AbstractControlTyped<T> | null;

	getSafe<R>(propertyFn: PropertyFn<T, R>): AbstractControlTyped<R> | null;

	registerControl(name: string, control: AbstractControl): AbstractControl;

	registerControl<T>(name: string, control: AbstractControl): AbstractControlTyped<T>;

	registerControlSafe<R>(propertyFn: PropertyFn<T, R>, control: AbstractControl): AbstractControlTyped<R>;

	addControlSafe<R>(propertyFn: PropertyFn<T, R>, control: AbstractControl): void;

	removeControlSafe<R>(propertyFn: PropertyFn<T, R>): void;

	setControlSafe<R>(propertyFn: PropertyFn<T, R>, control: AbstractControl): void;
}

export type ControlsConfigTyped<T> = {
	[P in keyof T]: FormControl | FormGroup | FormArray | undefined[] | {
	0?: T[P];
	1?: ValidatorFn | ValidatorFn[];
	2?: AsyncValidatorFn | AsyncValidatorFn[];
};
};

@Injectable()
export class FormBuilderTyped extends FormBuilder {
	private static getPropertyName(propertyFunction: Function): string {
		const properties = propertyFunction.toString()
			.match(/(?![. ])([a-z0-9_]+)(?=[};.])/gi)
			.splice(1);

		return properties.join('.');
	}

	private static getSafe<T, R>(group: AbstractControl, propertyFn: PropertyFn<T, R>): AbstractControlTyped<R> {
		const getStr = FormBuilderTyped.getPropertyName(propertyFn);
		return this.mapControl(group.get(getStr) as AbstractControlTyped<R>);
	}

	private static registerControlSafe<T, R>(group: FormGroup, propertyFn: PropertyFn<T, R>, control: AbstractControl): AbstractControlTyped<R> {
		const getStr = FormBuilderTyped.getPropertyName(propertyFn);
		return this.mapControl(group.registerControl(getStr, control) as AbstractControlTyped<R>);
	}

	private static addControlSafe<T, R>(group: FormGroup, propertyFn: PropertyFn<T, R>, control: AbstractControl) {
		const getStr = FormBuilderTyped.getPropertyName(propertyFn);
		group.addControl(getStr, control);
	}

	private static removeControlSafe<T, R>(group: FormGroup, propertyFn: PropertyFn<T, R>) {
		const getStr = FormBuilderTyped.getPropertyName(propertyFn);
		group.removeControl(getStr);
	}

	private static setControlSafe<T, R>(group: FormGroup, propertyFn: PropertyFn<T, R>, control: AbstractControl) {
		const getStr = FormBuilderTyped.getPropertyName(propertyFn);
		group.setControl(getStr, control);
	}

	private static mapFormGroup<T>(group: FormGroupTyped<T>): FormGroupTyped<T> {
		group.registerControlSafe = function <T, R>(propertyFn: PropertyFn<T, R>, control: AbstractControl) {
			return FormBuilderTyped.registerControlSafe(group, propertyFn, control);
		};

		group.addControlSafe = function <T, R>(propertyFn: PropertyFn<T, R>, control: AbstractControl) {
			FormBuilderTyped.addControlSafe(group, propertyFn, control);
		};

		group.removeControlSafe = function <T, R>(propertyFn: PropertyFn<T, R>) {
			FormBuilderTyped.removeControlSafe(group, propertyFn);
		};

		group.setControlSafe = function <T, R>(propertyFn: PropertyFn<T, R>, control: AbstractControl) {
			return FormBuilderTyped.setControlSafe(group, propertyFn, control);
		};

		return group;
	}

	private static mapControl<T>(control: FormGroupTyped<T>): FormGroupTyped<T>;
	private static mapControl<T>(control: AbstractControlTyped<T>): AbstractControlTyped<T>;
	private static mapControl<T>(control: AbstractControlTyped<T> | FormGroupTyped<T>): AbstractControlTyped<T> {
		control.getSafe = function <T, R>(propertyFn: PropertyFn<T, R>) {
			return FormBuilderTyped.getSafe(control, propertyFn);
		};

		if (control instanceof FormGroup) {
			this.mapFormGroup(control);
		}

		return control;
	}

	group(controlsConfig: ControlsConfigTyped<any>, extra?: { [key: string]: any; } | null): FormGroup;
	group<T>(controlsConfig: ControlsConfigTyped<T>, extra?: { [key: string]: any; } | null): FormGroupTyped<T>;
	group<T>(controlsConfig: ControlsConfigTyped<T>, extra?: { [key: string]: any; } | null): FormGroupTyped<T> {
		let group = super.group(controlsConfig, extra) as FormGroupTyped<T>;
		if (group) {
			return FormBuilderTyped.mapControl(group);
		}
	}

	generate<T>(source: T, extra?: { [key: string]: any; } | null) {
		let config = {};
		let fields = Object.keys(source);
		if (extra) fields = fields.concat(Object.keys(extra));
		fields.forEach(key => {
			config[key] = new FormControl('');
		});

		// console.log('source', source, config);
		config = config as ControlsConfigTyped<T>;
		let group = super.group(config, extra) as FormGroupTyped<T>;
		if (group) {
			let form = FormBuilderTyped.mapControl(group);
			form.setValue(source);
			Object.keys(extra).forEach(function (name) {
				form.controls[name].setValue(source[name], {onlySelf: true});
			});
			form.updateValueAndValidity();
			return form;
		}
	}
}
