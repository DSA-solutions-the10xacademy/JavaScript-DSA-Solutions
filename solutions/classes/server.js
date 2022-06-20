let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
	idx++;
	return data[idx - 1];
}
// Do not edit above this line
// Code Here

class Server {

	#activeStatus;
	#activeUsers;
	constructor() {
		this.#activeStatus = 1;
		this.#activeUsers = 0;
	}
	#changeStatus = function () {
		this.#activeStatus = !this.#activeStatus;
	}
	getActiveUsers() {
		return this.#activeUsers;
	}
	loginServer() {
		if (this.#activeStatus) {
			this.#activeUsers++;
			if (this.#activeUsers > 5) {
				this.#changeStatus();
			}
		}

	}
	logoutServer() {
		if (this.#activeUsers >= 1) { this.#activeUsers--; }
		if (this.#activeUsers == 5) { this.#changeStatus(); }
	}

}

// Do not edit below this line
let n = parseInt(readLine());
let server = new Server();

for (let i = 0; i < n; i++) {
	let ins = readLine().trim();
	if (ins === "login") {
		server.loginServer();
	}
	else {
		server.logoutServer();
	}
	// Print ActiveUsers after every step
	console.log(server.getActiveUsers());
}
