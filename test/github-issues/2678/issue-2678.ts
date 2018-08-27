import "reflect-metadata";
import {createTestingConnections, closeTestingConnections, reloadTestingDatabases} from "../../utils/test-utils";
import {Connection} from "../../../src/connection/Connection";

describe("github issues > #2678 enable repatable migrations", () => {

    let connections: Connection[];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        migrations: [__dirname + "/migration/*.js"],
        schemaCreate: true,
        dropSchema: true,
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it.only("should be able to run all necessary migrations", () => Promise.all(connections.map(async connection => {
        connection.connect();
        await connection.runMigrations();
    })));

    // you can add additional tests if needed

});
