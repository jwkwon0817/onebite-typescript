/**
 * Generic Interface
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * Index Signature
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * Generic Type Alias
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

/**
 * Examples of Using Generic Interfaces
 * -> User Management Program
 * -> User Classification: Student User / Developer User
 */

interface Student {
  type: "Student";
  school: string;
}

interface Developer {
  type: "Developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`Go to ${school}.`);
}

const developerUser: User<Developer> = {
  name: "jwkwon0817",
  profile: {
    type: "Developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "jwkwon",
  profile: {
    type: "Student",
    school: "School",
  },
};
