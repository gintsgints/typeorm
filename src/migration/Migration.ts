import {MigrationInterface} from "./MigrationInterface";

/**
 * Represents entity of the migration in the database.
 */
export class Migration {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    /**
     * Migration id.
     * Indicates order of the executed migrations.
     */
    id: number|undefined;

    /**
     * Timestamp of the migration.
     */
    timestamp: number;

    /**
     * Migration repeatable flag - states this migration should be executed based on hash change.
     */
    repeatable: number;

    /**
     * Name of the migration (class name).
     */
    name: string;

    /**
     * Migration instance that needs to be run.
     */
    instance?: MigrationInterface;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(id: number|undefined, timestamp: number, name: string, repeatable: boolean, instance?: MigrationInterface) {
        this.id = id;
        this.timestamp = timestamp;
        this.name = name;
        this.repeatable = this.repeatable;
        this.instance = instance;
    }

}