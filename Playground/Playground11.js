const items =[
    
    {name : 'item1' , price : '50'},
    { name : 'item2' , price : '60'},
    {  name : 'item3' , price : '70'},
    {  name : 'item4' , price : '80'},
    { name : 'item5' , price : '90'}

    
];

const maxprice=100;
const filter= items.filter((item) => item.price < 100);

filter.forEach((item) => {
    console.log(item.price);
});