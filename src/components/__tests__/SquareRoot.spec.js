import { vitest } from "globals";
import {describe, test, expect} from 'vitest'

describe('square root', ()=> {
    test("sqrt(49) is 7", () => {
        expect(Math.sqrt(49)).toBe(7)
        expect(Math.sqrt(36)).toBe(6)
    })
})