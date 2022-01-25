import React, {useEffect, useState } from 'react'
import $ from 'jquery';
import { Link } from "react-router-dom";
import FiltrosBusqueda from './filtrosBusqueda';

export function Contenido() {

    const [alumnos, setAlumnos] = useState([])//estática
    const [tablaAlumnos, setTablaAlumnos] = useState([])//dinámica
    const [busqueda, setBusqueda] = useState([])//filtrada
    const [lblEtiqueta, setLblEtiqueta] = useState('Listar todas...')//filtrada


    const [etiquetas, setEtiquetas] = useState([])//estática
    const [busquedaE, setBusquedaE] = useState([])//filtrada
    const [listEtiquetas, setListaEtiquetas] = useState([])//dinámica
    const [etiquetasActuales, setEtiquetasActuales] = useState([])
    const poticionEGet=()=>{
        var listEtiquetas = [
            'HTML&CSS',
            'ANGULAR',
            'REACT',
            'SYMFONY',
            'FLUTTER',
            'PHP',
            'JAVA',
            'C#',
            'SPRING',
            'JAVASCRIPT'
        ];
        console.log(listEtiquetas)
        setListaEtiquetas(listEtiquetas)
    }

    const fn_eliminarFiltros = () => {

        //Eliminar todas las etiquetas - Inicio
        var lstEtiquetasActuales = etiquetasActuales;

        var cont = 0;
        lstEtiquetasActuales.forEach(element => {
            lstEtiquetasActuales[cont] = null;
            cont++;
        });
        //Eliminar todas las etiquetas - Fin
        setEtiquetasActuales([])
        
        $("#ddlCiudad").val('')
        //$("#txtAlumno").val('')

        $("#chPresencial")[0].checked = false
        $("#chRemoto")[0].checked = false
        $("#chTrasladoSi")[0].checked = false
        $("#chTrasladoNo")[0].checked = false
        $("#chContratado")[0].checked = false
        $("#chPendiente")[0].checked = false
        $("#chPreseleccionado")[0].checked = false
        
        handleChange2();//Misaki
        setLblEtiqueta('Listar todas...')
    }

    const seleccionar= (item) =>{
        var lstEtiquetasActuales = etiquetasActuales;
        lstEtiquetasActuales[lstEtiquetasActuales.length] =item;
        setEtiquetasActuales(lstEtiquetasActuales)
        setBusquedaE([]);
        setEtiquetas([]);
        handleChange2();//Misaki

        if(lstEtiquetasActuales.length>0){
            setLblEtiqueta('')
        }else{
            setLblEtiqueta('Listar todas...')
        }
    }
    const eliminarEtiqueta= (item) =>{
        var lstEtiquetasActuales = etiquetasActuales;
        var lstEtiquetasActuales2 = [];

        var cont = 0;
        var cont2 = 0;
        lstEtiquetasActuales.forEach(element => {
            if(element === item){
                lstEtiquetasActuales[cont] = null;
            }else{
                lstEtiquetasActuales2[cont2] = element;
                cont2++;
            }
            cont++;
        });
        lstEtiquetasActuales = lstEtiquetasActuales2

        setEtiquetasActuales(lstEtiquetasActuales)
        setBusquedaE([]);
        setEtiquetas([]);
        handleChange2();//Misaki

        if(lstEtiquetasActuales2.length>0){
            setLblEtiqueta('')
        }else{
            setLblEtiqueta('Listar todas...')
        }
    }
    const handleChangeE=e=>{
        console.log(e.target.value)
        if(e.target.value.length ===0){
            setEtiquetas([])
        }else{
            filtrarE(e.target.value);
        }

        setBusquedaE(e.target.value);
        //console.log("Busqueda : "+e.target.value);
    }
    const filtrarE=(filtro)=>{
        console.log(filtro)
        var resultado = listEtiquetas.filter((elemento) =>{
            console.log("ele -> "+elemento)
            if(elemento.toLowerCase().includes(filtro.toLowerCase())){
                return elemento;
            }
        });
        setEtiquetas(resultado);
        //setListaEtiquetas(resultado);
        console.log(resultado)
    }




    const poticionGet=()=>{
        var myJson = {datos: [
            {"id":"1","nombre":"Álvaro Sánchez Monteagudo","ciudad":"Valencia","pais":"España","telefono":"+34657852546","email":"smontegudo@gmail.com","etiquetas":["ANGULAR","REACT","+1"],"etiquetas_buscar":"ANGULAR,REACT,HTML&CSS", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
            {"id":"2","nombre":"Amparo Herra Climent","ciudad":"Sevilla","pais":"España","telefono":"+34123456789","email":"aherrera@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT", "Estado":"PDTE. OFERTAS", "Estado_buscar":"PDTE. OFERTAS", "presencialidad":"Remoto", "traslado":"trasladono"}, 
            {"id":"3","nombre":"Ana Gutierrez Lozano","ciudad":"Madrid","pais":"España","telefono":"+34987541236","email":"agutierrez@gmail.com","etiquetas":["REACT","SYMFONY"],"etiquetas_buscar":"REACT,SYMFONY", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
            {"id":"4","nombre":"Antonio Miguel Lacunza","ciudad":"Barcelona","pais":"España","telefono":"+34758426985","email":"amiguel@gmail.com","etiquetas":["ANGULAR","REACT"],"etiquetas_buscar":"ANGULAR,REACT", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
            {"id":"5","nombre":"Antonio Delgado Jimeno","ciudad":"Oviedo","pais":"España","telefono":"+34542874517","email":"adelgado@gmail.com","etiquetas":["ANGULAR","HTML&CSS"],"etiquetas_buscar":"ANGULAR,HTML&CSS", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
            {"id":"6","nombre":"Belén Jerez Rivera","ciudad":"Jaen","pais":"España","telefono":"+34968574215","email":"bjerez@gmail.com","etiquetas":["HTML&CSS"],"etiquetas_buscar":"HTML&CSS", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Presencial", "traslado":"trasladosi"}, 
            {"id":"7","nombre":"Carla Barroso Soriano","ciudad":"Gijón","pais":"España","telefono":"+34485926157","email":"cbarroso@gmail.com","etiquetas":["REACT"],"etiquetas_buscar":"REACT", "Estado":"PRESELECCIONADO", "Estado_buscar":"PRESELECCIONADO", "presencialidad":"Remoto", "traslado":"trasladono"}, 
            {"id":"8","nombre":"Carlos Yuste Guerrero","ciudad":"Valencia","pais":"España","telefono":"+34487596854","email":"cyuste@gmail.com","etiquetas":["ANGULAR"],"etiquetas_buscar":"ANGULAR", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladono"}, 
            {"id":"9","nombre":"Carmina Pérez Lopez","ciudad":"Sevilla","pais":"España","telefono":"+34154785426","email":"cperez@gmail.com","etiquetas":["FLUTTER"],"etiquetas_buscar":"FLUTTER", "Estado":"PDTE. OFERTAS", "Estado_buscar":"PDTE. OFERTAS", "presencialidad":"Remoto", "traslado":"trasladosi"}, 
            {"id":"10","nombre":"Iker Casillas","ciudad":"Madrid","pais":"España","telefono":"+34154859263","email":"ikasillas@gmail.com","etiquetas":["FLUTTER","REACT"],"etiquetas_buscar":"FLUTTER,REACT", "Estado":"CONTRATADO", "Estado_buscar":"CONTRATADO", "presencialidad":"Presencial", "traslado":"trasladosi"}]};

        console.log(myJson)
        setAlumnos(myJson.datos)
        setTablaAlumnos(myJson.datos)
    }

    const handleChange=e=>{
        setBusqueda(e.target.value);

        var ciudad = $("#ddlCiudad").val()
        var filtroGeneral = $("#txtAlumno").val()
        filtrar(filtroGeneral, ciudad);
        //console.log("Busqueda : "+e.target.value);
    }

    const handleChange2=e=>{
        //setBusqueda(e.target.value);

        var ciudad = $("#ddlCiudad").val()
        var filtroGeneral = $("#txtAlumno").val()
        filtrar(filtroGeneral, ciudad);
        //console.log("Busqueda : "+e.target.value);
    }

    const filtrar=(filtro, ciudad)=>{
        var chContratado = $("#chContratado")[0].checked
        var chPendiente = $("#chPendiente")[0].checked
        var chPreseleccionado = $("#chPreseleccionado")[0].checked
        
        var chPresencial = $("#chPresencial")[0].checked
        var chRemoto = $("#chRemoto")[0].checked
        
        var chTrasladoSi = $("#chTrasladoSi")[0].checked
        var chTrasladoNo = $("#chTrasladoNo")[0].checked

        console.log("etiquetas actuales")
        console.log(etiquetasActuales)
        var contador = 0;
        var resultado = tablaAlumnos.filter((elemento)=>{
            // console.log('Inicio - Filtro')
            // console.log(elemento.etiquetas)
            // console.log(elemento.etiquetas.includes('REACT'))
            // console.log('Fin - Filtro')
            var alguno = false;

            //Acertijo - Inicio
            //Pasa que cuando elimino etiqueta, el setEtiquetasActuales no me setea a etiquetasActuales inmediatamente. 
            //pero si puedo pasar a null el valor que deseo eliminar
            //en la siguiente busqueda de cualquier filtro, ahi si toma el setEtiquetasActuales que debió de tomar al momento de eliminar una etiqueta

            var cantidad = etiquetasActuales.length;
            var cantidad_nulos = 0;
            if(etiquetasActuales.length==0){
                alguno = true;
            }
            etiquetasActuales.forEach(element => {
                if(element == null){
                    cantidad_nulos++
                }
            });

            if(cantidad == cantidad_nulos){
                alguno = true;
            }
            //Acertijo - Fin

            etiquetasActuales.forEach(element => {
                if(elemento.etiquetas.includes(element)){
                    alguno = true;
                }
            });
            console.log('alguno (',(contador++),') = '+alguno)

            if(
                (elemento.nombre.toLowerCase().includes(filtro.toLowerCase())
                || elemento.ciudad.toLowerCase().includes(filtro.toLowerCase())
                || elemento.pais.toLowerCase().includes(filtro.toLowerCase())
                || elemento.telefono.toLowerCase().includes(filtro.toLowerCase())
                || elemento.email.toLowerCase().includes(filtro.toLowerCase())
                || elemento.etiquetas_buscar.toLowerCase().includes(filtro.toLowerCase())
                || elemento.Estado.toLowerCase().includes(filtro.toLowerCase()))
                &&
                (ciudad =="" || ciudad == elemento.ciudad)
                &&
                (
                    (chContratado == false && chPendiente == false && chPreseleccionado == false)
                    ||
                    (chContratado == true && chPendiente == true && chPreseleccionado == true)
                    ||
                    (chContratado == true && chPendiente == false && chPreseleccionado == false
                        && elemento.Estado.toLowerCase().includes("contratado"))
                    ||
                    (chContratado == false && chPendiente == true && chPreseleccionado == false
                        && elemento.Estado.toLowerCase().includes("pdte."))
                    ||
                    (chContratado == false && chPendiente == false && chPreseleccionado == true
                        && elemento.Estado.toLowerCase().includes("preseleccionado"))
                    ||
                    (chContratado == true && chPendiente == true && chPreseleccionado == false
                        && (elemento.Estado.toLowerCase().includes("contratado")
                            || elemento.Estado.toLowerCase().includes("pdte.")))
                    ||
                    (chContratado == true && chPendiente == false && chPreseleccionado == true
                        && (elemento.Estado.toLowerCase().includes("contratado")
                            || elemento.Estado.toLowerCase().includes("preseleccionado")))
                    ||
                    (chContratado == false && chPendiente == true && chPreseleccionado == true
                        && (elemento.Estado.toLowerCase().includes("pdte.")
                            || elemento.Estado.toLowerCase().includes("preseleccionado")))
                )
                &&
                (
                    (chPresencial == false && chRemoto == false)
                    ||
                    (chPresencial == true && chRemoto == true)
                    ||
                    (chPresencial == true && chRemoto == false
                        && elemento.presencialidad.toLowerCase().includes("presencial"))
                    ||
                    (chPresencial == false && chRemoto == true
                        && elemento.presencialidad.toLowerCase().includes("remoto"))
                )
                &&
                (
                    (chTrasladoSi == false && chTrasladoNo == false)
                    ||
                    (chTrasladoSi == true && chTrasladoNo == true)
                    ||
                    (chTrasladoSi == true && chTrasladoNo == false
                        && elemento.traslado.toLowerCase().includes("trasladosi"))
                    ||
                    (chTrasladoSi == false && chTrasladoNo == true
                        && elemento.traslado.toLowerCase().includes("trasladono"))
                )
                 &&
                 (
                    alguno
                 )
            ){
                return elemento;
            }
        });
        setAlumnos(resultado);
    }

    function handleOnClick (userid) {
        this.context.router.transitionTo("/");
      }

    useEffect(() => {
        poticionGet();
        poticionEGet();

        $('th').click(function() {
            var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) {
            rows = rows.reverse()
            }
            for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
            }
            setIcon($(this), this.asc);
        })

    },[])
    
      function comparer(index) {
        return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc) {
        $("th").each(function(index) {
        $(this).removeClass("sorting");
        $(this).removeClass("asc");
        $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }

    return (
        <div style={{borderTop:'solid 1px #e6e6ea'}}>
            <div className="container-fluid">
                <div className='d-flex'>
                    <div className="container-fluid">
                        <br/>
                        <div className="row">
                            <div className="form-group col-sm-12 col-md-6">
                                <table style={{width:'100%'}}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label 
                                                    style={{fontWeight:'bold', paddingRight:'20px'}} 
                                                    htmlFor="exampleInputEmail1">Alumnos</label></td>
                                            <td>
                                                <input id="txtAlumno" 
                                                value={busqueda}
                                                //onKeyUp={() => fn_Buscar()}  
                                                onChange={handleChange}
                                                placeholder='Buscar por Nombre, Email o Palabra clave...' 
                                                style={{background:'#e6e6ea'}} type="text" className="form-control" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-12 col-md-6"></div>
                        </div>
                        
                        <br/>
                        <div className="panel panel-default">
                            <div className="panel-body"
                            style={{border:'solid 1px #e6e6ea', borderRadius:'20px', background:'white', overflow:'auto'}}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>UBICACIÓN</th>
                                    {/*<th>PAIS</th>*/}
                                    <th>TELEFONO</th>
                                    <th>CORREO ELECTRÓNICO</th>
                                    <th>ETIQUETAS</th>
                                    <th style={{display:'none'}}>ETIQUETAS oculto</th>
                                    <th style={{display:'none'}}>DETALLE</th>
                                    <th>ESTADO</th>
                                    <th style={{display:'none'}}>ESTADO oculto</th>
                                </tr>
                                </thead>
                                <tbody id="idBody">
                                    {alumnos && alumnos.map((alumno)=>(
                                        <tr 
                                            style={{cursor:'pointer'}}
                                            key={alumno.id}
                                            className="sombrear">
                                            <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.nombre}</div></Link></td>
                                            <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.ciudad+","+alumno.pais}</div></Link></td>
                                            {/*<td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.pais}</div></Link></td>*/}
                                            <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.telefono}</div></Link></td>
                                            <td><Link style={{textDecoration:'none', color:'black', width:'100%'}} to={"/ficha/"+alumno.id}><div>{alumno.email}</div></Link></td>
                                            <td style={{display:'none'}}>{alumno.etiquetas_buscar}</td>
                                            <td><Link style={{textDecoration:'none', width:'100%'}} to={"/ficha/"+alumno.id}><div style={{display:'flex'}}>{
                                                alumno.etiquetas.map((etiqueta)=>(
                                                    <div key={Math.random()+""} style={{width:'minContent',
                                                                background:'#32d4a4',
                                                                margin:'0px 5px 0px 0px',
                                                                color:'white',
                                                                padding:'0px 5px 0px 5px',
                                                                borderRadius: '5px',
                                                                fontSize:'15px'
                                                                }}>{etiqueta}</div>
                                                ))
                                                }</div></Link></td>
                                            <td style={{display:'none'}}>{alumno.etiquetas}</td>
                                            <td style={{display:'none'}}>{alumno.Estado_buscar}</td>
                                            <td>
                                                <Link style={{textDecoration:'none', width:'100%'}} to={"/ficha/"+alumno.id}>
                                                    <div style={{display:'flex'}}>


                                                    {
                                                    <div key={Math.random()+""} style={{width:'minContent',
                                                                background:((alumno.Estado)==="PRESELECCIONADO"?'#3684fa':(alumno.Estado)==="PDTE. OFERTAS"?'#3fcbf8':'#32d4a4'),
                                                                margin:'0px 5px 0px 0px',
                                                                color:'white',
                                                                padding:'0px 5px 0px 5px',
                                                                borderRadius: '10px',
                                                                fontSize:'15px'
                                                                }}>{alumno.Estado}</div>
                                                }

                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div style={{borderLeft:'solid 1px #e6e6ea',minHeight: '90vh'}}>
                        {/* <FiltrosBusqueda></FiltrosBusqueda> */}
                        <div style={{width:'250px', padding:'20px 15px 15px 15px'}}>
                            {/*HOLIIIII*/}
                            <div className='container'>
                                <div className='row'  style={{fontSize:'1.1rem'}}>
                                    <div className='col'>
                                        <div style={{display:'flex'}}>
                                            <div style={{width:'90%', fontWeight:'bold'}}><span>Filtros de búsqueda</span></div>
                                            <div title='Elimiar Filtros' onClick={() => fn_eliminarFiltros()} style={{color:'#30cda0', cursor:'pointer'}}><i className="bi bi-trash"></i></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <br></br>
                                <div className="row">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Etiquetas">Tecnologías</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                                <input value={busquedaE} onChange={handleChangeE} id="txtBuscarEtiqueta" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />
                                                
                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            <span className="sr-only">
                                                
                                            </span>
                                            </button>
                                        </div>
                                        <ul>
                                            {etiquetas && etiquetas.map((item) => <li style={{cursor:'pointer'}} className='sombrear' key={Math.random()+""} onClick={()=> seleccionar(item)}>{item}</li>)}
                                        </ul>
                                    </div>
                                    <div id="dvEtiquetas">
                                        <div id='dvEtiquetasAdd'
                                            style={{display:'flex',flexFlow:'wrap'}}>
                                            <div style={{paddingLeft:'10px', fontFamily:'cursive', color:'gray', fontSize:'0.8rem'}}>{lblEtiqueta}</div>
                                            {etiquetasActuales && etiquetasActuales.map((etiqueta) => (
                                                <div key={Math.random()+""}
                                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 5px 0px',padding: '0px 5px 0px 5px',
                                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                                >
                                                    <div>
                                                        {etiqueta}
                                                    </div>
                                                    <div style={{cursor:'pointer'}} onClick={() => eliminarEtiqueta(etiqueta)}>
                                                        <i className="bi bi-x"></i>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <br></br>
                                    {/* <br></br>
                                    <br></br> */}
                                    

                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">País</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <select style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} id="ddlPais" name="select">
                                                <option value="" defaultValue>España</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            {/* <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} className="form-control">
                                                <span>Valencia</span>
                                            </div>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                            </button> */}
                                            <select style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} id="ddlCiudad" name="select" onChange={handleChange2}>
                                                <option value="" defaultValue>Todos</option>
                                                <option value="Valencia">Valencia</option>
                                                <option value="Sevilla">Sevilla</option>
                                                <option value="Madrid">Madrid</option>
                                                <option value="Barcelona">Barcelona</option>
                                                <option value="Oviedo">Oviedo</option>
                                                <option value="Jaen">Jaen</option>
                                                <option value="Gijón">Gijón</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Presencialidad">Presencial / a distancia</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPresencial" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Presencial</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chRemoto" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>En remoto</span></div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Posibilidad de Traslado</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chTrasladoSi" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Sí</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chTrasladoNo" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>No</span></div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Estado">Estado</label>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chContratado" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Contratado</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPendiente" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Pdte. ofertas</span></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" id="chPreseleccionado" onChange={handleChange2} defaultChecked={""} margin="30px" /></div>
                                        <div><span>Preseleccionado</span></div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
