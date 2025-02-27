const write = () => console.log(`Local time: ${Date.now()}`);

const run = async () => {
  const interval = (
    Number.parseInt(process.env.INTERVAL ?? '', 10) ||
    Number.parseInt(process.argv[2], 10) ||
    60
  ) * 1000;
  setTimeout(write, 0);
  setInterval(write, interval);
}

run().catch(e => {
  console.error('Error', e);
  process.exit(1);
})
