app.controller('meetupsController',['$scope','$resource',
	function ($scope,$resource) {
		// body...
		var Meetup=$resource('/api/meetups');
		$scope.meetups=[];	
		Meetup.query(function(results){
			$scope.meetups=results;
		});
		$scope.createMeetup=function () {
			// body...
			meetup =new Meetup()
			meetup.name=$scope.meetupName;
			meetup.$save(function(result){
				$scope.meetups.push(result);
			});
			$scope.meetupName='';
			
		}
	}
])
