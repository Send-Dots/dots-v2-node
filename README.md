## Dots API V2

### Quickstart

```
import { Dots } from 'dots-v2-node';

const dots = new Dots({
    BASE: 'https://api.senddotssandbox.com/api',
    USERNAME: <CLIENT_ID>,
    PASSWORD: <API_KEY>
})


const createUser = async () => {
    const user = await dots.users.createUser({
        first_name: 'Bob',
        last_name: 'Dob',
        email: 'bob.dob@gmail.com',
        country_code: '1',
        phone_number: '5555555555',
        username: 'BOBDOB',
        metadata: {
            'internal_id': 'usr_31233123'
        }
    })
}


```
