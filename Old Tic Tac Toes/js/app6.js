function SimptactoeController($scope) {

	$scope.playerLeftName = "";
	$scope.playerRightName = "";
	$scope.board = ['','','','','','', '','','',];
	$scope.player = true;

	var movesCount = 0;
	var win = "";

	$scope.clicker = function(cellIndex) {
		console.log($scope.board[cellIndex])
		if ($scope.board[cellIndex] != "D'Oh!" && $scope.board[cellIndex] != 'X') {

			if ($scope.player == true) {
				$scope.board[cellIndex]= 'X'; $scope.player=false;
				movesCount++;
				// console.log("win + 'X!'");
			}
			else {
				$scope.board[cellIndex]= "D'Oh!"; $scope.player=true;
				moveCount++;
				// console.log("win + 'D!'");
			}
		}

		checkWin();



	};
	//check if it's this far
	console.log("win + 'line 23'");
	

	$scope.checkWin();

	$scope.checkWin = function(cellIndex) { 


		if( $scope.cells[0] == $scope.cells[1] && $scope.cells[1] == $scope.cells[2] && $scope.cells[2]!=="") {
			alert("winner")}




		};
	
	};
	//check for Tie:
	if (movesCount == 9 && win == false) {
		alert("Tie game in Springfield. Try again.")
	};
	//winner = true;
 	//	document.getElementByTagName('h1').innerHTML=winmessage;

 	//reset button

;	
