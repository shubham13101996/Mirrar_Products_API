## RESTFUL APIs For E_commerce
how to run file.<br/>
1.Download zip file.<br/>
2.Extract zip file in your sytem.<br/>
3.Open file in VS code.<br/>
4.Open terminal in Vs code.<br/>
5.Run command npm i.<br/>
6.Run command npm start.<br/>

## How to call API
Open PostMan Application Or Thunder CLient Extension in VSCode and try running these commands:<br/>

1.For Creating products to particular user use http://localhost:8000/api/products/ method: POST.<br/>
{ <br/>
     "name":"Watch",<br/>
     "description":"a goldn watch ",<br/>
     "price":"200" ,<br/>
     "variants":[],<br/>
 }<br/>
You can create as many as product u want.<br/>

2.For Updating products use http://localhost:8000/api/products/:id method:  PATCH or PUT , here you have to give _id of that particular product.<br/>

3.For Deleting a product use http://localhost:8000/api/products/:id method: DELETE, here you have to give _id of that particular product. <br/>

4.For Getting product use http://localhost:8000/api/products/ method: GET, will get all the product created by the you.<br/>

5.For Getting particular product use http://localhost:8000/api/products/:id method: GET, here you have to give _id of that particular product and will get particular product created by you.<br/>

