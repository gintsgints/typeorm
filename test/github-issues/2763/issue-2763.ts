import "reflect-metadata";

import {closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils";

import {Connection} from "../../../src/connection/Connection";
import { UserLoginToken } from "./entity/UserLoginToken";
import {expect} from "chai";

describe.only("github issues > #2763 - Typeorm tries and fails to find a lowercased column name", () => {

    let connections: Connection[];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        enabledDrivers: ["postgres"]
    }));

    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should not delete when onDelete is 'NO ACTION'", () => Promise.all(
      connections.map(async connection => {
        const repo = connection.getRepository(UserLoginToken);

        await repo.save({ id: 1, LoginToken: "testtoken"});
        const firsttoken = await connection.createQueryBuilder(UserLoginToken, "userlogintoken").getOne();
        expect(firsttoken).to.haveOwnProperty("LoginToken");
      })
    ));
});
