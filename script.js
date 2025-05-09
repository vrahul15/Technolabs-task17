// 1. Create Parent Class: School
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // Getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // Setter
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  // quickFacts method
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  // Static method
  static pickSubstituteTeacher(substituteTeachers) {
    const index = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[index];
  }
}

// 2. Create PrimarySchool Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// 3. Create HighSchool Class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

// 4. Create instance of PrimarySchool
const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

// 5. Call quickFacts
lorraineHansbury.quickFacts();

// 6. Call pickSubstituteTeacher
console.log(School.pickSubstituteTeacher([
  'Jamal Crawford', 'Lou Williams', 'J. R. Smith',
  'James Harden', 'Jason Terry', 'Manu Ginobli'
]));

// 7. Create instance of HighSchool
const alSmith = new HighSchool(
  'Al E. Smith',
  415,
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);

// 8. Access sportsTeams
console.log(alSmith.sportsTeams);

// Updated SchoolCatalog class for all levels
class SchoolCatalog {
  constructor() {
    this._schools = [];
  }

  // Add any school instance
  addSchool(school) {
    if (school instanceof School) {
      this._schools.push(school);
    } else {
      console.log('Only instances of School or its subclasses can be added.');
    }
  }

  // Remove a school by name
  removeSchool(name) {
    this._schools = this._schools.filter(school => school.name !== name);
  }

  // Find a school by name
  findSchoolByName(name) {
    return this._schools.find(school => school.name === name);
  }

  // List all schools grouped by level
  listAllSchoolsGrouped() {
    const grouped = {
      primary: [],
      middle: [],
      high: []
    };

    this._schools.forEach(school => {
      if (grouped[school.level]) {
        grouped[school.level].push(school);
      }
    });

    for (const level in grouped) {
      console.log(`\n--- ${level.charAt(0).toUpperCase() + level.slice(1)} Schools ---`);
      grouped[level].forEach((school, index) => {
        console.log(`${index + 1}. ${school.name} (${school.numberOfStudents} students)`);
      });
    }
  }
}
