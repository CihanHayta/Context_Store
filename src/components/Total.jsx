

const Total =({basket})=> {
  // dizideki bütün nesnelerin amount değerlerini topla
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

  // dizideki bütün nesnelerim amount * price değerlerini toplam
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );


    
  return (
    <div className=" rounded my-5 shadow border p-4 d-flex justify-content-center  flex-column">
        
        <div className="fs-4">
            <p>
                Sepette <span className="text-warning fw-bold"> {totalAmount} </span> adet ürün var
            </p>

            <p>
                Toplam Fiyat <span className="text-success fw-bold"> {totalPrice.toFixed(2)}tl </span> 
            </p>
        </div>

            <button className="btn btn-warning py-2  px-4">Siparişi onayla</button>

    </div>
  );
};

export default Total;