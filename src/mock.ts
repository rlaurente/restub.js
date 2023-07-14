import { findWhere } from "underscore";

interface Mock {
    url: string;
    handler: () => void;
}

const mocks: Array<Mock> = [];

export const mock = (param: Mock): void => {
    const exist = findWhere(mocks, {
        url: param.url
    })
    if (!exist) {
        mocks.push(param)
    } else {
        throw new Error(`Mock ${param.url} already exist`)
    }
}