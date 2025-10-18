import React from 'react'
import '../components/Arraymapcom.css'

const Arraymapcard = (props) => {
  return (
  <>
  
   
<div className="card">

<img src={props.user.poster} alt="" />

<h1> {props.user.name}</h1>

<p>{props.user.rating}</p>


<button>check it out</button>

</div>

  
  </>
  )
}

export default Arraymapcard




`

import React from 'react'
import Arraymapcard from './components/Arraymapcard'

const App = () => {



  
let movies = [
  {
    name: "friends",
    poster:
      "https://image.tmdb.org/t/p/original/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
    rating: "8.6",
  },

  {
    name: "Hereditary",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
    rating: "7.3",
  },

  {
    name: "conjuring last rites ",
    poster:
      "https://preview.redd.it/new-poster-for-the-conjuring-last-rites-v0-4a68gyttrsif1.jpeg?auto=webp&s=86168f65a43f08b410675f8aae936123988d3a17",
    rating: "6.7",
  },

  {
    name: "Jurassic World Fallen Kingdom ",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN4_1ByDL_1GpdOtsVQm8Of586hhLG3zuTg&s",
    rating: "6.9",
  },

  {
    name: "wednesday",
    poster:
      "https://images-cdn.ubuy.co.in/63acbb052f2f3115856f4744-wednesday-movie-poster-tv-series-glossy.jpg",
    rating: "7.0",
  },

  {
    name: "pk ",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
    rating: "8.1",
  },

  {
    name: "Demon slayer",
    poster:
      "https://m.media-amazon.com/images/I/41gP+S8QQXL._AC_UF1000,1000_QL80_.jpg",
    rating: "7.8",
  },

  {
    name: "toy story",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg",
    rating: "8.8",
  },

  {
    name: "Attack on titan",
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg",
    rating: "9.1",
  },

  {
    name: "Mad max",
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ac.jpg",
    rating: "8.2",
  },

  {
    name: "Kingdom of the Planet of the Apes",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/ph_-_kotpota_chinaart_1sht_6b3f11d1.png",
    rating: "7",
  },

  {
    name: "game of thrones",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    rating: "9.6",
  },
];

  return (
<>
 <div className="cards">

{
  movies.map((elem,idx)=>{
    return  <Arraymapcard  key={idx} user={elem} />
  })
}



</div>





</>
  )
}

export default App
`
