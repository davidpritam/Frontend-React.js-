import React from 'react'

const App = () => {
  const users = [
  {
    fullName: "Tony Stark",
    title: "Iron Man",
    profile: "https://i.pravatar.cc/150?img=1",
    coverImage: "https://picsum.photos/800/300?random=1",
    likesCount: 12500,
    postCount: 340,
    viewsCount: 98000,
    followed: true
  },
  {
    fullName: "Steve Rogers",
    title: "Captain America",
    profile: "https://i.pravatar.cc/150?img=2",
    coverImage: "https://picsum.photos/800/300?random=2",
    likesCount: 9800,
    postCount: 210,
    viewsCount: 75000,
    followed: false
  },
  {
    fullName: "Thor Odinson",
    title: "God of Thunder",
    profile: "https://i.pravatar.cc/150?img=3",
    coverImage: "https://picsum.photos/800/300?random=3",
    likesCount: 15000,
    postCount: 180,
    viewsCount: 120000,
    followed: true
  },
  {
    fullName: "Bruce Banner",
    title: "Hulk",
    profile: "https://i.pravatar.cc/150?img=4",
    coverImage: "https://picsum.photos/800/300?random=4",
    likesCount: 8700,
    postCount: 95,
    viewsCount: 60000,
    followed: false
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow",
    profile: "https://i.pravatar.cc/150?img=5",
    coverImage: "https://picsum.photos/800/300?random=5",
    likesCount: 11200,
    postCount: 260,
    viewsCount: 88000,
    followed: true
  },
  {
    fullName: "Peter Parker",
    title: "Spider-Man",
    profile: "https://i.pravatar.cc/150?img=6",
    coverImage: "https://picsum.photos/800/300?random=6",
    likesCount: 14300,
    postCount: 410,
    viewsCount: 135000,
    followed: true
  },
  {
    fullName: "T'Challa",
    title: "Black Panther",
    profile: "https://i.pravatar.cc/150?img=7",
    coverImage: "https://picsum.photos/800/300?random=7",
    likesCount: 10100,
    postCount: 190,
    viewsCount: 72000,
    followed: false
  },
  {
    fullName: "Stephen Strange",
    title: "Doctor Strange",
    profile: "https://i.pravatar.cc/150?img=8",
    coverImage: "https://picsum.photos/800/300?random=8",
    likesCount: 9400,
    postCount: 160,
    viewsCount: 68000,
    followed: true
  },
  {
    fullName: "Wanda Maximoff",
    title: "Scarlet Witch",
    profile: "https://i.pravatar.cc/150?img=9",
    coverImage: "https://picsum.photos/800/300?random=9",
    likesCount: 13200,
    postCount: 230,
    viewsCount: 91000,
    followed: false
  },
  {
    fullName: "Clint Barton",
    title: "Hawkeye",
    profile: "https://i.pravatar.cc/150?img=10",
    coverImage: "https://picsum.photos/800/300?random=10",
    likesCount: 6900,
    postCount: 140,
    viewsCount: 52000,
    followed: true
  }
];

  return (
    <div>
      {users.map(function(){
        return <h1>Hello</h1>
      })}
    </div>
  )
}

export default App
