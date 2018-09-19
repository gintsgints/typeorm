import { Executable } from "../../../../src/decorator/procedural/Executable";
import { DbFunction } from "../../../../src/decorator/procedural/DbFunction";

@Executable()
export class AddOne {

    @DbFunction()
    AddOne(i: number) {
        return `

        RETURN i + 1;

        `;
    }
}