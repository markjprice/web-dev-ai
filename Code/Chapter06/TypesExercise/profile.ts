interface Profile {
  name: string;
  email: string;
  isActive: boolean;
  lastLogin?: Date;
}

const profile: Profile = {
  name: "Mark",
  email: "mark@example.com",
  isActive: true,
  lastLogin: new Date()
};

function describeProfile(profile: Profile): string {
  const status = profile.isActive ? "active" : "inactive";

  if (profile.lastLogin) {
    return `${profile.name} (${profile.email}) is ${status}. Last login: ${profile.lastLogin.toDateString()}`;
  }

  return `${profile.name} (${profile.email}) is ${status}. Last login unknown.`;
}

console.log(describeProfile(profile));

const profiles: Profile[] = [
  {
    name: "Ilya",
    email: "ilya@boston-raiders.com",
    isActive: true
  },
  {
    name: "Shane",
    email: "shane@montreal-voyageurs.com",
    isActive: false
  }
];

for (const p of profiles) {
  console.log(describeProfile(p));
}
