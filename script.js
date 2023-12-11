
// crud youtube

function validateform(){
    const imagen = document.getElementById('imagen').value;
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    
    if(imagen==""){
        alert("esta guardando sin imagen ");
        return true;
    }
    if(codigo==""){
        alert("campo del codigo esta vacio ");
        return false;
    }
    if(nombre==""){
        alert("campo del codigo esta vacio ");
        return false;
    }
    if(descripcion==""){
        alert("esta guardando sin descripcion ");
        return true;
    }
    if(precio==""){
        alert("campo del codigo esta vacio ");
        return false;
    }
    else if(precio < 1){
        alert("precio debe ser positivo")
    }
}

function showdatatable(){

    var pList;
    if (localStorage.getItem("product")==null){
        pList=[];

    }
    else {
        pList =JSON.parse(localStorage.getItem("product"))
    }
    var bodyT="";

    pList.forEach(function (element, index) {
        bodyT+= "<tr>" ;
        bodyT+= "<td>"+ element.imagen +"</td>" ;
        bodyT+= "<td>"+ element.codigo +"</td>" ;
        bodyT+= "<td>"+ element.nombre +"</td>" ;
        bodyT+= "<td>"+ element.descripcion +"</td>" ;
        bodyT+= "<td>"+ element.precio +"</td>" ;
        bodyT+= '<td><button onclick= "deletedata('+ 
        index+')" class="btn-red">Eliminar</button></td><button onclick= "updatedata('+
        index+')" class="btn-red">Actualizar</button>'
        bodyT+= "</tr>" ;
    });

    document.querySelector("#producttable tbody").innerHTML = bodyT;

}
document.onload =showdatatable();

function adddata(){
    if(validateform()== true){
        var imagen = document.getElementById('imagen').value;
        var codigo = document.getElementById('codigo').value;
        var nombre = document.getElementById('nombre').value;
        var descripcion = document.getElementById('descripcion').value;
        var precio = document.getElementById('precio').value; 
        
        var pList;
        if (localStorage.getItem("product")==null){
            pList=[];
    
        }
        else {
            pList =JSON.parse(localStorage.getItem("product"))
        }

        pList.push({
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio),
            igm: imagen
        });

        localStorage.setItem("product", JSON.stringify(pList));

/*       fecht('/src/data/product.json')
        .then(response => response.json())
        .then(data => {
            //data.push(pList);
            const blob = new Blob([JSON.stringify(data)], {type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'productos.json';
            a.click();
            URL.revokeObjectURL(url);
        }); */ 
        showdatatable();

        document.getElementById('imagen').value = "";
        document.getElementById('codigo').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('descripcion').value = "";
        document.getElementById('precio').value = ""; 
    }
};


function deletedata(index){
    var pList;
        if (localStorage.getItem("product")==null){
            pList=[];
    
        }
        else {
            pList =JSON.parse(localStorage.getItem("product"))
        }

    pList.splice(index);
    localStorage.setItem("product", JSON.stringify(product));
    showdatatable();
}

function updatedata(){
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";

    var pList;
        if (localStorage.getItem("product")==null){
            pList=[];
    
        }
        else {
            pList =JSON.parse(localStorage.getItem("product"))
        }

        document.getElementById('imagen').value = pList[index].imagen;
        document.getElementById('codigo').value = pList[index].codigo;
        document.getElementById('nombre').value = pList[index].nombre;
        document.getElementById('descripcion').value = pList[index].descripcion;
        document.getElementById('precio').value = pList[index].precio; 

        document.querySelector("#update").onclick =function(){
            if(validateform()== true){
                pList[index].imagen = document.getElementById("imagen").value;
                pList[index].codigo = document.getElementById("codigo").value;
                pList[index].name = document.getElementById("imagen").value;
                pList[index].descripcion = document.getElementById("descripcion").value;
                pList[index].precio = document.getElementById("precio").value;
                
                localStorage.setItem("product", JSON.stringify(product));
                showdatatable();

                document.getElementById('imagen').value = "";
                document.getElementById('codigo').value = "";
                document.getElementById('nombre').value = "";
                document.getElementById('descripcion').value = "";
                document.getElementById('precio').value = "";

                document.getElementById("add").style.display="block";
                document.getElementById("update").style.display="none";
            
            }
        }

}
