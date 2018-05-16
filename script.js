/*// functions 

function calculateAge(birthDate){
    var date = new Date().getFullYear() - birthDate;
    return date;
}

var result = calculateAge(1996);
console.log(result);
*/

// Array 
/*
var names = ['John', 'Daniel', 'Andres',
                    [   
                        'roberto','manuel',
                            [
                                'romario','rosa',
                                    [
                                        'lina','liliana'
                                    ]
            ]]];
 
            
for(var i=0 ; i < names.length ; i++){
    console.log(names[i]);

        if(names[i].length === 3){
            for(var j=0; j < names[i].length; j++){ 
                console.log(names[i][j]);       
                    if(names[i][j].length === 3){
                        for(var y=0; y < names[i][j].length ; y++ ){
                            console.log(names[i][j][y]);     
                                    if(names[i][j][y].length === 2){
                                        for(var x =0; x < names[i][j][y].length; x++){
                                            console.log(names[i][j][y][x]);
                                        }
                                    }
                                
                            }
                    }
                
            }
        }


}
*/

var car = {
    chevrolet:'spark',
    renault:'logan',
    kia:'sportage',
    nissan:'xsr3',
    mazda:'mazda6',
    chevrolet:'spark GT',
    chevrolet: 'corsa',
    mazda:'mazda3'

}
 
console.log(JSON.parse(car).chevrolet)