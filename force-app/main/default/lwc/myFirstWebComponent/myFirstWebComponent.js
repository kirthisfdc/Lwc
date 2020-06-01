import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track

    contacts = [
        {
            Id : 1,
            Name : 'Amy Taylor',
            Title : 'VP of Engineering',
        },
        {
            Id : 2,
            Name : 'Micheal Jones',
            Title : 'VP of Sales',
        },
        {
            Id : 1,
            Name : 'Jennifer Wu',
            Title : 'CEO',
        },
    ];
}