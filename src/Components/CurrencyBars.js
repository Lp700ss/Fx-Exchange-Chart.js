import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './Currency.css';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { useEffect  } from 'react';
import axios from 'axios';
import Moment from 'react-moment';


var myHeaders = new Headers();
myHeaders.append("apikey", "RMKLgv4RruXq5LZgmAVhi4lOxoqOkx37");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


const CurrencyBars = () => {

    useEffect(()=> {
        const fetchData= async()=> {
			const res = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2C%20INR%20%2C%20USD%2C%20AED%20%2C%20GBP&base=USD`, requestOptions)
			.then(response => response.json())
			// .then(result => console.log(result))
			.catch(error => console.log('error', error));
			
			// const res = await axios.get(`https://open.er-api.com/v6/latest/USD`);
			const { timestamp } = res;
			// console.log(timestamp);
			const timeStampData =[];
			timeStampData.push(timestamp);
			
			console.log(timeStampData);
			
			
const  {rates}  = res;
// {stackedData && stackedData.slice(0,5).map((rates))}
// console.log(res); 
console.log(rates); 




const dataSet1=[];
const rateData=[];
for ( const [symbol, rate] of Object.entries(rates)){
	
    dataSet1.push(symbol)
    // console.log(rate);
    rateData.push(rate);
    // rateData.reverse();
   
   //  console.log(rateData);
    // console.log("dataarr", dataSet1);
    // console.log("datapick", dataSet1[4],dataSet1[1],dataSet1[2])
}

setStackedData(dataSet1);

             setStackedData({
                 labels:dataSet1,
                 datasets: [
                   {
                     label: 'Base(USD) vs Currency Price', timeStampData,
                     data: rateData,
                     borderColor: 'rgb(255, 99, 132)',
                     backgroundColor: 'rgba(99, 132, 0.5)',
                   },

                 ],
               })
            
          .catch(e => {
                 console.log("error", e)
             })
         }
         
         fetchData();
     },[]);

	  	// const [timeData , setTimeData] =useState({
		// 	timeStamp= '',
		// });
  
       const [stackedData, setStackedData] = useState({
        labels: [],
        datasets: [{
			axis:'y',
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: '#42A5F5',
            data: [],
        }
    ]
    
    });



    const getLightTheme = () => {
       

        let stackedOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
						max: (200,9),
                    stacked: true,
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
						max: 100,
						// min: 0,
                    stacked: true,
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        
        };

        

        return {
            
            stackedOptions,
            
        }
    }

    const {  stackedOptions } = getLightTheme();

	 


    return (
        <div>
             <div className="card">
                <h5>Stacked</h5>
                <Chart type="bar" data={stackedData} options={stackedOptions} />
					 
            </div>
				<div>
					{/* <Moment unix>{stackedData.timeStampData}</Moment> */}
				</div>
        </div>
    );

    }

    


                
export default CurrencyBars;