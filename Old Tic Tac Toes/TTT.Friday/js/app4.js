function SimptactoeController($scope) {

	$scope.playerLeftName = "";
	$scope.playerRightName = "";
	$scope.board = ['','','','','','', '','','',];
	$scope.player = true;

	$scope.clicker = function(cellIndex) {
		console.log($scope.board[cellIndex])
		if ($scope.board[cellIndex] != "D'Oh!" && $scope.board[cellIndex] != 'X') {

			if ($scope.player == true) {
				$scope.board[cellIndex]= 'X'; $scope.player=false;
				// console.log("winner + 'X!'");
			}
			else {
				$scope.board[cellIndex]= "D'Oh!"; $scope.player=true;
				// console.log("winner + 'D!'");
			}
		}

		checkWin();



	};
	console.log("winner + 'line 23'");
	checkWin = function(cellIndex) {

		if ( $scope.board.cells[0] == $scope.board.cells[1] && $scope.board.cells[1] == $scope.board.cells[2]) {
			winner = $scope.board.cells[cellIndex];
			console.log(winner + 'wins!');

		};
	
	};

	
}