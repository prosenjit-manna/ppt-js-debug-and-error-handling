import { faker } from "@faker-js/faker";
import chalk from "chalk";
import _ from "lodash";

interface User {
  firstName: string;
  lastName: string;
}

const users: User[] = _.range(0, 10).map(e => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }
})
// Add Prosenjit In random Position
users.splice(_.random(0, 10), 0, { firstName: 'Prosenjit', lastName: 'Manna'})

console.log(users);

// Find Prosenjit
const index = users.findIndex(u => u.firstName.includes('prosenjit'))
if (index > 0) {
  console.log('found item at:', index);
} else {
  console.log(chalk.red('Not found'));
}
