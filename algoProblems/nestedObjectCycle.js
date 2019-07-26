function hasCycle(obj) {
  let hash = {};
  for (let parent in obj['questions']) {
    let yes = obj.questions[parent]['yes'];
    let no = obj.questions[parent]['no'];

    if (yes in hash) {
      hash[yes].push(parent);
    } else {
      hash[yes] = [parent];
    }
    if (no in hash) {
      hash[no].push(parent);
    } else {
      hash[no] = [parent];
    } 
  }

  for (let child in hash) {
    if (child !== 'null') {
      let parents = hash[child];
      while (parents.length > 0) {
        let currentParent = parents.pop();
        if (currentParent === child) {
          return true;
        }
        else {
          if (hash[currentParent]) {
            hash[currentParent].forEach((eachParent) => {
              parents.push(eachParent)
            })
          }
        }
      }
    } 
  }

  return false;
  
}

const questionnaireDefinitionWithCycle = {
  start: "a",
  questions: {
    a: {
      yes: "b",
      no: "c"
    },
    b: {
      yes: "c",
      no: null
    },
    c: {
      yes: "f",
      no: 'd'
    },
    d: {
      yes: 'a',
      no: null
    },
    f: {
      yes: null,
      no: null
    }
  }
};

const questionnaireDefinitionWithNoCycle = {
  start: "a",
  questions: {
    a: {
      yes: "b",
      no: "c"
    },
    b: {
      yes: "c",
      no: null
    },
    c: {
      yes: "f",
      no: 'd'
    },
    d: {
      yes: 'f',
      no: null
    },
    f: {
      yes: null,
      no: null
    }
  }
};

const driversLicenseWithCycle = {
  // The question under `questions` representing the first question
  // in the questionnaire.
  start: "driversLicenseCurrent",

  questions: {
    // "Do you currently have a state-issued driver's license?"
    driversLicenseCurrent: {
      yes: "driversLicenseHomeState",
      no: "driversLicensePast"
    },

    // "Was your current state-issued driver's license issued in state of residence?"
    driversLicenseHomeState: {
      yes: 'driversLicenseCurrent', // CYCLE HERE 
      no: null
    },

    // "Did you ever have a state-issued driver's license?"
    driversLicensePast: {
      yes: "driversLicenseRevoked",
      no: 'driversLicenseHomeState'
    },

    // "Was your state-issued driver's license revoked due to one or more traffic-related incidents?"
    driversLicenseRevoked: {
      yes: null,
      no: null
    }
  }
};

// console.log(hasCycle(questionnaireDefinitionWithCycle)) // true
// console.log(hasCycle(questionnaireDefinitionWithNoCycle)) // false
console.log(hasCycle(driversLicenseWithCycle)) // true
