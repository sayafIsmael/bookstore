export const prefix = "http://gronthik.sobujvalobasha.com/public/api/";

export function breakArrayIntoGroups(data, maxPerGroup) {
    var groups = [];
    for (var index = 0; index < data.length; index += maxPerGroup) {
        groups.push(data.slice(index, index + maxPerGroup));
    }
    return groups;
}
