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

	

	$scope.checkWin = function(cellIndex) {

	
		if ( $scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2]) {
			winner = $scope.cells[cellIndex];
			alert(winner + 'wins!');

		};

	
	};

};

// var message = "";

// var showMessage =  function () {
	// document.getElementById('result').style.display = 'block'
	// document.getElementById('result').innerHTML = message;
	// };

//     } 
//<-- displays a hidden div 




};
	
