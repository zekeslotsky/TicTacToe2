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
				// console.log("winner + 'D'Oh!'");
			
			}
	$scope.checkWin(cellIndex);

		}

		



	};
	console.log("winner + 'line 23'");
	$scope.checkWin = function(cellIndex) {

		if ( $scope.board[0] == $scope.board[1] && $scope.board[1] == $scope.board[2]) {
			winner = $scope.board[cellIndex];
			console.log(winner + 'wins!');

		};
	
	};

	
}