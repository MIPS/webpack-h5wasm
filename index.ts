import h5wasm from "h5wasm/node";

async function main(file: string) {
  await h5wasm.ready;

  const fileName = file;

  var f = new h5wasm.File(fileName, "r");
  let groupList = f.keys(); // extract rool keys (GROUPS)
  console.log(groupList);
}

main("./example.hdf5");
