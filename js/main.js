
let numOfRows =document.querySelector('#rows');
let numOfColumns =document.querySelector('#columns');
let table =document.querySelector('#table');
let generate =document.querySelector('#generate');
let exprt =document.querySelector('#export');
let tableVa;
let bushTable;

function getTableSheet(){
    if (numOfRows.value==''&&numOfColumns.value=='') {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields cannot be empty!'
        });
        tableVa=false;
    } else {
    bushTable ='<tbody>';

    for(let i=0;i<numOfRows.value;i++){
        bushTable+='<tr>';
        for(let j=0; j<numOfColumns.value;j++){
           bushTable+= '<td contenteditable></td>'
        }
        bushTable+='</tr>'
    }
    bushTable+='</tbody>'
    table.innerHTML=bushTable;
    tableVa=true;
    }
}
generate.addEventListener('click',getTableSheet);

function downloadTableAsExcel() {
    if(tableVa==true){
        let html = table.outerHTML;
    
        let blob = new Blob([html], { type: 'application/vnd.ms-excel' });
        let url = URL.createObjectURL(blob);
        
        let a = document.createElement('a');
        a.href = url;
        a.download = 'My newSheet.xls';
        a.click();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No table to export!'
            });  
    }
  };
  exprt.addEventListener('click',downloadTableAsExcel);


