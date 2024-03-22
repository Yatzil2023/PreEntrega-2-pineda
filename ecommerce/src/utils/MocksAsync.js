export const mockProducts = [{
    "id":1,
    "nombreProducto": "producto 1",
    "img": "https://www.hogarmania.com/archivos/202011/karl6638-flan-expres-xl-848x477x80xX.jpg",
    "precio": 0.98,
    "tieneDescuento": true,
   },
   {
    "id":2,
    "nombreProducto": "producto 2",
    "img": "https://aprende.com/wp-content/uploads/2020/10/pavlova-postre.jpg",
    "precio": 15.00,
    "tieneDescuento": false,
   },
   {
    "id":3,
    "nombreProducto": "producto 3",
    "img": "https://media.istockphoto.com/id/517109442/es/foto/aislado-con-pedacitos-de-chocolate.jpg?s=2048x2048&w=is&k=20&c=vWHtpVD_8ayTeAvEH8yt5aXmJgZUd3WPakcLrh3wpSc=",
    "precio": 20.00,
    "tieneDescuento": true,
   },
   {
    "id":4,
    "nombreProducto": "producto 4",
    "img": "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2023-02/postres-con-mango.jpg.webp?itok=c6AgNlbK",
    "precio": 17.00,
    "tieneDescuento": false,
   }]
  
   export const getProducts = () =>{
    return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve(mockProducts)
      }, 2000)
    });
   }