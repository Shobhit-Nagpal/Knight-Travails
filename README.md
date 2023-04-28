# Knight-Travails
Knight Travails is a project under the CSE section of The Odin Project.

The goal of the project was to find the shortest path a knight can take to get from its starting position to the destination position.

To find the shortest path, Breath First Search algorithm was used.

We use the concept of graph partially where we use legalKnightMoves function to get the possible moves of a knight from a particular position and the BFS examines each position to see if it's the destination. If not, then we go to other position, get the moves a knight can make from there and check if it's the destination again.

Note: We use JSON.stringify() to be able to check if the 2 arrays (current.path and destination) are same or not. The strict equality operator (===) doesn't give accurate value when we directly compare arrays and sends the BFS in an infinite loop.