function meetupsController($scope) {
	// body...
	$scope.meetupsCount=10;
	$scope.meetups=[
		{name:"MEAN SF fds"},
		{name:"mean 2"}

	];	
	$scope.createMeetup=function () {
		// body...
		$scope.meetups.push({name:$scope.meetupName});
	}
}