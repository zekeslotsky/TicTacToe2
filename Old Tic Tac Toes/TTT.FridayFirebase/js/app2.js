 function PlayerLeft($scope) {
    $scope.name = "";
  }

   function PlayerRight($scope) {
    $scope.name = "";
  }

	function SimptactoeController($scope) {
	$scope.board = ['','','','','','', '','','',];


	// $scope.clicker = function(cellIndex) {



			

	// 		$scope.board[cellIndex] = $scope.isXTurn? "X":"O";
	// 		$scope.isXTurn = !$scope.isXTurn; 


// it makes it so if the board is blank it puts x or o, it if is not blank it goes to the end.  How can you add Milhouse getting punched?

	//$scope.winFunction();
	// gameStatus = false;

		// if ($scope.player === true) {
		// 	$scope.board[cellIndex]= 'X';
		// }
		// else {
		// 	$scope.board[cellIndex]= 'O';
		// }




//	console.log("X wins" + gameStatus=false);}
//showMessage();}
// message = "X" wins!;
// gameStatus = false; <-- add after each

		
		
		
		$scope.player = true;



	$scope.clicker = function(cellIndex) {
		console.log($scope.board[cellIndex])
		if ($scope.board[cellIndex] != "D'Oh!" && $scope.board[cellIndex] != 'X') {

			if ($scope.player == true) {
				$scope.board[cellIndex]= 'X'; $scope.player=false;
			}
			else {
				$scope.board[cellIndex]= "D'Oh!"; $scope.player=true;
			}
			
		};
	};
		$scope.checkWin(cellIndex)


//Win checking function:
$scope.checkWin = function(cellIndex) {

	
		if ( $scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2]) {
			winner = $scope.cells[cellIndex];
			alert(winner + 'wins!');
		}
		if ( $scope.cells[3] == $scope.cells[4] && $scope.cells[4] == $scope.cells[5]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[6] == $scope.cells[7 && $scope.cells[7] == $scope.cells[8]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[0] == $scope.cells[3] && $scope.cells[3] == $scope.cells[6]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[1] == $scope.cells[4] && $scope.cells[4] == $scope.cells[7]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[2] == $scope.cells[5] && $scope.cells[5] == $scope.cells[8]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[0] == $scope.cells[4] && $scope.cells[4] == $scope.cells[8]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		}
		if ( $scope.cells[2] == $scope.cells[4] && $scope.cells[4] == $scope.cells[6]) {
			winner = $scope.cells[cellIndex];
			console.log(winner + 'wins!');
		};

//check for tie
	var gamewon == true 
	otherwise false = 
	
		var clicker ++1



};
};




// var message = "";

// var showMessage =  function () {
	// document.getElementById('result').style.display = 'block'
	// document.getElementById('result').innerHTML = message;
	// };

//     } 
//<-- displays a hidden div 


 // function checkForWinner(cells) {
 // if (cells[0]=='O' && cells[1] == 'O' && cells[2] = 'O') {
 // 	alert("O Won");

 // if (cells[3]=='O' && cells[4] == 'O' && cells[5] = 'O') {
 // 	alert("O Won");

 // if (cells[6]=='O' && cells[7] == 'O' && cells[8] = 'O') {
 // 	alert("O Won");

 // if (cells[0]=='O' && cells[3] == 'O' && cells[6] = 'O') {
 // 	alert("O Won");

 // if (cells[1]=='O' && cells[4] == 'O' && cells[7] = 'O') {
 // 	alert("O Won");

 //  if (cells[2]=='O' && cells[5] == 'O' && cells[8] = 'O') {
 // 	alert("O Won");

 //  if (cells[0]=='O' && cells[4] == 'O' && cells[8] = 'O') {
 // 	alert("O Won");

 //  if (cells[2]=='O' && cells[4] == 'O' && cells[6] = 'O') {
 // 	alert("O Won");
 // }
// copy and replace for "X Won"
 



//win:
	// [0] , [1] , [2] 
	// [3], [4], [5]
	// [6], [7], [8],
	// [0], [3], [6],
	// [1], [4], [7],
	// [2], [5], [8],
	// [0], [4], [8],
	// [2], [4], [6],




	
