app.controller('meetupsController',['$scope','$resource',
	function ($scope,$resource) {
		// body...
		var Meetup=$resource('/api/meetups');
		$scope.meetups=[
			{name:"MEAN SF fds"},
			{name:"mean 2"}
		];	
		$scope.createMeetup=function () {
			// body...
			meetup =new Meetup()
			meetup.name=$scope.meetupName;
			meetup.$save();
			
		}
	}
])
