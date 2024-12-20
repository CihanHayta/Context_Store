import { createContext , useState} from "react";
import { toast } from "react-toastify";


export const BasketContext = createContext();


const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
  
   
    const addToBasket =(product)=>{

       
        const found = basket.find((i) => i.id === product.id);

        if(!found){

            setBasket(basket.concat({ ...product, amount: 1 }));

            toast.success("ürün sepete eklendi")

        }else{

            const updated = { ...found, amount: found.amount + 1 };
            const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
            setBasket(newBasket);

            toast.info(`ürünün miktarı Artırıldı (${updated.amount})`);
        }



        
      
    };

const removeFromBasket = (delete_id)=>{

  const filtred = basket.filter((item)=>item.id !== delete_id );
  setBasket(filtred);
  toast.error("ürün sepetten silindi...")
};

const decreaseAmount = (delete_id) => {
  // id'sini bildiğimiz elemanı dizide bul
  const found = basket.find((item) => item.id === delete_id);

  // eğer miktar 1'den büyükse miktarı azalt
  if (found.amount > 1) {
    // nesnenin amount değerini 1 azalt
    const updated = { ...found, amount: found.amount - 1 };

    // diziyi güncelle
    const newBasket = basket.map((item) =>
      item.id === updated.id ? updated : item
    );

    // state'i güncelle
    setBasket(newBasket);

    toast.info(`ürün miktarı azaltıldı(${updated.amount})`);

  } else {
    // eğer miktar 1'e eşitse ürünü direkt sil
    removeFromBasket(delete_id);
  }
};





  
    return (
      <BasketContext.Provider
        value={{ basket,setBasket,addToBasket,removeFromBasket,decreaseAmount}}
      >
        {children}
      </BasketContext.Provider>
    );
  };



export default BasketProvider;