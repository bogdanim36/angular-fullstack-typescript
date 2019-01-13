export module SpkHelper {
	export function ObjectAssign(target, source, extra?: any) {
		extra = extra ? extra : {};
		let fields = Object.keys(source);
		fields = fields.concat(Object.keys(extra));
		fields.forEach(key => {
			target[key] = source[key];
		});
		return target;
	}
}