$(document).ready(function() {
  $("#date_range").daterangepicker({
    locale: { format: 'YYYY-MM-DD' }
  });

  $("#date_range").on('apply.daterangepicker', function(ev, picker){
    Chartkick.eachChart( function(chart) {
      var path, search;
      [path, search] = chart.dataSource.split('?')
      var params = new URLSearchParams(search);
      params.set('date_start', picker.startDate.format('YYYY-MM-DD'));
      params.set('date_end', picker.endDate.format('YYYY-MM-DD'));
      chart.dataSource = path + '?' + params.toString();
      chart.refreshData();
    });
  });
});
