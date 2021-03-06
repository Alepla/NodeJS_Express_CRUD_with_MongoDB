import "mocha";
let chai = require("chai");
import nock = require("nock");
import chaiHttp = require("chai-http");
import { expect } from "chai";
//import { app } from "../index";

chai.use(chaiHttp);

describe("Muestras API Routes", () => {
  const url = `http://localhost:8000`;
  const fakeData = [
    {
      _id: "6040d597626b4c883d0170ea",
      date: "2019-04-15 04:58:55",
      heartStatus: 38,
      pulse: 143,
      hasECG: true,
      anomaly: true,
      user: 59,
    },
    {
      _id: "6040d597626b4c88bd0170ea",
      date: "2018-04-15 04:59:55",
      heartStatus: 34,
      pulse: 45,
      hasECG: false,
      anomaly: false,
      user: 34,
    },
  ];

  describe("GET /muestras", () => {
    it("returns a list of muestras", async () => {
      nock(url).get("/api/muestras").reply(200, { muestras: fakeData });

      const { body, status } = await chai.request(url).get("/api/muestras");
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body.muestras).to.be.an("array");
      expect(body.muestras).to.be.eql(fakeData);
    });
  });

  describe("GET /muestraById", () => {
    it("returns muestra by id", async () => {
      nock(url)
        .get("/api/muestraById/" + fakeData[0]._id)
        .reply(200, { muestra: fakeData[0] });

      const { body, status } = await chai
        .request(url)
        .get("/api/muestraById/" + fakeData[0]._id);
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body.muestra).to.be.eql(fakeData[0]);
    });
  });

  it("returns status 500 when id is not found", async () => {
    let muestra = { id: "fakeId" };
    nock(url)
      .get("/api/muestraById/" + muestra.id)
      .reply(500, {});
    const { body, status } = await chai
      .request(url)
      .get("/api/muestraById/" + muestra.id);
    expect(status).to.equal(500);
    expect(body).to.be.empty;
  });

  describe("GET /muestraByUser", () => {
    it("returns muestra by user", async () => {
      nock(url)
        .get("/api/muestraByUser/" + fakeData[0].user)
        .reply(200, { muestra: [fakeData[0]] });

      const { body, status } = await chai
        .request(url)
        .get("/api/muestraByUser/" + fakeData[0].user);
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body.muestra).to.be.an("array");
    });

    it("returns status 500 when id is not found", async () => {
      let muestra = { user: "fakeUser" };
      nock(url)
        .get("/api/muestraByUser/" + muestra.user)
        .reply(500, {});
      const { body, status } = await chai
        .request(url)
        .get("/api/muestraByUser/" + muestra.user);
      expect(status).to.equal(500);
      expect(body).to.be.empty;
    });
  });

  describe("GET /muestrasWithAnomaly", () => {
    nock(url)
      .get("/api/muestrasWithAnomaly/")
      .reply(200, { muestrasWithAnomaly: [fakeData[0]] });
    it("returns muestra with anomaly", async () => {
      const { body, status } = await chai
        .request(url)
        .get("/api/muestrasWithAnomaly/");
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body.muestrasWithAnomaly).to.be.an("array");
    });
  });

  describe("POST /add-muestra", () => {
    const muestra = {
      date: "2021-02-04",
      heartStatus: 499,
      pulse: 2017,
      hasECG: true,
      anomaly: true,
      user: 901,
    };
    nock(url).post("/api/add-muestra/", muestra).reply(201, { muestra });
    it("saves a new muestra", async () => {
      const { body, status } = await chai
        .request(url)
        .post("/api/add-muestra/")
        .send(muestra);
      expect(status).to.equal(201);
      expect(body).not.to.be.empty;
      expect(body).to.be.an("object");
      expect(body.muestra).to.be.eql(muestra);
    });
  });

  describe("PUT /update-muestra/:id", () => {
    const muestra = {
      date: "2021-02-04",
      heartStatus: 489,
      pulse: 2017,
      hasECG: true,
      anomaly: true,
      user: 901,
    };
    it("updates a muestra", async () => {
      nock(url)
        .put("/api/update-muestra/" + fakeData[0]._id, muestra)
        .reply(200, { muestra });
      const { body, status } = await chai
        .request(url)
        .put("/api/update-muestra/" + fakeData[0]._id)
        .send(muestra);
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body).to.be.an("object");
      expect(body.muestra).to.be.eql(muestra);
    });
  });

  describe("DELETE /delete-muestra/:id", () => {
    nock(url)
      .delete("/api/delete-muestra/" + fakeData[0]._id)
      .reply(200, { muestra: fakeData[0] });
    it("removes a muestra", async () => {
      const { body, status } = await chai
        .request(url)
        .delete("/api/delete-muestra/" + fakeData[0]._id);
      expect(status).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body).to.be.an("object");
      expect(body.muestra).to.be.eql(fakeData[0]);
    });
  });
});
