$.ajax({
    url:"http://localhost:8080/webservice/webf9/mudel/2759/rpt1/data",
    type:"POST",
    dataType: "json" ,
    data: JSON.stringify({'Sorts':[{'Field':'C3','Sort':'desc'}],'SecuCode':'600000','FastQuarterReportType':['Q1th','Q2nd','Q3rd','Q4th'],'FastDateFilterType':'Latest3Year','BeginDate':'2017-10-06','EndDate':'2017-12-06','Currency':'CNY','ApiName':'JYFinanceSummaryQuarter'}),
    success:function(data,st, xhr) {
        alert(JSON.stringify(data));
    },
    error:function(xhr,st,err){
        alert("sdfsf");
    }
});


var request = new Request("http://localhost:8080/webservice/webf9/mudel/2759/rpt1/data", {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })
});


fetch(request)
.then(res => res.json())
.then(
    (json) => {
        console.log(`json`, json);
    }
)
.catch(err => console.log(`error = `, err));



// http://10.1.64.125/stock/f9/stock/templates/zbsl.html?seccode=600570&innercode=1752&gilcode=600570.SH

// http://10.1.64.125/stock/f9/stock/index.html


// http://10.1.5.202/queryservice/news/content/565694464956
// http://10.1.64.125/queryservice/news/content/565694464956

