/* this is a server side component */
/* wherever we want page in server side but component in client side, we can use this component */

import { CSC } from './csc';

export const metadata = {
    title: 'Client Side Component',
    description: 'Client Side Component',
}

export default function ClientSideComponent() {
    return <CSC />;
}