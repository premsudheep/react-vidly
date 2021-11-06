import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // _(items) returns a lodash object and we can chain lodash commands to it. 
    // .value() will again convert lodash array obj to regular array.
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}