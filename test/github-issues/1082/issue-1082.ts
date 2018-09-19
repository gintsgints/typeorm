import {closeTestingConnections, createTestingConnections, reloadTestingDatabases} from "../../utils/test-utils";
import {Connection} from "../../../src/connection/Connection";
import {expect} from "chai";

describe.only("github issues > #1082 First implementing function", () => {
    let connections: Connection[];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity /*{.js,.ts}"],
        enabledDrivers: ["postgres"]
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should be able to define Annotation", () => Promise.all(connections.map(async connection => {
        try {
            await connection.synchronize();
            expect.fail();
        } catch (error) {
            expect.fail();
        }
    })));
});