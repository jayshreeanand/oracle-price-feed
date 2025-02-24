const run = async () => {
  const interval = (
    Number.parseInt(process.env.INTERVAL ?? '', 10) ||
    Number.parseInt(process.argv[2], 10) ||
    60
  ) * 1000;

  setInterval(() => console.log(`Local time: ${Date.now()}`), interval);
}

run().catch(e => {
  console.error('Error', e);
  process.exit(1);
})
