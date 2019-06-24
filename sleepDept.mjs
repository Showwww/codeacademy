//sleep debt calculator.
//program will determine the actual and ideal 
//hours of sleep for each night of the last week.

const getSleepHours = (day) => {
    switch(day){
        case 'monday':
            return 8;
            case 'tuesday':
                return 5;
                case 'wednesday':
                        return 10;
          case 'friday':
              return 7;
              case 'thursday':
                  return 3;
                  default:
                      console.log('error')
                    }
                };
                //function to get the sleep hours for each night, 
                //    
                const getActualSleepHours = () => 
                getSleepHours('monday') + 
                getSleepHours('tuesday') +
                getSleepHours('wednesday') +
                getSleepHours('friday') +
                getSleepHours('thursday');
                
                const getIdealSleepHours = idealHours => 
                idealHours * 7;
                
                // 
                
                
                const calculateSleepDebt = () => {
                    const actual = getActualSleepHours();
                    const ideal = getIdealSleepHours(8); 
                    if ( actual === ideal ) {
                        console.log( ' Perfect amount of sleep. ');
                    } else if (actual > ideal ){
                        console.log( ' More sleep than needed. ');
                    } else if (actual < ideal){ 
                        console.log( ' Should get some rest. ');
                    }
                    else {console.log('Error');   
                }}