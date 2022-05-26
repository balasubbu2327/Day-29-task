import LineChart from 'react-linechart';

import '../node_modules/react-linechart/dist/styles.css';

export function Charts(){
    const data = [
        {									
            color: "deeppink", 
            points: [{x: 1, y: 1.5}, {x: 2, y: 4}, {x: 3, y: 8},{x: 4.5, y: 5}, {x: 5, y: 7}, {x: 6, y: 9.5}] 
        }
    ]

    return(
        <h1>Chart<LineChart 
        width={600}
        height={400}
        data={data}
    />
   
    </h1>
    );
}