    this.get2ndLasttDate = function () {
        var d = new Date();
        var regDate = d.getDate()-1;
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var currentMonth = month[d.getMonth()];
        var currentYear = d.getFullYear();
        if (regDate < 10){
            regDate = '0'+regDate;
          }
        var today = currentMonth + ' ' + regDate + ',' + ' ' +  currentYear;
        console.log(today);
        return today;

    };
