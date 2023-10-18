import RingCentral from '@rc-ex/core';
import waitFor from 'wait-for-async';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  for (let i = 0; i < 1000000; i++) {
    await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
    await waitFor({ interval: 5000 });
    console.log(`${i + 1} token(s) created.`);
  }
};

main();
