interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserName;
  address: UserAddress;
  phone:string;
}

interface UserName {
  firstname: string;
  lastname: string;
}

interface UserAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation:  AddressGeolocation;
}
interface AddressGeolocation {
  lat: string;
  long: string;
}

interface UserFormikValues {
  username: string;
  password: string;
}

export type { UserFormikValues, User };
