const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthFirstSearch(graph, start, end){
	let queue = [start];
	let alreadyChecked = [];
	while(queue.length > 0){
		let popHolder = queue.shift();
		if(!graph[popHolder]){ //on the first cycle a is now = [], because it didn't have the end result, but 'a's connections('b' and 'c') are now in the queue;
			graph[popHolder] = alreadyChecked;
		}
		if(graph[popHolder].includes(end)){
			return true;
		}
		else{
			queue = [...queue, ...graph[popHolder]];
		}
	}
	return false;
}

console.log(breadthFirstSearch(graph, 'a', 'f'));

