function bfs(rootNode, vertices, edges){
rootNode.distance = 0
let discovered = [rootNode]
let discoverOrder = [rootNode]

while(discovered.length !=0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes)
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
}
return discoverOrder
}

function findAdjacent(nameString, vertices, edges){
    let edgeArray = []
    let vertexArray = []

    edges.forEach(function(edge){
        
        if(edge.includes(nameString)) {
        edge.forEach( function(edgeName){
           edgeArray.push(edgeName)
            })
        }
    })
    vertices.forEach(function(vertex){

        if(edgeArray.includes(vertex.name) && vertex.name != nameString && vertex.distance == null){
            vertexArray.push(vertex)
        }
    })
     return vertexArray
}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
    adjacentNodes.map(function(node){

        node.distance = predecessor.distance + 1
        node.predecessor = predecessor
    })
}