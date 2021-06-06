const Rx = require("rxjs");
const fs = require("fs");
const glob = require("glob-promise");
const { execSync } = require("child_process");

async function runIt() {
  Rx.Observable
    .from(await glob("**/package.json"))
    .filter(path => !path.includes("node_modules"))
    .do(x => console.log(x))
    .do(path => {
      const body = fs.readFileSync(path, "utf8");
      let newBody;
      const noComma = /(\s*)("start":\s"node)([^,]*)\n/;
      const endsComma = /(\s*)("start":\s"node)(.*)\n/;

      if (body.match(noComma)) {
        newBody = body.replace(noComma, "$1$2$3,$1\"watch\": \"nodemon$3\n");
      } else {
        newBody = body.replace(endsComma, "$1$2$3$1\"watch\": \"nodemon$3\n");
      }

      if (newBody !== body) {
        fs.writeFileSync(path, newBody);
      }
    })
    .subscribe();
}

runIt();
