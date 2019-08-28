export const prefix = "http://127.0.0.1:8000/api/";

export function breakArrayIntoGroups(data, maxPerGroup) {
    var groups = [];
    for (var index = 0; index < data.length; index += maxPerGroup) {
        groups.push(data.slice(index, index + maxPerGroup));
    }
    return groups;
}
