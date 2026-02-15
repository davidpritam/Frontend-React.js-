import React from 'react'

const App = () => {
  function buttonClicked(){
    console.log("Button is Clicked");
    
  }
  return (
    <div>
      <button
      onClick={buttonClicked}
      className='active:scale-95 cursor-pointer text-white bg-emerald-500 rounded m-2 px-6 py-2 font-bold'>Click to Download</button>
    </div>
  )
}

export default App

// import React from 'react'
// import Navbar from './components/Navbar'
// import Men from './components/Men'
// import Women from './components/Women'

// const App = () => {

//   const user1= {
//     name: "Majnu",
//     age: 23,
//     gender: "male"
//   }

//   const user2 = {
//     name: "Laila",
//     age: 20,
//     gender: "female"
//   }
//   return (
//     <div>
//       {user2.gender =="male"?<Men/>: <Women/>}
//       {/* <Navbar title = 'Dhruv Jurel' color = 'red' links = {["About", "Goals", "Find Us", "Services"]}/>
//       <Navbar title = 'SuryaKumar Yadav' color = 'blue' links = {["Search", "Attention", "Guide Us", "Product"]}/>
//       <Navbar title = 'Rohit Sharma' color = 'green' links = {["Our Products", "Pray", "Find Us", "Contacts"]}/> */}
//     </div>
//   )
// }

// export default App
