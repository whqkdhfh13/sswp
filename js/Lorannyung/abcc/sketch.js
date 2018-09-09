function setup() {

	let a1 = [-43, 37, -4, 3, -1, 3, 6, -14, -39, 19];
	let a2 = [-37, 8, -10, 4, -14, 5];
	let result = [];
	while (a1.length + a2.length > 0) {
		let tempInt = 0;

		for (let i = 0; i < a1.length + a2.length; i++) {
			if ((i < a1.length && a1.length > 0 && a1[i] < a1[tempInt]) ||
				(i >= a1.length && (a2[i - a1.length] < a1[tempInt] || a2[i - a1.length] < a2[tempInt - a1.length]))
			) tempInt = i;
		}

		if (tempInt <= a1.length -1) {
		    result.push(a1[tempInt]);
		    a1.splice(tempInt, 1);
		} else {
		    result.push(a2[tempInt - a1.length]);
		    a2.splice(tempInt - a1.length, 1);
		}
	}
	// result = [-43, -39, -37, -14, -14, -10, -4, -1, 3, 3, 4, 5, 6, 8, 19, 37]
}

function draw() {

}
