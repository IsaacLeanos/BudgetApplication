import moment from 'moment'

const expenses=[{
    id:'123',
    description:'bll',
    amount:50000,
    note:'something',
    createdAt:moment(0).valueOf() //jan 1st 1970 12:00am
},{
    id:'1234',
    description:'bill two',
    amount:10000,
    note:'',
    createdAt:moment(0).subtract(5,'days').valueOf()
},{
    id:'12345',
    description:'bill three',
    amount:9500,
    note:'',
    createdAt:moment(0).add(5,'days').valueOf()
}]

export default expenses