const activities = [
    'bowling',
    'movie',
    'hiking'
  ];
  
  const food = [
    'pizza',
    'Chinese',
    'Italian',
    "McDonald's",
    'Taco Bell',
    "Wendy's",
    "Del Taco", 
    "Arby's",
    'Chick-fil-a',
    "Carl's Jr.",
    'Texas Roadhouse'
  ];
  
  function getRandomNumber(){
    return (Math.floor(Math.random() * food.length));
  }
  
  // console.log(getRandomNumber());
  function getFood(){
    var a = food[getRandomNumber()];
    console.log(a);
  }
  
  function getRandomNumberActivity(){
    return (Math.floor(Math.random() * activities.length));
  }
  
  function getActivity(){
    var f = activities[getRandomNumber()];
    console.log(f);
  }
  