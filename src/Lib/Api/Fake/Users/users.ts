import { faker } from '@faker-js/faker';

import { CurrentUserResponse, User } from './users.interface';

export const userApi = {
  getCurrentUser: (): Promise<CurrentUserResponse> => {
    return new Promise((resolve) => {
      const user: User = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        phoneNo: faker.phone.phoneNumber(),
        token: faker.datatype.uuid(),
        image: faker.image.avatar()
      };
      resolve({ user });
    });
  }
};

export default userApi;
