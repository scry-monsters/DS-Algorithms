var MyQueue = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack.length === 0;
};

var obj = new MyQueue();
obj.push(100);
obj.push(200);
obj.push(300);
obj.pop();
obj.peek();
obj.empty();
console.log(obj);
