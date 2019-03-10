(function (window) {
	function defineDtz() {
		var dtz = {};
		var masterData = {
			"Months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			"MonthsAbb": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			"Days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			"DaysAbb": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		};
		dtz.getUTCDateTime = function () {
			var date = new Date();
			return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
		};
		dtz.getCETDateTime = function () {
			var date = new Date();
			return new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (3600000 * 1));
		};
		dtz.getCESTDateTime = function () {
			var date = new Date();
			return new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (3600000 * 2));
		};
		dtz.getTimeZoneDateTime = function (offsetRelativetoUTCInHours) {
			var date = new Date();
			return new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (3600000 * (offsetRelativetoUTCInHours ? offsetRelativetoUTCInHours : 0)));
		};
		dtz.getFullDay = function () {
			var date = new Date();
			return {
				today: function () {
					return masterData.Days[date.getDay()];
				},
				tomorrow: function () {
					return masterData.Days[date.getDay() + 1];
				},
				yesterday: function () {
					let temp = masterData.Days[date.getDay() - 1];
					return temp < 0 ? masterData.Days[6] : temp;
				}
			}
		};
		dtz.getDay = function () {
			var date = new Date();
			return {
				today: function () {
					return masterData.DaysAbb[date.getDay()];
				},
				tomorrow: function () {
					let temp = masterData.DaysAbb[date.getDay() + 1];
					return temp > 6 ? masterData.Days[0] : temp;
				},
				yesterday: function () {
					let temp = masterData.DaysAbb[date.getDay() - 1];
					return temp < 0 ? masterData.Days[6] : temp;
				}
			}
		};
		dtz.getMonth = function () {
			var date = new Date();
			return {
				this: function () {
					return masterData.MonthsAbb[date.getMonth()];
				},
				next: function () {
					let temp = masterData.MonthsAbb[date.getMonth() + 1];
					return temp > 11 ? masterData.MonthsAbb[0] : temp;
				},
				prev: function () {
					let temp = masterData.MonthsAbb[date.getMonth() - 1];
					return temp < 0 ? masterData.MonthsAbb[11] : temp;
				}
			}
		};
		dtz.getFullMonth = function () {
			var date = new Date();
			return {
				this: function () {
					return masterData.Months[date.getMonth()];
				},
				next: function () {
					let temp = masterData.Months[date.getMonth() + 1];
					return temp > 11 ? masterData.Months[0] : temp;
				},
				prev: function () {
					let temp = masterData.Months[date.getMonth() - 1];
					return temp < 0 ? masterData.Months[11] : temp;
				}
			}
		};
		dtz.parse = function (format) {
			return new Date(format);
		}
		return dtz;
	}
	if (window.dtz === undefined) {
		window.dtz = defineDtz();
	}
})(window);




