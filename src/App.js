import { useEffect, useState } from "react";
import { ApiGetUser } from "./pages/Api";
import Card from "./components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
function App() {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    ApiGetUser.get().then((resp) => {
      setLoad(false);
      setPost(resp.data);
    });
  }, []);
  // const getApi  = async () => {
  //   const resp = await ApiGetUser.get();
  //   setPost(resp.data);
  // }

const token = localStorage.setItem('token', JSON.stringify({token:{
  access: 'Hello, world'
}})) 



  return (
    <>
      {!load ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {post.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1>load...</h1>
      )}
    </>
  );
}

export default App;
