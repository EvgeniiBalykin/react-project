import './Photos.css';
import {useState} from 'react';
import axios from 'axios'


function Photos() {
   const [photos, setPhotos] = useState([])
   
   const loadPhotos = async () => {
      let page = 1

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos2 = async () => {
      let page = 2 

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos3 = async () => {
      let page = 3

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos4 = async () => {
      let page = 4 

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos5 = async () => {
      let page = 5

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos6 = async () => {
      let page = 6

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos7 = async () => {
      let page = 7

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos8 = async () => {
      let page = 8 

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos9 = async () => {
      let page = 9

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }

   const loadPhotos10 = async () => {
      let page = 10

      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      setPhotos(response.data)
   }


   return(
      <div className='container'>
         <div className='photos'>
         {photos.map((item) => {
            
               return (
                  <div>
                     <img src={item.url}/>
                     <h4 className='title'>{item.title}</h4>
                  </div>
               )
         })}
         </div>
         <div className='buttons'>
            <button onClick={loadPhotos}>1</button>
            <button onClick={loadPhotos2}>2</button>
            <button onClick={loadPhotos3}>3</button>
            <button onClick={loadPhotos4}>4</button>
            <button onClick={loadPhotos5}>5</button>
            <button onClick={loadPhotos6}>6</button>
            <button onClick={loadPhotos7}>7</button>
            <button onClick={loadPhotos8}>8</button>
            <button onClick={loadPhotos9}>9</button>
            <button onClick={loadPhotos10}>10</button>
         </div>
      </div>
      
   )
}

export default Photos;