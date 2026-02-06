"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile = {
    name: "Mark",
    email: "mark@example.com",
    isActive: true
};
function describeProfile(profile) {
    const status = profile.isActive ? "active" : "inactive";
    return `${profile.name} (${profile.email}) is ${status}`;
}
console.log(describeProfile(profile));
//# sourceMappingURL=profile.js.map