//Responsive Datatable
$(document).ready(function() {
    var table = $('#example').DataTable( {
    rowReorder: {
    selector: 'td:nth-child(2)'
    },
    responsive: true
});
});  

//appended link below the table 
$(document).ready(function(){
    $('<div class="clink"><a href="#">Can\'t  find who you are looking for? Need to change your directory information? Let us help!</a> </div>').insertBefore(".dataTables_paginate");
    $(".clink").css({"padding-top":"20px","padding-left":"18px"});
});

//Division dropdown button
$(document).ready(function(){
    $(".dataTables_filter").append('<div class="togg"><button class="subfilter" id="subfilter" type="button" aria-expanded="false" name="divison">Division <img src="images/illustrator/down-filled-triangular-arrow.png" alt="down-arrow" width="18" height="18"></button></div><div class="filter"><ul class="filter2 " aria-labelledby="dropdownMenuButton1" aria-controls="example"><div class="d-flex justify-content-between bg"><h4 class="ps-3 fw-normal text-uppercase fs-6 pt-1">Division</h4><a class="pe-3 pt-1 text-uppercase" href="#">Apply Filters</a></div><div class="d-flex flex-wrap division col-12"><ul class="col-md-3 pe-3 pe-md-0"><li><a href="#" class="text-dark"><input type="checkbox" id="drop1" class="pe-3" name="Administration"><label for="drop1" class="ps-2">Administration</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop2" name="Admission_and_Records"><label for="drop2" class="ps-2">Admission & Records</label></a></li><li><a href="#" class="text-dark"><input id="drop3" type="checkbox" name="Agriculture"><label for="drop3" class="ps-2">Agriculture, Food & Natural Resources</label></a></li><li><a href="#" class="text-dark"><input id="drop4" type="checkbox" name="Art_History"><label for="drop4" class="ps-2">Art History</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop5" name="Art_Media_Entertainment"><label for="drop5" class="ps-2">Art, Media & Entertainment</label></a></li><li class="ps-1"><a href="#" class="text-dark"><input type="checkbox" id="drop6" name="Automotive"><label for="drop6" class="ps-2">Automotive, Construction & Design Technology.</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" for="drop7" name="Business_and_Computer_Science"><label class="ps-2" id="drop7">Business & Computer Science</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop8" name="Business_Services"><label for="drop8" class="ps-2">Business Services</label></a></li></ul><ul class="col-md-3 pe-3 pe-md-0"><li><a href="#" class="text-dark"><input id="drop9" type="checkbox" name="Child_Development_center"><label for="drop9" class="ps-2">Child Development Center</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop10" name="College_Police"><label for="drop10" class="ps-2">College Police</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop11" name="College_store"><label for="drop11" class="ps-2">College Store</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop12" name="Computer_lab"><label for="drop12" class="ps-2">Computer Lab</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop13" name="Counselling_and_Student_Services"><label for="drop13" class="ps-2">Counseling & Student Services</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop14" name="Economic_Workforce_Development"><label class="ps-2" for="drop14">Economic & Workforce Development</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop15" name="Elk_Grove_Center"><label for="drop15" class="ps-2">Elk Grove Center</label></a></li></ul><ul class="col-md-3 pe-3 pe-md-0"><li><a href="#" class="text-dark"><input type="checkbox" id="drop16" name="English_Language_Studies"><label for="drop16" class="ps-2">English & Language Studies</label></a></li><li class="ps-1"><a href="#" class="text-dark d-flex justify-content-evenly"><input type="checkbox" id="drop17" name="Equity_Institutional"><label for="drop17" class="ps-2">Equity, Institutional Effectiveness & Innovation</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop18" name="Facility_Operations"><label for="drop18" class="ps-2">Facility & Operations</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop19" name="Financial_aid"><label for="drop19" class="ps-2">Financial Aid</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop20" name="Grounds"><label for="drop20" class="ps-2">Grounds</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop21" name="Health_and_Human_Services"><label for="drop21" class="ps-2">Health & Human Services</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop22" name="Health_Services"><label for="drop22" class="ps-2">Health Services</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop23" name="Kinesiology"><label for="drop23" class="ps-2">Kinesiology & Athletics</label></a></li></ul><ul class="col-md-3 pe-4"><li><a href="#" class="text-dark"><input type="checkbox" id="drop24" name="Library_and_Technology"><label for="drop24" class="ps-2">Library & Technology Services</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop25" name="Science_Math_Engineering"><label for="drop25" class="ps-2">Science, Math & Engineering</label></a></li><li><a href="#" class="text-dark"><input type="checkbox" id="drop26" name="Social_Behavioural_Sciences"><label for="drop26" class="ps-2">Social & Behavioral Sciences</label></a></li><li><a href="#" class="text-dark"><input id="drop27" type="checkbox" name="Student_life"><label for="drop27" class="ps-2">Student Life & Leadership</label></a></li><li><a href="#" class="text-dark"><input id="drop28" type="checkbox" name="Student_services"><label for="drop28" class="ps-2">Student Services</label></a></li><li class="ps-1"><a href="#" class="text-dark"><input type="checkbox" id="drop29" name="Enrollment_Management"><label for="drop29" class="ps-2">Student Services & Enrollment Management</label></a></li></ul></div></ul></div>');  

    $("#example_filter> label").append('<a href="#" class="text-decoration-none text-dark"><i class="fas fa-search icon"></i></a>'); 
    $("#example_filter> label").addClass("search");
    $('.search> input').attr({"placeholder":"Name"});
});
//Division toggle
$(document).ready(function(){
    $("#subfilter").click(function(){
      $(".filter").slideToggle();
      $(".filter")
    });
  });





























