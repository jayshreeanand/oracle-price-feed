const run = async () => {
  setInterval(() => console.log(`Local time: ${Date.now()}`), 10000);
}

run().catch(e => {
  console.error('Error', e);
  process.exit(1);
})
