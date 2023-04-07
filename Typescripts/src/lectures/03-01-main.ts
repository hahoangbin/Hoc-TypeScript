const count = 1;

const channelName = 'Easy Frontend';

const isActive = false;

function getStatusName(state: 'active') {
  console.log(state);
}

let s = 'active';
getStatusName(s as 'active');

// Type Alias and Interface !
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  name: string;
  id: number;
}

interface Contact {
  email: string;
  phone: number;
}

type Employee = BusinessPartner & Contact & Identity
type Customer = Contact & Identity

const e: Employee = {
  name: 'Customer',
  id: 1,
  email: 'Customer@',
  phone: 12345,
  credit: 100001,
}