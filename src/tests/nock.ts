import nock = require("nock");

export const nockCall = (url: string, get: string, reply: any) => {
  return nock(url).get(get).reply(reply.status, reply.body);
};
