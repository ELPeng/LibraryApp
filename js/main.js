function solomonsQuest(ar){
    let dilationLevel = 0
    let goromon = {
        xCoord: 0,
        yCoord: 0
    }
	ar.forEach(move => {
        dilationLevel += move[0]
        dilFactor = Math.pow(2,dilationLevel)
        switch(move[1]){
            case 0:
                return goromon.yCoord += move[2]*dilFactor
            case 1:
                return goromon.xCoord += move[2]*dilFactor
            case 2: 
                return goromon.yCoord -= move[2]*dilFactor
            case 3: 
                return goromon.xCoord -= move[2]*dilFactor
        }
    })
    return [goromon.xCoord, goromon.yCoord]
}

let map3 = [[1,1,20],[1,2,30],[1,3,8],[1,0,2],[1,1,6],[1,2,4],[1,3,6],[-7,0,100]];
console.log(solomonsQuest(map3))
