async function main(file: string) {
  // const h5wasm = await import(/* webpackMode: "eager" */ "h5wasm/node");
  const h5wasm = await import("h5wasm/node");
  await h5wasm.ready;

  const fileName = file;

  var f = new h5wasm.File(fileName, "r");
  let groupList = f.keys();
  console.log(groupList);
}

main("./example.hdf5");
