

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var date=document.getElementById("date_row"+no);
 var pract=document.getElementById("pract_row"+no);
 var hour=document.getElementById("hour_row"+no);
 var act=document.getElementById("act_row"+no);
 var obser=document.getElementById("obser_row"+no);
	
 var date_data=date.innerHTML;
 var pract_data=pract.innerHTML;
 var hour_data=hour.innerHTML;
 var act_data=act.innerHTML;
 var obser_data=obser.innerHTML;
	
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
 pract.innerHTML="<input type='text' id='pract_text"+no+"' value='"+pract_data+"'>";
 hour.innerHTML="<input type='text' id='hour_text"+no+"' value='"+hour_data+"'>";
 act.innerHTML="<input type='text' id='act_text"+no+"' value='"+act_data+"'>";
 obser.innerHTML="<input type='text' id='obser_text"+no+"' value='"+obser_data+"'>";
}


function save_row(no)
{
 var date_val=document.getElementById("date_text"+no).value;
 var pract_val=document.getElementById("pract_text"+no).value;
 var hour_val=document.getElementById("hour_text"+no).value;
 var act_val=document.getElementById("act_text"+no).value;
 var obser_val=document.getElementById("obser_text"+no).value;

 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("pract_row"+no).innerHTML=pract_val;
 document.getElementById("hour_row"+no).innerHTML=hour_val;
 document.getElementById("act_row"+no).innerHTML=act_val;
 document.getElementById("obser_row"+no).innerHTML=obser_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}


 
  $( document ).ready(function() {
 
    var clickHandler = function() {
       
       $("#mytable").each(function () {
        
           var tds = '<tr>';
           jQuery.each($('tr:last td', this), function () {
               tds += '<td>' + $(this).html() + '</td>';
           });
           tds += '</tr>';
           if ($('tbody', this).length > 0) {          
               $('tbody', this).append(tds);
               
           } else {
              
               $(this).append(tds);
           }
       });
       $(this).remove();
       $("#insert-more").click(clickHandler);
   };
   $("#insert-more").click(clickHandler);
   });

   function verFicha() {
    window.open('verempresa.html');
   }

   function crearEmpresa() {
    window.open('CrearEmpresaForm.html');
   }