import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
 
  products:[
    {
      id: 1,
      image:"https://media.istockphoto.com/photos/kadai-paneer-picture-id486066908?k=20&m=486066908&s=612x612&w=0&h=edN1paeR1UdkVxomJ0PrlIS2tR_HReQtcrDKDhZ53Ps=", 
      name: "Paneer Dish",
      category: "Lunch /dinner",
      price: "160",
      description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis " },
  
    {
      id: 2,
      image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2020/01/Dal-Recipe-Square.jpg",
      name: "Daal",
      category: "lunch/dinner",
      price: "90",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       
      
       },
    {
      id: 3,
      image: "https://media.istockphoto.com/photos/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati-picture-id516359240?k=20&m=516359240&s=612x612&w=0&h=-ueKlvxvmHTR2yBWXZpaMbvmSCemsLfx3y_Ylkc7m1o=",
      name: "Chapati",
      price: "25",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
          },
    {
      id: 4,
      image: "https://www.spiceupthecurry.com/wp-content/uploads/2019/08/carrot-pickle-recipe-3.jpg",
      name: "Pickle",
      category: "Food",
      price: "60",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       },
    {
      id: 5,
      image: "https://thumbs.dreamstime.com/b/comforting-curd-rice-popular-dish-south-india-yogurt-then-tempered-spices-closeup-plate-horizontal-150658968.jpg",
       name: "Curd",
      category: "food",
      price: "60",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . "
        },
    {
      id: 6,
      image: "https://c4.wallpaperflare.com/wallpaper/979/873/308/sweet-food-chocolate-cream-cup-wallpaper-preview.jpg",
      name: "chocolate creamcup",
      price: "100",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
      },
    {
      id: 7,
      image: "https://media.istockphoto.com/photos/milkshake-trio-picture-id172192393?k=20&m=172192393&s=612x612&w=0&h=dhTrLSSECEurcCAkwRksdlj9C2EM64liK0nCJvF0CWY=",
      name: "MilkShake",
     price: "80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      name: "Ice Cream",
      price: "80",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
         },
 
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer