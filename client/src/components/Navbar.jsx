import { useState, useEffect } from "react";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa"
import { FiTarget } from "react-icons/fi"
import axios from 'axios'

//import component to use
import Home from './Home'


//Import Images for navigation background
import image1 from "../images/pexels-athena-2962140.jpg"
import image2 from "../images/pexels-donald-tong-189295.jpg"
import image3 from "../images/pexels-energepiccom-175039.jpg"
import image4 from "../images/pexels-pixabay-162553.jpg"
import image5 from "../images/pexels-subham-majumder-3614082.jpg"



function Navbar() {

    //const [product, setProduct] = useState({name: ''})
    const [keyword, setKeyWord] = useState('')
    const [toggle, setToggle] = useState(true)

    const [fetchData, setFetchData] = useState([])
    const [filteredData, setFilteredData] = useState([])


    /*
    const images = [image1, image2, image3, image4, image5]
    const [currentImages, setCurrentImage] = useState(images[0])

    //useEffect for setting an interval for image to slide
    useEffect(() => {
        const interval = setInterval(() => {
            const randomImages = Math.floor(Math.random() * images.length)
            setCurrentImage(images[randomImages])
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    */

    /*
    function handleOnchange(e) {
        const {name, value} = e.target
        setProduct((prev) => {
            return{...prev, [name] : value}
        })
        console.log(product)
    }
    */

    function detectKeyDown(e) {
        if(e.key == 'Enter'){
            const search = (data) => {
                return data.filter((item) => item.title.toLowerCase().includes(keyword))
                
            }
            if(search(fetchData).length == 0){
                alert('No result found')
            }
            setFilteredData(search(fetchData))
        }
    }

    function handleOnclick() {
        setToggle(!toggle)
    }

    useEffect(() => {
        async function fetchProduct() {
            const res = await axios.get('http://localhost:5000/')
            setFetchData(res.data)
        }
        fetchProduct()
    },[])


    return(
        <>
            <div className=" text-white flex sticky top-0 items-start justify-between w-[full] h-[5rem] bg-gray-600 bg-cover bg-center md:h-[4rem]" /*style={{backgroundImage: `url(${currentImages})`}} */>
                <div className="flex items-center justify-center ml-2 font-serif font-bold mt-7">
                    {/*<FiTarget size={30}/>*/}
                    <h1>LaZhopee</h1>
                </div>

                <div className="w-[35rem] m-7">
                    <input className="w-[100%] h-[2rem] rounded-lg text-black p-2" placeholder="Search product here..." name="product" type="text" onChange={(e) => setKeyWord(e.target.value)} onKeyDown={detectKeyDown}/>
                </div>

                {!toggle && <div className="absolute top-16 text-black font-serif bg-gray-400 bg-opacity-80 w-[100%] h-screen flex justify-center gap-6 mt-4">
                    <ul className="p-4">
                        <li className="w-[10rem] h-[2rem] flex items-center justify-center hover:bg-white rounded-md font-bold">Sign-up</li>
                        <li className="w-[10rem] h-[2rem] flex items-center justify-center hover:bg-white rounded-md font-bold">Login</li>
                        <li className="w-[10rem] h-[2rem] flex items-center justify-center hover:bg-white rounded-md font-bold">Contact us</li>
                    </ul>
                </div>}

                <div className="items-center justify-center hidden md:flex ">
                    <ul className="flex gap-4 m-7">
                        <li className=" h-[2rem] items-center hover:bg-white hover:text-black hover:font-bold hover:rounded-md">Sign-up</li>
                        <li className=" h-[2rem] items-center hover:bg-white hover:text-black hover:font-bold hover:rounded-md">Login</li>
                        <li className=" h-[2rem] items-center hover:bg-white hover:text-black hover:font-bold hover:rounded-md">Contact us</li>
                    </ul>
                </div>

                <div className="m-7 md:hidden">
                    <button onClick={handleOnclick}>
                        {toggle ? <FaBars size={25}/> : <FaTimes size={25}/>}
                    </button>
                </div>
            </div>
            <Home data={filteredData}/>
        </>
    )
}

export default Navbar;