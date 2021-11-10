type TCss = {
	[k in keyof CSSStyleDeclaration]?: number | string;
};

/**
 * 设置dom样式
 * @param el
 * @param style
 */
export function setStyle<T extends HTMLElement, K extends TCss>(
	el: T,
	style: K,
) {
	for (const key in style) {
		if (Object.prototype.hasOwnProperty.call(style, key)) {
			el.style[key] = styleValue(key, style[key]!);
		}
	}
}

/**
 * 转驼峰
 * @param d
 * @returns
 */
export function ToLocaleUpperCase(d: string) {
	return d.replace(/-(.?)/g, $1 => $1.replace('-', '').toLocaleUpperCase());
}

const isUnitLess = ['flex'];

/**
 * 处理样式的值
 * @param value
 * @returns
 */
export function styleValue(key: string, value: number | string, unit = 'px') {
	if (typeof value === 'number') {
		if (isUnitLess.indexOf(key) === -1) {
			return `${value}${unit}`;
		}
		return `${value}`;
	}

	return value;
}
