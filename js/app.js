function SimptactoeController($scope) {

	$scope.playerLeftName = "";
	$scope.playerRightName = "";
	$scope.board = [' ',' ',' ',' ',' ',' ', ' ',' ',' ',];
	$scope.player = true;
	$scope.gameover = false;

	$scope.clicker = function(cellIndex) {

//gameover
	
		if($scope.gameover) {
			return;
		}

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
//Winning function
	$scope.checkWin = function(cellIndex) {

		if ( $scope.board[0] == $scope.board[1] && $scope.board[1] == $scope.board[2] && $scope.board[2]!=" ") {
			winner = $scope.board[cellIndex];
			alert(winner + 'wins!'); 
			$scope.gameover=true;
		}	
		else if ( $scope.board[3] == $scope.board[4] && $scope.board[4] == $scope.board[5] && $scope.board[5]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[6] == $scope.board[7] && $scope.board[7] == $scope.board[8] && $scope.board[8]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[0] == $scope.board[3] && $scope.board[3] == $scope.board[6] && $scope.board[6]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[1] == $scope.board[4] && $scope.board[4] == $scope.board[7] && $scope.board[7]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[2] == $scope.board[5] && $scope.board[5] == $scope.board[8] && $scope.board[8]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[0] == $scope.board[4] && $scope.board[4] == $scope.board[8] && $scope.board[8]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 
		}	
		else if ( $scope.board[2] == $scope.board[4] && $scope.board[4] == $scope.board[6] && $scope.board[6]!=" ") {
		winner = $scope.board[cellIndex];
		alert(winner + 'wins!'); 
		$scope.gameover=true; 

		}
	

		else if ($scope.board[0] != " " && $scope.board[1] != " " && $scope.board[2] != " " && $scope.board[3] != " " && $scope.board[4] != " " && $scope.board[5] != " " && $scope.board[6] != " " && $scope.board[7] != " " && $scope.board[8] != " ") {
			alert("Tie Game in Springfield")
			$scope.gameover=true; 
		}; 
	
	};  //tie	needs to be included in win

	
}