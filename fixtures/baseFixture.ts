import {test as base } from '@playwright/test';
import { Logger} from '../utils/Logger';

type MyFixtures = {
    logger: Logger;
};

export const test =
base.extend<MyFixtures>({
    logger:async ({}, use) => {
        await use (new Logger());
        }
});
 export {expect}
 from '@playwright/test' ; 