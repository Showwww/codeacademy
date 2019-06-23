const a = {
    'monday': 9,
     "tuesday": 10
  }
  
  function getSleepHours(day) {
      return a[day];  
  }
  
  console.log(getSleepHours('monday'))
  console.log(getSleepHours('tuesday'))
  console.log(getSleepHours('monday'))