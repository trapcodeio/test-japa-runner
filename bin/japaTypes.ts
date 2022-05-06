import '@japa/runner'
import {Assert} from "@japa/assert";

declare module '@japa/runner' {
    interface TestContext {
        // notify TypeScript about custom context properties
        // client: string
        // assert: Assert
    }

    interface Test<TestData> {
        // notify TypeScript about custom test properties
    }
}