//DataTable function
/*$(document).ready(function() {
    $('#example').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            orderData: [ 0, 1 ]
        }, {
            targets: [ 1 ],
            orderData: [ 1, 0 ]
        }, {
            targets: [ 4 ],
            orderData: [ 4, 0 ]
        }, {
            targets: [ 5 ],
            orderData: [ 5, 0]
        } ]
    } );
} );*/

//$("#example_filter> label").append('<div class="search"></div>');
    //$("#example_paginate").append('<span class="img"><img src="images/illustrator/right-arrow.png" alt="Right-Arrow"> <span>');
//$document.ready(function(){
    //$("td").removeClass("sorting_1");
    //$("td").removeClass("sorting_2");
    //$("#example_previous").remove();
    //$("#example_next").remove();
    //$("#example_filter>label> input").removeAttr('placeholder');   
    
//});


/*$document.ready(function(){
    $(".dataTables_length").prepend('<div class="dataTables_info" id="exampleinfo" role="status" aria-live="polite">Showing 1 to 10 of 50 entries</div>');
});*/

//$("label").attr('id="line"');
//$("input").attr('id="line"');
/*$document.ready(function(){
    $('#drop1').remove('<i class="fas fa-search text-dark"></i>');
});*/

/*$(document).ready(function(){
    $.fn.dataTableExt.ofnSearch['html-input'] = function(value) {
        return $(value).val();
    };
 
/****************Table********************/
/*$('#pic_table').DataTable({
 
    columnDefs: [{ "type": "html-input", "targets": [1,2,3,4,5] }], // to have HTML tags removed for sorting/filtering
    initComplete: function () {
            var i = 0;
                this.api().columns().every( function () {
                    var column = this;
                    var select = $('<select><option value="">All</option></select>')
                        .appendTo( $('.filterhead').eq(i).empty() )
                        .on( 'change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
 
                            column
                                .search( val ? '^'+val+'$' : '', true, false )
                                .draw();
                            });
 
                        column.data().unique().sort().each( function ( d, j ) {
                            if(column.index() == 1){ d = $(d).find("input").val();}
                            if(column.index() == 2){ d = $(d).find("input").val(); }
                            if(column.index() == 3){ d = $(d).find("input").val(); }
                            if(column.index() == 4){ d = $(d).find("input").val(); }
                            select.append( '<option value="'+d+'">'+d+'</option>' )
                        } );
                        i++;
                    } );       
    }
});
*/

/*$('#example').DataTable( {
    responsive: true,
    columnDefs:[
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 2, targets: -1 }
    ]
} );*/

/*$('#example').DataTable( {
    responsive: {
        details: {
            display: $.fn.dataTable.Responsive.display.childRowImmediate
        }
    }
});*/


//dropdown filter
/*$( document ).on( "submit", ".wb-tables-filter", function( event ) {

    event.preventDefault();

    var $form = $( this ),
        $datatable = $( "#" + $form.data( "bind-to" ) ).dataTable( { "retrieve": true } ).api();

    // Lets reset the search;
    $datatable.search( "" ).columns().search( "" );

    // Lets loop throug all options
    var $value = "", $lastColumn = -1, $startDate = "1800-01-01", $endDate = "2100-01-31";
    $form.find( "[name]" ).each( function() {
        var $elm = $( this ),
            $column = parseInt( $elm.attr( "data-column" ), 10 );

        if ( $elm.is( "select" ) ) {
            $value = $elm.find( "option:selected" ).val();
        } else if ( $elm.is( ":checkbox" ) ) {
            if ( $column !== $lastColumn && $lastColumn !== -1 ) {
                $value = "";
            }
            $lastColumn = $column;

            if ( $elm.is( ":checked" ) ) {
                $value += ( $value.length > 0 ) ? "|" : "";
                $value += $elm.val();
            }
        } else if ( $elm.is( "input[type='date']" ) && $elm.val() ) {
            if ( $elm.is( "[name*='start']" ) ) {
                $startDate = $elm.val();
            } else if ( $elm.is( "[name*='end']" ) ) {
                $endDate = $elm.val();
            }

            var $filteredData = $datatable.column( $column ).data().filter( function( obj ) {
                var date1 = new Date( $startDate ),
                    date2 = new Date( $endDate ),
                    objDate = new Date( obj );

                if ( !isValidDate( date1 ) || !isValidDate( date2 ) || !isValidDate( objDate ) ) {
          return;
                }

                date1.setDate( date1.getDate() + 1 );
                date2.setDate( date2.getDate() + 1 );

                date1.setHours( 0, 0, 0, 0 );
                date2.setHours( 23, 59, 59, 999 );
                objDate.setHours( 0, 0, 0, 0 );

                return ( objDate >= date1 && objDate <= date2 );
            } );

            var data = $filteredData.join( "|" );
            $value = ( data ) ? data : "9999-99-99";
        } else {
            $value = $elm.val();
        }

        if ( $value ) {
            $value = $value.replace( /\s/g, "\\s*" );
            $datatable.column( $column ).search( "(" + $value + ")", true ).draw();
        }
    } );

    return false;
} );*/

// Used to check if browser supports the date format being used
/*function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}*/


